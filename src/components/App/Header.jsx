function Header({ onSelect }) {
    return (
        <header>
            <button onClick={() => onSelect('people')}>
                People
            </button>

            <button onClick={() => onSelect('planets')}>
                Planets
            </button>

            <button onClick={() => onSelect('starships')}>
                Starships
            </button>
        </header>
    );
}

export default Header;