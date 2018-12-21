const initState = {
    projects: [
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

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer;