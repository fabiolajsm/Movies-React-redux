import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <Link to="/" onClick={() => window.scroll(0, 0)} className={styles.header}>
            Movie list
        </Link>
    );
};

export default Header;