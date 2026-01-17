import { useReducer } from "react"
import magazines  from "../data/magazines";
import { catalogReducer } from "./catalogReducer"

const init = (defaultState)=>{
  const idMagazineSaved = localStorage.getItem("idMagazine");
  return {...defaultState, idMagazine: idMagazineSaved ? parseInt(idMagazineSaved): 0}
}

export default function useCatalogo() {
  const [state, dispatch] = useReducer(catalogReducer, {idCD: 0, idMagazine: 0}, init)

  const currentMagazine = magazines[state.idMagazine];
  const currentCD = currentMagazine.cds[state.idCD];
  const totalCDs = currentMagazine.cds.length;
  const currentCDNumber = state.idCD + 1;

  function handleSelectMagazine(idMagazine){
    dispatch({type: "SELECT_MAGAZINE", idMagazine})
    localStorage.setItem("idMagazine", state.idMagazine);
  }

  function handleShowNextCD(){
    dispatch({type: "NEXT_CD", totalCDs})
  }

  return {
    handleSelectMagazine,
    handleShowNextCD,
    currentCD,
    currentCDNumber,
    currentMagazine,
    totalCDs,
    magazines,
    ...state
  }
}
