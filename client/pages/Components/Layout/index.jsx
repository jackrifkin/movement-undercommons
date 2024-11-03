import Footer from "../Footer";
import Navigation from "../Navigation";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.layoutWrapper}>
      <Navigation />
      <main className={styles.layoutContent}>{children}</main>
      <Footer />
    </div>
  );
}
