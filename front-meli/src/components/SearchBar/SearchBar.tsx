import { SetStateAction, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import searchIcon from "../../assets/search.svg"
import styles from "./styles.module.scss"

const Searchbar = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleChange = (ev: { target: { value: SetStateAction<string>; }; }) => {
        setQuery(ev.target.value);
    };

    const handleSubmit = (ev: { preventDefault: () => void; }) => {
        ev.preventDefault();
        if (query) {
            navigate(`/items?search=${query}`);
        }
    };

    return (
        <form  onSubmit={handleSubmit} data-testid='search-form'>
        <section className={styles.section}>
           
            <div>
            <Link to={"/"}> <h1>Mercado Libre</h1></Link>
           
            </div>
            <div>
            <input
                type='text'
                placeholder='Nunca dejes de buscar'
                id='search-input'
                value={query}
                onChange={handleChange}
            />
            <button aria-label='Buscar'>
                <img style={{width:"10px"}} src={searchIcon} alt="Search" />
            </button>

            </div>

            </section>    
       
           
        </form>
    );
};

export default Searchbar;
