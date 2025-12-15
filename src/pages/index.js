import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import HireMe from '@/components/HireMe';
import LightBulb from '@/components/LightBulb';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kavindu Vikum - Free Fire Player & Cricket Enthusiast</title>
        <meta name="description" content="Competitive Free Fire expert and cricket enthusiast from Vidyaratha College, Kandy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className="main-container">
        <div className="hero-section">
          {/* Profile Image */}
          <div className="profile-image-container">
            <Image 
              src="images/profile/kavindu-profile.png" 
              alt="Kavindu Vikum Profile" 
              width={550} 
              height={550}
              priority
              className="profile-image"
            />
          </div>

          {/* Hero Content */}
          <div className="hero-content">
            <h1 className="hero-title">
              Precision, Strategy, and Passion. Built to Compete.
            </h1>
            <p className="hero-description">
              I&apos;m <strong>Kavindu Vikum</strong>, a competitive Free Fire expert and a dedicated cricket enthusiast from Vidyaratha College, Kandy. 
              I thrive in high-pressure moments, combining fast decision-making, teamwork, and discipline both in esports and on the cricket field.
            </p>
            <div className="hero-buttons">
              <a href="/dummy.pdf" download className="btn-primary">
                Player Profile 
                <Image 
                  src="images/svgs/external-link.svg" 
                  alt="Download" 
                  width={20} 
                  height={20}
                  className="btn-icon"
                />
              </a>
              <Link href="/contact" className="btn-secondary">
                Join / Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Join Squad Badge */}
        <HireMe />

        {/* Trophy */}
        <LightBulb />
      </main>
    </>
  );
}
