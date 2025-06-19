import styles from '../styles/Home.module.css';

/**
 * Contact é a seção de contato do portfólio.
 * @returns {JSX.Element} O elemento JSX da seção de contato.
 */
export default function Contact() {
    return (
        <section id="contact" className={styles.section}>
            <h2 className={styles.sectionTitle}>Contato</h2>
            <p>
                Estou aberto a novas oportunidades e colaborações. Sinta-se à vontade
                para entrar em contato através das minhas redes sociais ou por e-mail.
            </p>
            <div className={styles.contactLinks}>
                <a href="mailto:lucas.rns.13@gmail.com" className={styles.contactLink}>
                    Email
                </a>
                <a
                    href="https://www.linkedin.com/in/lucas-ribeiro-santiago/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactLink}
                >
                    LinkedIn
                </a>
                <a
                    href="https://github.com/LucasRibeiroSN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactLink}
                >
                    GitHub
                </a>
            </div>
        </section>
    );
}
