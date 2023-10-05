import React, { useEffect, useState } from 'react';
import axios from 'axios';

// const clinicMarkup = 0.10;
// const sessionPrice = doctor.rate + (doctor.rate * clinicMarkup) - someDiscount; 


function DoctorDetails({ match }) {
    const [doctor, setDoctor] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/doctors/${match.params.doctorId}`);
                setDoctor(response.data);
            } catch (error) {
                console.error("Error fetching doctor details:", error);
            }
        };
        fetchData();
    }, [match.params.doctorId]);

    return doctor ? (
        <div>
            <h2>{doctor.name}</h2>
            <p>Speciality: {doctor.speciality}</p>
            <p>Affiliation: {doctor.affiliation}</p>
            <p>Education: {doctor.education}</p>
            {/* Add more details as needed */}
        </div>
    ) : <p>Loading...</p>;
}

export default DoctorDetails;
