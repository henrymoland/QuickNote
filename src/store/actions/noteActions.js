export const createNote = (note) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('notes').add({
            ...note,
            authorFirstName: 'Henry',
            authorLastName: 'Moland',
            authorID: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_NOTE', note });
        }).catch((err) => {
            dispatch({ type: 'CREATE_NOTE_ERROR', err });
        })     
    }
};