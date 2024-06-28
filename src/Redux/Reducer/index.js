import { combineReducers } from 'redux';
import JobReducer from '../Reducer/JobReducer';
import ResumeReducer from '../Reducer/ResumeReducer';

const rootReducer = combineReducers({
    jobs: JobReducer,
    resume: ResumeReducer,
});

export default rootReducer;