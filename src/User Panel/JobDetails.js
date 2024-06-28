import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import JobDetail from '../User Panel/JobDetail.json';
import { setJobDetails } from '../Redux/Action/JobAction';
import { addResumeDetails } from '../Redux/Action/ResumeAction';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as yup from 'yup';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

const JobDetails = () => {
    const [resumeDetails, setResumeDetail] = useState(() => {
        // Load initial data from local storage if available
        const savedResumes = localStorage.getItem("resumeDetails");
        return savedResumes ? JSON.parse(savedResumes) : [];
    });

    const validationSchema = yup.object({
        name: yup.string().required("Name is required"),
        email: yup.string().required("Email is required"),
        phone: yup.string().required("Phone number is required"),
        age: yup.string().required("Age is required"),
        gender: yup.string().required("Gender is required"),
        language: yup.string().required("Language is required"),
        experience: yup.string().required("Experience is required"),
        qualification: yup.string().required("Qualification is required"),
        resume: yup.mixed().required("Resume is required")
    });

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        const updatedResumeDetails = [...resumeDetails, values];
        setResumeDetail(updatedResumeDetails);
        console.log(values, "ddd")
        dispatch(addResumeDetails(values));
        resetForm();
        handleClose();
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const jobs = useSelector(state => state.jobs.jobList);

    useEffect(() => {
        dispatch(setJobDetails(JobDetail));
    }, [dispatch]);

    return (
        <>
            <h1 className="text-center my-4">Job Details</h1>
            <div className="container">
                <div className="row">
                    {jobs.map((job) => (
                        <div className="col-md-4 mb-4" key={job.id}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">{job.language}</h5>
                                    <p className="card-text"><strong>Qualification:</strong> {job.Qualification}</p>
                                    <p className="card-text"><strong>Experience:</strong> {job.Experience}</p>
                                    <button type='button' className='btn btn-primary' onClick={handleOpen}>Apply Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Resume Details
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <Formik
                            initialValues={{
                                name: "",
                                email: "",
                                phone: "",
                                age: "",
                                gender: "",
                                language: "",
                                experience: "",
                                qualification: "",
                                resume: null,
                            }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ setFieldValue }) => (
                                <Form>
                                    <div>
                                        <label htmlFor="name">Name</label>
                                        <Field
                                            id="name"
                                            name="name"
                                            type="text"
                                            className='form-control'
                                        />
                                        <ErrorMessage component="div" name="name" className='text-danger' />
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <Field
                                            id="email"
                                            name="email"
                                            type="text"
                                            className='form-control'
                                        />
                                        <ErrorMessage component="div" name="email" className='text-danger' />
                                    </div>
                                    <div>
                                        <label htmlFor="phone">Phone</label>
                                        <Field
                                            id="phone"
                                            name="phone"
                                            type="text"
                                            className='form-control'
                                        />
                                        <ErrorMessage component="div" name="phone" className='text-danger' />
                                    </div>
                                    <div>
                                        <label htmlFor="age">Age</label>
                                        <Field
                                            id="age"
                                            name="age"
                                            type="text"
                                            className='form-control'
                                        />
                                        <ErrorMessage component="div" name="age" className='text-danger' />
                                    </div>
                                    <div>
                                        <label htmlFor="gender">Gender</label>
                                        <Field
                                            as={RadioGroup}
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="gender"
                                        >
                                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                                        </Field>
                                        <ErrorMessage component="div" name="gender" className='text-danger' />
                                    </div>
                                    <div>
                                        <label htmlFor="language">Language</label>
                                        <Field
                                            id="language"
                                            name="language"
                                            type="text"
                                            className='form-control'
                                        />
                                        <ErrorMessage component="div" name="language" className='text-danger' />
                                    </div>
                                    <div>
                                        <label htmlFor="experience">Experience</label>
                                        <Field
                                            id="experience"
                                            name="experience"
                                            type="text"
                                            className='form-control'
                                        />
                                        <ErrorMessage component="div" name="experience" className='text-danger' />
                                    </div>
                                    <div>
                                        <label htmlFor="qualification">Qualification</label>
                                        <Field
                                            id="qualification"
                                            name="qualification"
                                            type="text"
                                            className='form-control'
                                        />
                                        <ErrorMessage component="div" name="qualification" className='text-danger' />
                                    </div>
                                    <div>
                                        <label htmlFor="resume">Resume</label>
                                        <input
                                            id="resume"
                                            name="resume"
                                            type="file"
                                            className='form-control'
                                            onChange={(e) => setFieldValue("resume", e.currentTarget.files[0])}
                                        />
                                        <ErrorMessage component="div" name="resume" className='text-danger' />
                                    </div>
                                    <button type="submit" className='btn btn-primary mt-3'>Submit</button>
                                </Form>
                            )}
                        </Formik>
                    </Typography>
                </Box>
            </Modal>
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
                            <td>{resume.name}</td>
                            <td>{resume.email}</td>
                            <td>{resume.phone}</td>
                            <td>{resume.age}</td>
                            <td>{resume.gender}</td>
                            <td>{resume.language}</td>
                            <td>{resume.experience}</td>
                            <td>{resume.qualification}</td>
                            <td>
                                {resume.resume && resume.resume instanceof File ? (
                                    <img
                                        src={URL.createObjectURL(resume.resume)}
                                        alt="Resume"
                                        style={{ height: "100px", width: "100px" }}
                                    />
                                ) : (
                                    "No resume uploaded"
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default JobDetails;
