import veenaImage from "../assets/picture/veena.avif";

function Home() {
  return (
    <section id="home" className="home-hero">
      <div className="home-grid">
        <div className="home-copy">
          <p className="home-tagline">Hello, I'm</p>
          <h1 className="home-title">Veena Sahu</h1>
          <p className="home-subtitle">
            A software developer specializing in modern React applications,
            beautiful interfaces, and responsive web experiences.
          </p>
          <div className="home-actions">
            <a href="#projects" className="btn primary-btn">
              View Projects
            </a>
            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="home-image-card">
          <img src={veenaImage} alt="Veena Sahu" />
        </div>
      </div>
    </section>
  );
}

export default Home;
