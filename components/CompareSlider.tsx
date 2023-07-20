import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export const CompareSlider = ({
  original, // Źródło zdjęcia oryginalnego
  restored, // Źródło zdjęcia po odrestaurowaniu
}: {
  original: string;
  restored: string;
}) => {
  return (
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={original} alt="oryginalne zdjęcie" />} // Wyświetl oryginalne zdjęcie
      itemTwo={<ReactCompareSliderImage src={restored} alt="odrestaurowane zdjęcie" />} // Wyświetl odrestaurowane zdjęcie
      portrait // Ustaw orientację suwaka na pionową
      className="flex w-[475px] mt-5" // Zastosuj podane klasy CSS do kontenera suwaka porównawczego
    />
  );
};
