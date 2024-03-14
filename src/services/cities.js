// services/cities.js
import axios from "axios";

const getCities = async () => {
    try {
        const response = await axios.get('http://localhost:4000/api/cities');
        return response.data;
    } catch (error) {
        console.error('Error fetching cities:', error);
        return []; 
    }
};

export default getCities