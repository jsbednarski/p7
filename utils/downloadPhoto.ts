function forceDownload(blobUrl: string, filename: string) {
  let a: any = document.createElement("a"); // Tworzy element <a>
  a.download = filename; // Ustawia atrybut download na nazwę pliku
  a.href = blobUrl; // Ustawia atrybut href na blob URL
  document.body.appendChild(a); // Dodaje element <a> do ciała dokumentu
  a.click(); // Wywołuje zdarzenie kliknięcia na elemencie <a>
  a.remove(); // Usuwa element <a> z dokumentu
}

export default function downloadPhoto(url: string, filename: string) {
  fetch(url, {
    headers: new Headers({
      Origin: location.origin,
    }),
    mode: "cors",
  })
    .then((response) => response.blob()) // Pobiera dane jako obiekt Blob
    .then((blob) => {
      let blobUrl = window.URL.createObjectURL(blob); // Tworzy blob URL dla obiektu Blob
      forceDownload(blobUrl, filename); // Wywołuje funkcję forceDownload() z blob URL i nazwą pliku
    })
    .catch((e) => console.error(e)); // Wyświetla błąd w konsoli, jeśli wystąpił
}
