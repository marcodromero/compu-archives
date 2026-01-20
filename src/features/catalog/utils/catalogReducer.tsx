type stateType = {
  idMagazine: number;
  idCD: number;
};

type actionType =
  | { type: 'SELECT_MAGAZINE'; idMagazine: number }
  | { type: 'NEXT_CD'; totalCDs: number };

export function catalogReducer(state: stateType, action: actionType) {
  switch (action.type) {
    case 'SELECT_MAGAZINE':
      return {
        ...state,
        idMagazine: action.idMagazine,
        idCD: 0,
      };

    case 'NEXT_CD':
      return {
        ...state,
        idCD: (state.idCD + 1) % action.totalCDs,
      };

    default:
      return state;
  }
}
