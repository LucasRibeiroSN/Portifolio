import './globals.css';
import { Inter } from 'next/font/google';

// Configuração da fonte Inter do Google Fonts
const inter = Inter({ subsets: ['latin'] });

// Metadados do site
export const metadata = {
    title: 'Portfólio Dev ',
    description: 'Meu portfólio',
};

/**
 * RootLayout é o layout principal que envolve todas as páginas.
 * @param {object} props - As propriedades do componente.
 * @param {React.ReactNode} props.children - Os componentes filhos que serão renderizados dentro do layout.
 * @returns {JSX.Element} O elemento JSX do layout raiz.
 */
export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
        {/* A propriedade suppressHydrationWarning é adicionada para evitar erros de hidratação
        causados por extensões de navegador que modificam o HTML.
      */}
        <body className={inter.className} suppressHydrationWarning={true}>
        {children}
        </body>
        </html>
    );
}
