import styles from '../styles/Home.module.css';

/**
 * Header é o componente de cabeçalho do portfólio.
 * @returns {JSX.Element} O elemento JSX do cabeçalho.
 */
export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <h1 className={styles.title}>Lucas Ribeiro</h1>
                <p className={styles.subtitle}>Desenvolvedor Web</p>
            </div>
        </header>
    );
}