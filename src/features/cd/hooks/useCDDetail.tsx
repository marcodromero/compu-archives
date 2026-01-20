import { useParams } from 'react-router-dom';
import cds from '../api/cds';
import { useState } from 'react';

export function useCDDetail() {
  const [index, setIndex] = useState(0);
  const { code } = useParams();
  const cdData = cds.find((cd) => cd.code === code);
  const images: string[] = cdData?.images ?? [];
  const totalImages: number = images.length;

  function handleClickNext() {
    if (totalImages === 0) return;
    setIndex((prev) => (prev + 1) % totalImages);
  }

  function handleClickBack() {
    if (totalImages === 0) return;
    setIndex((prev) => (prev - 1 + totalImages) % totalImages);
  }

  return {
    handleClickNext,
    handleClickBack,
    cdData,
    index,
  };
}
