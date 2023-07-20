import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import { Testimonials } from "../components/Testimonials";

const Home: NextPage = () => {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Fotomagia</title>
      </Head>
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-28 mt-20">
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out"
        >
          Uwielbiany przez <span className="font-semibold">wielu</span> zadowolonych użytkowników
        </a>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
          Poprawianie zdjęć{" "}
          <span className="relative whitespace-nowrap text-[#3290EE]">
            <SquigglyLines />
            <span className="relative">za pomocą AI</span>
          </span>{" "}
          nawet dla pięknych osób.
        </h1>

        {/* Comment: Main description */}
        <p className="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">
          Masz stary, rozmazany zdjęcie? Pozwól naszej zaawansowanej sztucznej inteligencji podnieść jakość tych wspomnień i przywrócić im nowe życie.
          Bez żadnych opłat - odzyskaj już dziś swoje zdjęcia sprzed lat.
        </p>
        
        <div className="flex justify-center space-x-4">
          {/* Comment: Learn more button */}
          <a
            className="bg-white rounded-xl text-black font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-gray-100 border"
            href="bednarski.ch"
            target="_blank"
            rel="noreferrer"
          >
            Dowiedz się więcej
          </a>

          {/* Comment: Restore photos button */}
          <Link
            className="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80"
            href="/restore"
          >
            Napraw swoje zdjęcia
          </Link>
        </div>

        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-2 sm:flex-row flex-col">
              <div>
                {/* Comment: Original photo */}
                <h2 className="mb-1 font-medium text-lg">Oryginalne zdjęcie</h2>
                <Image
                  alt="Oryginalne zdjęcie mojego brata"
                  src="/michael.jpg"
                  className="w-96 h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                {/* Comment: Fixed photo */}
                <h2 className="mb-1 font-medium text-lg">Naprawione zdjęcie</h2>
                <Image
                  alt="Naprawione zdjęcie mojego brata"
                  width={400}
                  height={400}
                  src="/michael-new.jpg"
                  className="w-96 h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
