export  const createNote = (note) => {
    return (dispatch, getState, getFirebase, getFirestore) => {
        dispatch({type: 'CREATE_NOTE', note});
    }
};