import { NavBar } from "@/components";
import { Footer } from "@/components";
import styles from "./layout.module.css";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <nav className={styles.navbar}>
          <NavBar />
        </nav>

        <main className={styles.main}>{children}</main>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
