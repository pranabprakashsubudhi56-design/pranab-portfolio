import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary Education</h4>
                <h5>S.C.S Higher Secondary, Puri</h5>
              </div>
              <h3>2021 - 2023</h3>
            </div>
            <p>
              Completed Higher Secondary Education (Class XII - CHSE) with a focus on science, physics, mathematics, and computer applications, achieving a percentage of 70%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>Centurion University (CUTM)</h5>
              </div>
              <h3>2023 - NOW</h3>
            </div>
            <p>
              Specializing in AR-VR & Metaverse technologies. Maintaining a GPA of 8.9/10.0 while developing immersive 3D environments, virtual systems, and web projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>3D Design & AR-VR Intern</h4>
                <h5>GT-Tech Pvt. Ltd.</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed interactive AR/VR applications and Metaverse environments in Unity and C#. Optimized 3D assets in Blender and Maya to reduce memory footprint and improve runtime performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
