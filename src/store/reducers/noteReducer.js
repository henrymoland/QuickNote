const initState = {
    notes: [
        {
            id: '1',
            title: 'Work on web project',
            content: 'Finish up web projec. Need to revise header and content'
        },
        {
            id: '2',
            title: 'Lean Pyhton',
            content: 'Finish up web projet. Need to revise header and content'
        },
        {
            id: '3',
            title: 'Make a beat for Philthy Rich',
            content: 'Finish up web projec. Need to revise header and content'
        },
    ]
}

const noteReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_NOTE':
            console.log('created note', action.note)
            return state;

        case 'CREATE_NOTE_ERROR':
            console.log('create note error', action.err)
            return state;

        default:
        return state;
    }   
}

export default noteReducer;