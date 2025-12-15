import React, { useState } from 'react';
import axios from 'axios';
import './StudentRegistrationForm.css'; // Assume you rename the CSS file

const StudentRegistrationForm = () => {
    // 1. State for form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        gender: '',
        course: '',
    });
    // 2. State for handling API status messages
    const [message, setMessage] = useState(null);
    const [isError, setIsError] = useState(false);

    // Handles changes to any input field
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handles form submission and API call
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null); // Clear previous messages
        setIsError(false);

        // --- MERN API Call Setup ---
        const API_URL = 'http://localhost:5000/api/students/register'; 

        try {
            // Replace with the actual endpoint of your Express server
            const response = await axios.post(API_URL, formData);
            
            setMessage(`Success! Student registered with ID: ${response.data._id}`);
            setFormData({ name: '', email: '', phone: '', gender: '', course: '' }); // Clear form
        } catch (error) {
            console.error('Registration failed:', error);
            setIsError(true);
            setMessage(error.response?.data?.message || 'Registration failed. Please check the server.');
        }
    };

    return (
        <div className="form-page-container">
            <div className="registration-container">
                <h2>Student Registration (MERN Ready)</h2>
                
                <form onSubmit={handleSubmit}>
                    
                    {/* Name Field */}
                    <div className="form-group">
                        <label htmlFor="name">Full Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>

                    {/* Email Field */}
                    <div className="form-group">
                        <label htmlFor="email">Email Address:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>

                    {/* Phone Field */}
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder="e.g., 1234567890" value={formData.phone} onChange={handleChange} required />
                    </div>

                    {/* Gender Field (Radio Group) */}
                    <div className="form-group">
                        <label>Gender:</label>
                        <div className="radio-group">
                            <label><input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} required /> Male</label>
                            <label><input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} /> Female</label>
                            <label><input type="radio" name="gender" value="other" checked={formData.gender === 'other'} onChange={handleChange} /> Other</label>
                        </div>
                    </div>

                    {/* Course Field (Select Dropdown) */}
                    <div className="form-group">
                        <label htmlFor="course">Course/Program:</label>
                        <select id="course" name="course" value={formData.course} onChange={handleChange} required>
                            <option value="">-- Select a Course --</option>
                            <option value="CS">Computer Science</option>
                            <option value="IT">Information Technology</option>
                            <option value="Business">Business Administration</option>
                            <option value="Arts">Liberal Arts</option>
                        </select>
                    </div>
                    
                    <button type="submit" className="submit-btn">Register Student</button>
                    
                    {/* Display API Message */}
                    {message && (
                        <div className={`message ${isError ? 'error' : 'success'}`}>
                            {message}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default StudentRegistrationForm;