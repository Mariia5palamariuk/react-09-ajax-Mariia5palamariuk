import axios from 'axios';

const baseUrl = 'https://swapi.py4e.com/api';

const formatPeople = (data, id) => ({
    name: data.name,
    gender: data.gender,
    birthYear: data.birth_year,
    eyeColor: data.eye_color,
    image: `https://react-10-ajax.github.io/star-wars-visualguide/img/characters/${id}.jpg`,
});

const formatPlanet = (data, id) => ({
    name: data.name,
    population: data.population,
    orbitalPeriod: data.orbital_period,
    diameter: data.diameter,
    image: `https://react-10-ajax.github.io/star-wars-visualguide/img/planets/${id}.jpg`,
});

const formatStarship = (data, id) => ({
    name: data.name,
    model: data.model,
    manufacturer: data.manufacturer,
    costInCredits: data.cost_in_credits,
    image: `https://react-10-ajax.github.io/star-wars-visualguide/img/starships/${id}.jpg`,
});

export const getData = async (id, entity) => {
    if (!['people', 'planets', 'starships'].includes(entity)) {
        return { name: 'not available' };
    }

    try {
        const response = await axios.get(`${baseUrl}/${entity}/${id}`);

        if (entity === 'people') {
            return formatPeople(response.data, id);
        }

        if (entity === 'planets') {
            return formatPlanet(response.data, id);
        }

        if (entity === 'starships') {
            return formatStarship(response.data, id);
        }
    } catch {
        return { name: 'not available' };
    }

    return { name: 'not available' };
};