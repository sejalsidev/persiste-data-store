// AdminPanel.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchResumeDetails } from '../Redux/Action/ResumeAction';

const AdminPanel = () => {
    const dispatch = useDispatch();
    const resumeDetails = useSelector(state => state.resume.resumeDetails
    );
    console.log(resumeDetails, "statestatestatestatestate")
    useEffect(() => {
        dispatch(fetchResumeDetails());
    }, [dispatch]);

    return (
        <div className="container mt-4">
            <h1 className="text-center">Admin Panel Submitted Resumes</h1>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Language</th>
                        <th>Experience</th>
                        <th>Qualification</th>
                        <th>Resume</th>
                    </tr>
                </thead>
                <tbody>
                    {resumeDetails?.map((resume, index) => (
                        <tr key={index}>
                            <td>{resume?.name}</td>
                            <td>{resume?.email}</td>
                            <td>{resume?.phone}</td>
                            <td>{resume?.age}</td>
                            <td>{resume?.gender}</td>
                            <td>{resume?.language}</td>
                            <td>{resume?.experience}</td>
                            <td>{resume?.qualification}</td>

                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default AdminPanel;
