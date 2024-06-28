const initialState = {
    jobList: []
};

const JobReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_JOB_DETAILS':
            return {
                ...state,
                jobList: action.payload
            };
        default:
            return state;
    }
};

export default JobReducer;
