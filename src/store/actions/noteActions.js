export  const createNote = (note) => {
    return (dispatch, getState) => {
        dispatch({type: 'CREATE_NOTE', note});
    }
};