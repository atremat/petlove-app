import { TailSpin } from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <TailSpin
      visible={true}
      height="80"
      width="80"
      color="#f4c550"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass={styles.loader}
    />
  );
};

export default Loader;
