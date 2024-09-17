import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/layouts/header/Header';
import Brackets from './components/layouts/brackets/Brackets';
import Footer from './components/layouts/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Traffic Radar',
    description: 'Generated by Towikk',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} body`}>{children}</body>
        </html>
    );
}
