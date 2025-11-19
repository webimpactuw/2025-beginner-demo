import Link from "next/link";

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Hi, I'm [Your Name]</h1>
        <p className="hero-subtitle">
          Frontend Developer | UX Enthusiast | React Specialist.
          I build accessible, pixel-perfect, and performant web experiences.
        </p>
        
        <div className="hero-buttons">
          <Link href="/projects" className="btn btn-primary">
            View My Work
          </Link>
          <Link href="/contact" className="btn btn-outline">
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-grid">
        <div className="feature-item">
          <span className="feature-icon">🚀</span>
          <h3>Fast Performance</h3>
          <p>Building optimized web applications that load instantly and perform smoothly.</p>
        </div>
        <div className="feature-item">
          <span className="feature-icon">📱</span>
          <h3>Responsive Design</h3>
          <p>Layouts that look great on any device, from mobile phones to large desktop screens.</p>
        </div>
        <div className="feature-item">
          <span className="feature-icon">💡</span>
          <h3>Creative Solutions</h3>
          <p>Turning complex problems into simple, elegant, and intuitive user interfaces.</p>
        </div>
      </section>
    </div>
  );
}