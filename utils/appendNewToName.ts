export default function appendNewToName(name: string) {
  let insertPos = name.indexOf("."); // Znajduje pozycję pierwszego wystąpienia kropki w nazwie pliku
  let newName = name // Tworzy nową nazwę pliku
    .substring(0, insertPos) // Pobiera fragment nazwy przed kropką
    .concat("-new", name.substring(insertPos)); // Łączy fragment przed kropką, "-new" oraz fragment po kropce
  return newName; // Zwraca nową nazwę pliku
}
