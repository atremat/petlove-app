import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Icon from "../Icon/Icon";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logoContainer}>
        petl
        <Icon
          id="heart"
          width={17}
          height={17}
          className={styles.heartIcon}
          fillColor="#F6B83D"
        />
        ve
      </Link>

      <div className={styles.rightContainer}>
        <div className={styles.userWrapper}>
          <Icon
            id="user-fill"
            width={20}
            height={20}
            className={styles.userIcon}
            fillColor="#F6B83D"
          />
        </div>

        <div className={styles.burgerWrapper}>
          <Icon
            id="burger"
            width={20}
            height={20}
            className={styles.userIcon}
            fillColor="#262626"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
