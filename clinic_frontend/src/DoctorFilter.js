import React, { useState } from 'react';

function DoctorFilter({ onFilter }) {
    const [speciality, setSpeciality] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleFilter = () => {
        onFilter({ speciality, date, time });
    };

    return (
        <div>
            <label>
                Speciality:
                <input type="text" value={speciality} onChange={e => setSpeciality(e.target.value)} />
            </label>
            <label>
                Date:
                <input type="date" value={date} onChange={e => setDate(e.target.value)} />
            </label>
            <label>
                Time:
                <input type="time" value={time} onChange={e => setTime(e.target.value)} />
            </label>
            <button onClick={handleFilter}>Filter</button>
        </div>
    );
}

export default DoctorFilter;
