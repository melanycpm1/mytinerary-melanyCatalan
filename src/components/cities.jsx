import React, { useEffect, useState } from 'react';
import getCities from '../services/cities';
import Carussel from './carossel';

function Cities() {
    const [ciudades, setCiudades] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const citiesData = await getCities();
                setCiudades(citiesData);
            } catch (error) {
                console.error("Error fetching cities:", error);
            }
        };

        fetchCities();
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const filteredCiudades = ciudades.filter(ciudad =>
        ciudad.name.toLowerCase().includes(searchTerm)
    );

    return (
        <section>
            <div className="search-container">
                <input
                    type='text'
                    name='Name_city'
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder='Buscar ciudad...'
                />
            </div>
            <h2>Ciudades</h2>
            {filteredCiudades.length > 0 && <Carussel champion={filteredCiudades}/> }
        </section>
    );
}

export default Cities;
