import { useEffect, useState } from 'react';
import { getData } from '../../services/swDataHandler';
import Card from './Card';
import Header from './Header';

function App() {
    const [id, setId] = useState(1);
    const [entity, setEntity] = useState('people');
    const [data, setData] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            const result = await getData(id, entity);
            setData(result);
        };

        loadData();
    }, [id, entity]);

    const handleNext = () => {
        setId((currentId) => currentId + 1);
    };

    const handleSelect = (selectedEntity) => {
        setEntity(selectedEntity);
        setId(1);
    };

    const getImageUrl = () => {
        if (entity === 'people') {
            return `https://react-10-ajax.github.io/star-wars-visualguide/img/characters/${id}.jpg`;
        }

        if (entity === 'planets') {
            return `https://react-10-ajax.github.io/star-wars-visualguide/img/planets/${id}.jpg`;
        }

        return `https://react-10-ajax.github.io/star-wars-visualguide/img/starships/${id}.jpg`;
    };

    return (
        <div>
            <Header onSelect={handleSelect} />

            <Card
                data={data}
                imageUrl={getImageUrl()}
            />

            <button onClick={handleNext}>
                Next
            </button>
        </div>
    );
}

export default App;

