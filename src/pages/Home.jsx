import veenaImage from "../assets/picture/image.jpg";

function Home() {
  return (
    <section id="home" className="home-hero">
      <div className="home-grid">
        <div className="home-copy">
          <p className="home-tagline">Hello, I'm</p>
          <h1 className="home-title">Veena Sahu</h1>
          
             <div className="about">
          <h1 className="about-heading">About Me</h1>
          <p className="home-subtitle">
            A software developer specializing in modern React applications,
            beautiful interfaces, and responsive web experiences.
          </p>
          <p className="about-text">

Hi, I'm Veena Sahu, a passionate web developer with knowledge of HTML, CSS, JavaScript, React.js, and Node.js. I enjoy creating responsive and user-friendly websites while continuously learning new technologies. I have worked on projects like a Job Portal and a Portfolio Website. My goal is to become a skilled Full Stack Developer and build innovative web applications.
</p>
        </div>
        
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
