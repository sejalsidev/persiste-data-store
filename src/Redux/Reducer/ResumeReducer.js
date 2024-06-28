import { SET_RESUME_DETAILS, FETCH_RESUME_DETAILS } from '../Action/ResumeAction';

const initialState = {
    resumeDetails: [],
};

const ResumeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESUME_DETAILS:
            console.log("action.payloadaction.payloadaction.payload", action.payload)
            return {
                ...state,
                resumeDetails: [...state.resumeDetails, action.payload],
            };
        case FETCH_RESUME_DETAILS:
            return {
                ...state,
                resumeDetails: action.payload,
            };
        case 'ADD_RESUME_DETAILS':
            const updatedResumes = [...state.resumeDetails, action.payload];
            console.log(updatedResumes, "updatedResumes")
            localStorage.setItem("resumeDetails", JSON.stringify(updatedResumes));
            return {
                ...state,
                resumeDetails: updatedResumes,
            };
        default:
            return state;
    }
};

export default ResumeReducer;

