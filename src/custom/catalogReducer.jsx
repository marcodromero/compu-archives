export function catalogReducer(state, action) {
  switch (action.type) {
    case 'SELECT_MAGAZINE':
      return {
        ...state,
        idMagazine: action.idMagazine,
        idCD: 0 
      };

    case 'NEXT_CD':
      return {
        ...state,
        idCD: (state.idCD + 1) % action.totalCDs
      };

    default:
      return state;
  }
}