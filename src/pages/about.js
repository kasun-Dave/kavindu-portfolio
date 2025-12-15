import Head from 'next/head';
import NavBar from '@/components/NavBar';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Head>
        <title>About Me - Kavindu Vikum</title>
        <meta name="description" content="Learn more about Kavindu Vikum" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className="main-container">
        <div className="about-container">
          <div className="about-header">
            <h1 className="about-title">About Me</h1>
          </div>

          <div className="about-content">
            <div className="about-text">
              <p className="about-intro">
                I am <strong>Kavindu Vikum</strong>, a passionate esports player specializing in Free Fire, 
                with strong tactical awareness and team coordination skills. Alongside gaming, I am deeply 
                involved in cricket, which has shaped my discipline, focus, and leadership.
              </p>
              
              <p className="about-description">
                Representing Vidyaratha College, Kandy, I believe true performance comes from preparation, 
                consistency, and mental strength. Whether it&apos;s in the virtual battlefield or on the cricket 
                field, I bring dedication and strategic thinking to every challenge.
              </p>

              <div className="skills-section">
                <h2 className="skills-title">Skills & Strengths</h2>
                <div className="skills-grid">
                  <div className="skill-card">
                    <span className="skill-icon">🎮</span>
                    <h3>Free Fire Strategy & Gameplay</h3>
                  </div>
                  <div className="skill-card">
                    <span className="skill-icon">🧠</span>
                    <h3>Fast Decision Making</h3>
                  </div>
                  <div className="skill-card">
                    <span className="skill-icon">🤝</span>
                    <h3>Squad Coordination</h3>
                  </div>
                  <div className="skill-card">
                    <span className="skill-icon">🏏</span>
                    <h3>Cricket Discipline & Team Play</h3>
                  </div>
                  <div className="skill-card">
                    <span className="skill-icon">⚡</span>
                    <h3>Competitive Mindset</h3>
                  </div>
                  <div className="skill-card">
                    <span className="skill-icon">🎯</span>
                    <h3>Aim & Movement Control</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-image">
              <Image 
                src="images/profile/kavindu-profile.png" 
                alt="Kavindu Vikum" 
                width={400} 
                height={400}
                className="about-profile-image"
              />
            </div>
          </div>

          <div className="footer-tagline">
            <h3>&quot;Play with purpose. Compete with discipline.&quot;</h3>
          </div>
        </div>
      </main>

      <style jsx>{`
        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 0;
        }

        .about-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .about-title {
          font-size: 3.5rem;
          font-weight: 800;
          color: #1F1F1F;
          margin-bottom: 1rem;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 4rem;
          align-items: start;
          margin-bottom: 4rem;
        }

        .about-text {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .about-intro,
        .about-description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #4A4A4A;
        }

        .about-intro strong {
          color: #1F1F1F;
          font-weight: 700;
        }

        .skills-section {
          margin-top: 2rem;
        }

        .skills-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1F1F1F;
          margin-bottom: 1.5rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .skill-card {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
        }

        .skill-icon {
          font-size: 2rem;
          display: block;
          margin-bottom: 0.5rem;
        }

        .skill-card h3 {
          font-size: 1rem;
          font-weight: 600;
          color: #1F1F1F;
        }

        .about-image {
          position: sticky;
          top: 2rem;
        }

        .about-profile-image {
          width: 100%;
          height: auto;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .footer-tagline {
          text-align: center;
          padding: 3rem 0;
          border-top: 2px solid #E0E0E0;
        }

        .footer-tagline h3 {
          font-size: 1.8rem;
          font-weight: 600;
          color: #1F1F1F;
          font-style: italic;
        }

        @media (max-width: 968px) {
          .about-title {
            font-size: 2.5rem;
          }

          .about-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .about-image {
            order: -1;
            max-width: 350px;
            margin: 0 auto;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .about-title {
            font-size: 2rem;
          }

          .footer-tagline h3 {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </>
  );
}
