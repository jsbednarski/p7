import * as tf from "@tensorflow/tfjs"; // Importuje bibliotekę TensorFlow.js
import * as nsfwjs from "nsfwjs"; // Importuje bibliotekę nsfwjs

tf.enableProdMode(); // Włącza tryb produkcyjny TensorFlow.js

class NSFWPredictor { // Deklaruje klasę NSFWPredictor
  model: nsfwjs.NSFWJS | null = null; // Inicjalizuje zmienną model, która jest typu nsfwjs.NSFWJS lub null, i przypisuje jej wartość null

  constructor() { // Definiuje konstruktor klasy NSFWPredictor
    this.model = null; // Inicjalizuje zmienną model wartością null
    this.getModel(); // Wywołuje metodę getModel()
  }

  async getModel() { // Deklaruje metodę getModel() asynchroniczną
    try {
      this.model = await nsfwjs.load( // Ładuje model nsfwjs i przypisuje go do zmiennej model
        "https://nsfw-model-1.s3.us-west-2.amazonaws.com/nsfw-predict-model/",
        // @ts-ignore
        { type: "graph" }
      );
    } catch (error) {
      console.error(error); // Wyświetla błąd w konsoli
    }
  }

  predict(element: HTMLImageElement, guesses: number) { // Deklaruje metodę predict(), która przyjmuje element HTMLImageElement i liczbę guesses
    if (!this.model) {
      throw new Error("Some error occured, please try again later!"); // Rzuca wyjątek, jeśli model jest null
    }
    return this.model.classify(element, guesses); // Wykonuje predykcję na modelu dla danego elementu
  }

  async predictImg(file: File, guesses = 5) { // Deklaruje metodę predictImg() asynchroniczną, która przyjmuje plik File i domyślnie ustawia guesses na 5
    const url = URL.createObjectURL(file); // Tworzy URL dla pliku

    try {
      const img = document.createElement("img"); // Tworzy element <img>
      img.width = 400; // Ustawia szerokość elementu <img> na 400 pikseli
      img.height = 400; // Ustawia wysokość elementu <img> na 400 pikseli

      img.src = url; // Ustawia źródło elementu <img> na URL pliku
      return await new Promise<nsfwjs.predictionType[]>((res) => { // Zwraca nową obietnicę z wynikami predykcji
        img.onload = async () => { // Ustawia zdarzenie, które zostanie wywołane po załadowaniu obrazu
          const results = await this.predict(img, guesses); // Wykonuje predykcję na elemencie <img>
          URL.revokeObjectURL(url); // Zwalnia URL pliku
          res(results); // Rozwiązuje obietnicę z wynikami predykcji
        };
      });
    } catch (error) {
      console.error(error); // Wyświetla błąd w konsoli
      URL.revokeObjectURL(url); // Zwalnia URL pliku
      throw error; // Rzuca wyjątek
    }
  }

  async isSafeImg(file: File) { // Deklaruje metodę isSafeImg() asynchroniczną, która przyjmuje plik File
    try {
      const predictions = await this.predictImg(file, 3); // Wykonuje predykcję na obrazie
      const pornPrediction = predictions.find( // Wyszukuje predykcję klasy "Porn"
        ({ className }) => className === "Porn"
      );
      const hentaiPrediction = predictions.find( // Wyszukuje predykcję klasy "Hentai"
        ({ className }) => className === "Hentai"
      );

      if (!pornPrediction || !hentaiPrediction) { // Sprawdza, czy predykcje dla "Porn" i "Hentai" nie istnieją
        return true; // Zwraca true
      }

      return !(
        pornPrediction.probability > 0.25 || hentaiPrediction.probability > 0.25
      ); // Zwraca true, jeśli prawdopodobieństwo dla "Porn" i "Hentai" jest mniejsze lub równe 0.25
    } catch (error) {
      console.error(error); // Wyświetla błąd w konsoli
      throw error; // Rzuca wyjątek
    }
  }
}

export default new NSFWPredictor(); // Eksportuje nową instancję klasy NSFWPredictor
