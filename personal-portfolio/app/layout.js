import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'My Portfolio',
  description: 'My personal work and projects',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          <Navbar />
          
          <main className="main-content">
            {children}
          </main>
          
          <Footer />
        </div>
      </body>
    </html>
  );
}
