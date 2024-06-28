
export const ADD_RESUME_DETAILS = 'ADD_RESUME_DETAILS';
export const SET_RESUME_DETAILS = 'SET_RESUME_DETAILS';
export const FETCH_RESUME_DETAILS = 'FETCH_RESUME_DETAILS';

export const setResumeDetails = (resume) => ({
    type: 'SET_RESUME_DETAILS',
    payload: resume,
});

export const fetchResumeDetails = () => {
    return (dispatch) => {
        const savedResumes = localStorage.getItem("resumeDetails");
        const resumes = savedResumes ? JSON.parse(savedResumes) : [];
        dispatch({
            type: 'FETCH_RESUME_DETAILS',
            payload: resumes,
        });
    };
};
export const addResumeDetails = (resume) => ({
    type: 'ADD_RESUME_DETAILS',
    payload: resume,
});
