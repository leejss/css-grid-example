import type { PropsWithChildren } from "react";
import styles from "./Layout.module.css";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <div className={styles.div}>{children}</div>
    </main>
  );
};

export default Layout;
