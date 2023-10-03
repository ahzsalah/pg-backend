import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewFamilyMembers({ patientID }) {
    const [familyMembers, setFamilyMembers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/familyMembers/${patientID}`);
                setFamilyMembers(response.data);
            } catch (error) {
                alert('Error fetching family members.');
            }
        };
        fetchData();
    }, [patientID]);

    return (
        <div>
            {/* Display family members */}
        </div>
    );
}

export default ViewFamilyMembers
