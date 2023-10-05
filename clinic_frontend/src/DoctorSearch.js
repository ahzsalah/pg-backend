import React, { useState } from 'react';

function DoctorSearch({ onSearch }) {
    const [query, setQuery] = useState('');

    return (
        <div>
            <input
                type="text"
                placeholder="Search by name or speciality..."
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <button onClick={() => onSearch(query)}>Search</button>
        </div>
    );
}

export default DoctorSearch;
