import React, { useState } from 'react';
import axios from 'axios';

function AddFamilyMember() {
    const [formData, setFormData] = useState({
        name: '',
        nationalID: '',
        age: '',
        gender: '',
        relation: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/api/familyMembers/add', formData);
            alert('Family member added successfully!');
        } catch (error) {
            alert('Error adding family member.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Input fields for name, nationalID, age, gender, relation */}
            <button type="submit">Add Family Member</button>
        </form>
    );
}

export default AddFamilyMember;
