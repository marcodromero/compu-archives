import { useEffect, useReducer } from 'react';
import magazines from '../api/magazines';
import { catalogReducer } from '../utils/catalogReducer';

type defaultStateType = {
  idCD: number;
  idMagazine: number;
};

const init = (defaultState: defaultStateType) => {
  const idMagazineSaved = localStorage.getItem('idMagazine');
  const idCDSaved = localStorage.getItem('idCD');
  return {
    ...defaultState,
    idMagazine: idMagazineSaved ? parseInt(idMagazineSaved) : 0,
    idCD: idCDSaved ? parseInt(idCDSaved) : 0,
  };
};

export default function useCatalogo() {
  const [state, dispatch] = useReducer(
    catalogReducer,
    { idCD: 0, idMagazine: 0 },
    init, //inicializador
  );

  const currentMagazine = magazines[state.idMagazine];
  const currentCD = currentMagazine.cds[state.idCD];
  const totalCDs = currentMagazine.cds.length;
  const currentCDNumber = state.idCD + 1;

  function handleSelectMagazine(idMagazine: number) {
    dispatch({ type: 'SELECT_MAGAZINE', idMagazine });
  }

  function handleShowNextCD() {
    dispatch({ type: 'NEXT_CD', totalCDs });
  }

  useEffect(() => {
    localStorage.setItem('idMagazine', String(state.idMagazine));
    localStorage.setItem('idCD', String(state.idCD));
  }, [state.idMagazine, state.idCD]);

  return {
    handleSelectMagazine,
    handleShowNextCD,
    currentCD,
    currentCDNumber,
    currentMagazine,
    totalCDs,
    magazines,
    ...state,
  };
}
