import styles from '../styles/Home.module.css';

// Dados dos projetos (poderiam vir de uma API no futuro)
const projectsData = [
    {
        id: 1,
        title: 'Site de E-commerce',
        description: 'Uma plataforma de e-commerce responsiva construída com React e Next.js, com gerenciamento de estado e carrinho de compras.',
        tech: ['React', 'Next.js', 'CSS Modules'],
    },
    {
        id: 2,
        title: 'Aplicativo de Tarefas (To-Do)',
        description: 'Um aplicativo simples para gerenciamento de tarefas diárias, permitindo adicionar, editar e excluir itens.',
        tech: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
    },
    {
        id: 3,
        title: 'Blog Pessoal',
        description: 'Um blog com renderização estática usando Next.js para alta performance e SEO, com posts escritos em Markdown.',
        tech: ['Next.js', 'Markdown', 'Vercel'],
    },
];

/**
 * Projects é a seção que exibe os projetos do portfólio.
 * @returns {JSX.Element} O elemento JSX da seção de projetos.
 */
export default function Projects() {
    return (
        <section id="projects" className={styles.section}>
            <h2 className={styles.sectionTitle}>Projetos</h2>
            <div className={styles.projectsGrid}>
                {projectsData.map((project) => (
                    <div key={project.id} className={styles.projectCard}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className={styles.techTags}>
                            {project.tech.map((tag) => (
                                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
