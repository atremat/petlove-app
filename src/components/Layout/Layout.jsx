import { Suspense } from "react";
import styles from "./Layout.module.css";
import Loader from "../Loader/Loader";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  const isLoading = false;

  return (
    <div className={styles.container}>
      <Header />

      {isLoading && <Loader />}

      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};

export default Layout;
