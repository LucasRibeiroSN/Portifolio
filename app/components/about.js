import styles from '../styles/Home.module.css';

/**
 * About é a seção "Sobre Mim" do portfólio.
 * @returns {JSX.Element} O elemento JSX da seção "Sobre".
 */
export default function About() {
    return (
        <section id="about" className={styles.section}>
            <h2 className={styles.sectionTitle}>Sobre Mim</h2>
            <p>
                Olá! Sou um desenvolvedor web apaixonado por criar soluções digitais
                elegantes e funcionais. Tenho experiência com tecnologias modernas como
                React, Next.js e Node.js. Estou sempre em busca de novos desafios e
                oportunidades para aprimorar minhas habilidades e contribuir para
                projetos inovadores.
            </p>
        </section>
    );
}
