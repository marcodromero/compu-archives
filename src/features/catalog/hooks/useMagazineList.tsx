import { useEffect, useRef } from 'react';

export function useMagazineList(idMagazine: number) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (selectedRef.current) {
      selectedRef.current.scrollIntoView({
        behavior: 'auto',
        block: 'nearest',
      });
    }
  }, [idMagazine]);

  return { scrollContainerRef, selectedRef };
}
