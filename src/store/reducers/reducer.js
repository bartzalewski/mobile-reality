let initState = {
  houses: [],
  grabbedData: false,
};

const reducer = (state = initState, action) => {
  if (action.type === 'FETCH_HOUSES') {
    let ch = action.data;
    const items = ch.map((item) => {
      return item;
    });
    if (ch) {
      return {
        ...state,
        houses: items,
        grabbedData: true,
      };
    } else {
      return {
        ...state,
        message: 'No houses',
      };
    }
  }
  return state;
};

export default reducer;
