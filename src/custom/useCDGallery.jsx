import { useParams } from "react-router-dom";
import cds  from "../data/cds";
import { useState } from "react";

export function useCDGallery(){
  const [index, setIndex] = useState(0);
  const { code } = useParams();
  const cdData = cds.find(cd => cd.code === code);
  const images = cdData.images ? cdData.images : [];
  const totalImages = images.length;

  function handleClickNext(){
    setIndex((prev) => (prev + 1) % totalImages)
  }

  function handleClickBack(){
    setIndex((prev) => (prev - 1 + totalImages) % totalImages)
  }

  return{
    handleClickNext,
    handleClickBack,
    cdData,
    index
  }

}