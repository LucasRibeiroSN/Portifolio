import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import styles from './styles/Home.module.css';

/**
 * Home é o componente principal da página inicial.
 * Ele renderiza todos os componentes da seção principal.
 * @returns {JSX.Element} O elemento JSX da página inicial.
 */
export default function Home() {
  return (
      <main className={styles.mainContainer}>
        <Header />
        <div className={styles.contentWrapper}>
          <About />
          <Projects />
          <Contact />
        </div>
      </main>
  );
}
