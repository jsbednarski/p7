import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { UploadDropzone } from "react-uploader";
import { Uploader } from "uploader";
import { CompareSlider } from "../components/CompareSlider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoadingDots from "../components/LoadingDots";
import Toggle from "../components/Toggle";
import appendNewToName from "../utils/appendNewToName";
import downloadPhoto from "../utils/downloadPhoto";
import NSFWPredictor from "../utils/nsfwCheck";
import va from "@vercel/analytics";
import { useSession, signIn } from "next-auth/react";
import useSWR from "swr";
import { Rings } from "react-loader-spinner";

// Konfiguracja dla uploadera
const uploader = Uploader({
  apiKey: !!process.env.NEXT_PUBLIC_UPLOAD_API_KEY
    ? process.env.NEXT_PUBLIC_UPLOAD_API_KEY
    : "free",
});

const Home: NextPage = () => {
  const [originalPhoto, setOriginalPhoto] = useState<string | null>(null); // Przechowuje URL oryginalnego zdjęcia
  const [restoredImage, setRestoredImage] = useState<string | null>(null); // Przechowuje URL odtworzonego zdjęcia
  const [loading, setLoading] = useState<boolean>(false); // Flaga wskazująca, czy trwa ładowanie
  const [restoredLoaded, setRestoredLoaded] = useState<boolean>(false); // Flaga wskazująca, czy odtworzone zdjęcie zostało załadowane
  const [sideBySide, setSideBySide] = useState<boolean>(false); // Flaga wskazująca, czy wyświetlać zdjęcia obok siebie
  const [error, setError] = useState<string | null>(null); // Przechowuje informację o błędzie
  const [photoName, setPhotoName] = useState<string | null>(null); // Przechowuje nazwę zdjęcia

  const fetcher = (url: string) => fetch(url).then((res) => res.json()); // Funkcja do pobierania danych z serwera
  const { data, mutate } = useSWR("/api/remaining", fetcher); // Hook SWR do pobierania danych z serwera
  const { data: session, status } = useSession(); // Hook Next Auth do zarządzania sesją użytkownika

  const options = {
    maxFileCount: 1, // Maksymalna liczba plików do przesłania
    mimeTypes: ["image/jpeg", "image/png", "image/jpg"], // Dozwolone typy plików
    editor: { images: { crop: false } }, // Konfiguracja edytora
    styles: { colors: { primary: "#000" } }, // Stylizacja komponentu
    onValidate: async (file: File): Promise<undefined | string> => {
      let isSafe = false;
      try {
        isSafe = await NSFWPredictor.isSafeImg(file); // Sprawdzenie, czy obraz jest bezpieczny
        if (!isSafe) va.track("Zablokowano obraz NSFW"); // Śledzenie zablokowania obrazu NSFW
      } catch (error) {
        console.error("Predyktor NSFW zgłosił błąd", error);
      }
      if (!isSafe) {
        return "Wykryto obraz NSFW, który jest niedozwolony.";
      }
      if (data.remainingGenerations === 0) {
        return "Brak pozostałych generacji na dzisiaj.";
      }
      return undefined;
    },
  };

  const UploadDropZone = () => (
    <UploadDropzone
      uploader={uploader}
      options={options}
      onUpdate={(file) => {
        if (file.length !== 0) {
          setPhotoName(file[0].originalFile.originalFileName); // Ustawienie nazwy zdjęcia
          setOriginalPhoto(file[0].fileUrl.replace("raw", "thumbnail")); // Ustawienie URL oryginalnego zdjęcia
          generatePhoto(file[0].fileUrl.replace("raw", "thumbnail")); // Generowanie odtworzonego zdjęcia
        }
      }}
      width="670px"
      height="250px"
    />
  );

  async function generatePhoto(fileUrl: string) {
    await new Promise((resolve) => setTimeout(resolve, 500)); // Opóźnienie symulujące proces generacji zdjęcia
    setLoading(true);

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imageUrl: fileUrl }),
    });

    let newPhoto = await res.json();
    if (res.status !== 200) {
      setError(newPhoto); // Ustawienie błędu
    } else {
      mutate();
      setRestoredImage(newPhoto); // Ustawienie URL odtworzonego zdjęcia
    }
    setLoading(false);
  }

  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Odtwórz zdjęcia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header photo={session?.user?.image || undefined} />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-4 sm:mb-0 mb-8">
        <a
          href="https://twitter.com/nutlope/status/1626074563481051136"
          target="_blank"
          rel="noreferrer"
          className="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:text-slate-600 transition duration-300 ease-in-out"
        >
          <span className="font-semibold">647,143 zdjęcia</span> odtworzone i liczone
        </a>
        <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-900 sm:text-6xl mb-5">
          Odtwórz dowolne zdjęcie twarzy
        </h1>
        {status === "authenticated" && data && (
          <p className="text-slate-500">
            Masz{" "}
            <span className="font-semibold">
              {data.remainingGenerations} generacji
            </span>{" "}
            pozostałe na dzisiaj. Twoje generacje
            {Number(data.remainingGenerations) > 1 ? "są" : ""} odnowią się za{" "}
            <span className="font-semibold">
              {data.hours} godzin i {data.minutes} minut.
            </span>
