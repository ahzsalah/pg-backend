import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// const clinicMarkup = 0.10;
// const sessionPrice = doctor.rate + (doctor.rate * clinicMarkup) - someDiscount; 


function DoctorList() {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/doctors');
                setDoctors(response.data);
            } catch (error) {
                console.error("Error fetching doctors:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Doctors List</h2>
            {doctors.map(doctor => (
                <div key={doctor._id}>
                    <Link to={`/doctor/${doctor._id}`}>{doctor.name}</Link> - {doctor.speciality}
                </div>
            ))}
        </div>
    );
}

export default DoctorList;
