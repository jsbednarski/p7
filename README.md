# Poprawianie zdjęć twarzy

Projekt umożliwia poprawianie zdjęć twarzy przy użyciu technologii deep learning. Użytkownik może przesłać swoje zdjęcie, a następnie otrzymać odtworzoną wersję tego zdjęcia.

## Technologie

Next.js - framework React do renderowania po stronie serwera oraz obsługi routingu i SSR (Server-Side Rendering).
React - biblioteka JavaScript do tworzenia interfejsu użytkownika.
Tailwind CSS - narzędzie do szybkiego tworzenia responsywnych i dostosowywalnych interfejsów użytkownika.
Prisma - narzędzie ORM (Object-Relational Mapping) do obsługi bazy danych.
TypeScript - rozszerzenie języka JavaScript o statyczną typizację.
NextAuth.js - biblioteka do obsługi uwierzytelniania i autoryzacji w aplikacjach Next.js.
Vercel - platforma do wdrażania i hostingu aplikacji Next.js.

## Usługi zewnętrzne
Aplikacja Naprawiacz Twarzy korzysta z następujących usług zewnętrznych:

Replicate AI - platforma do sztucznej inteligencji, która umożliwia przywracanie starych, rozmytych fotografii twarzy.
Upstash - usługa obsługująca Redis w chmurze, która może być wykorzystywana do przechowywania i zarządzania danymi aplikacji.

## Wymagania

- Node.js (wersja 14.x lub wyższa)
- NPM (wersja 6.x lub wyższa)

## Instalacja

1. Sklonuj repozytorium: `git clone https://github.com/twoje-konto/nazwa-repozytorium.git`
2. Przejdź do katalogu projektu: `cd nazwa-repozytorium`
3. Zainstaluj zależności: `npm install`

## Uruchamianie

Aby uruchomić projekt, wykonaj następujące kroki:

1. Wprowadź odpowiednie konfiguracje w pliku `.env`.
2. Uruchom projekt: `npm start`.

## Struktura projektu

- `components/` - komponenty React używane w projekcie
- `lib/` - pliki bibliotek
- `pages/` - pliki Next.js zawierające strony
- `prisma/` - pliki konfiguracyjne Prisma ORM
- `public/` - pliki publiczne, takie jak obrazy i style
- `styles/` - pliki CSS lub SCSS
- `utils/` - narzędzia pomocnicze
- `.env` - plik konfiguracyjny zmiennych środowiskowych
- `.gitignore` - plik ignorujący określone pliki i katalogi w systemie kontroli wersji Git
- `next.config.js` - plik konfiguracyjny Next.js
- `package-lock.json` - plik wygenerowany przez NPM do dokładnej replikacji drzewa zależności
- `package.json` - plik zawierający informacje o projekcie i zależnościach
- `postcss.config.js` - plik konfiguracyjny dla narzędzia PostCSS

## Kontakt

Jeśli masz jakieś pytania lub uwagi, skontaktuj się z nami pod adresem [jsbednarski@outlook.com]
