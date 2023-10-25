
import Searchbar from '../SearchBar/SearchBar';
import styles from "./styles.module.scss"


const Navbar = () => (
    <nav className={styles.navbar}>
        <div>
          <Searchbar  />
        </div>
    </nav>
);

export default Navbar;
