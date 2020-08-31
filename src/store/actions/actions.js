export const fetchHouses = () => {
  return async (dispatch) => {
    try {
      const resp = await fetch(
        `http://mr-test-backend.sadek.usermd.net/houses`
      );
      const data = await resp.json();
      dispatch({
        type: 'FETCH_HOUSES',
        data,
      });
    } catch (er) {
      console.log(er);
    }
  };
};
