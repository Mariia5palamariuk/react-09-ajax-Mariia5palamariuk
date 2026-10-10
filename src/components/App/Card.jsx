export default function Card({ data, imageUrl }) {
    if (!data) {
        return null;
    }

    return (
        <div>
            <img
                src={imageUrl}
                alt={data.name}
                width="300"
            />

            <h3>{data.name}</h3>

            <ul>
                {Object.entries(data)
                    .filter(([key]) => key !== 'name' && key !== 'image')
                    .map(([key, value]) => (
                        <li key={key}>
                            <strong>{key}:</strong> {value}
                        </li>
                    ))}
            </ul>
        </div>
    );
}