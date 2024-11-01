import { NavLink } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <main className={styles.main}>
      <div>
        4
        <div>
          <img />
        </div>
        4
      </div>
      <p>Ooops! This page not found :(</p>
      <NavLink to="/">To home page</NavLink>
    </main>
  );
};

export default NotFoundPage;
