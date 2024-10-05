import axios from 'axios';

   export const fetchNEOData = async () => {
     try {
       const response = await axios.get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=3FPBmKxJegXDRztxQcGYCvpjeHXgdIVAcMpJIEAM');
       const neoData = response.data.near_earth_objects.map((neo) => ({
         id: neo.id,
         name: neo.name,
         size: neo.estimated_diameter.kilometers.estimated_diameter_max / 1000, // convert to kilometers
         color: getRandomColor(),
         semiMajorAxis: calculateSemiMajorAxis(neo.orbital_data.semi_major_axis),
         eccentricity: neo.orbital_data.eccentricity,
         x: Math.random() * 10, // Example X position
         y: Math.random() * 10, // Example Y position
         z: Math.random() * 10  // Example Z position
       }));
       return neoData;
     } catch (error) {
       console.error('Error fetching data:', error);
       return [];
     }
   };

   const getRandomColor = () => {
     const letters = '0123456789ABCDEF';
     let color = '#';
     for (let i = 0; i < 6; i++) {
       color += letters[Math.floor(Math.random() * 16)];
     }
     return color;
   };

   const calculateSemiMajorAxis = (semiMajorAxis) => {
     return semiMajorAxis; // Adjust according to your requirements
   };