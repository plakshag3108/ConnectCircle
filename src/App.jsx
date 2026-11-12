import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

import RoleSelection from './pages/RoleSelection';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

import './App.css';
function Home({ theme, toggleTheme }) {
  return (
    <div className="app">
      {/* NAVIGATION */}
      <nav className="navbar">
        <Link to="/" className="logo">
          <span className="logo-icon">C</span>
          ConnectCircle
        </Link>

       <div className="nav-links">
  <Link to="/dashboard/brand">
    For Brands
  </Link>

  <Link to="/dashboard/influencer">
    For Creators
  </Link>

  <Link to="/dashboard/consumer">
    For Consumers
  </Link>

  <a href="#trust-lab">
    Trust Lab
  </a>

  <a href="#pricing">
    Pricing
  </a>

  <Link to="/faq">FAQ</Link>
</div>

        <div className="nav-actions">

  <button
    type="button"
    className="theme-toggle"
    onClick={toggleTheme}
    aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
  >
    {theme === 'light' ? (
      <Moon size={19} />
    ) : (
      <Sun size={19} />
    )}
  </button>

  <Link to="/login" className="login-btn">
    Log in
  </Link>

  <Link to="/get-started" className="primary-btn">
    Get started
  </Link>

</div>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-content">
            <div className="eyebrow">
              ✦ THE FUTURE OF CREATOR COLLABORATIONS
            </div>

            <h1>
              Great brands deserve
              <br />
              <span>genuine influence.</span>
            </h1>

            <p className="hero-description">
              Where ambitious brands meet the right creators.
              Build meaningful partnerships and discover what
              truly earns consumer trust.
            </p>

            <div className="hero-buttons">
              <Link to="/register/brand" className="primary-btn large-btn">
                I'm a Brand
              </Link>

              <Link
                to="/register/influencer"
                className="secondary-btn large-btn"
              >
                I'm a Creator
              </Link>

              <Link
                to="/register/consumer"
                className="secondary-btn large-btn"
              >
                I'm a Consumer
              </Link>
            </div>

            <div className="hero-note">
              ✓ Built for real connections, not just numbers
            </div>
          </div>

          {/* PRODUCT PREVIEW */}
<div className="hero-visual">
    </div>
</section>

        {/* TRUST SIGNAL STRIP */}
        <section className="trust-strip">
          <div>
            <strong>Verified profiles</strong>
            <span>Identity and eligibility checks</span>
          </div>
          <div>
            <strong>Clear collaboration</strong>
            <span>Organised campaign workflows</span>
          </div>
          <div>
            <strong>Research-led insights</strong>
            <span>Understand what audiences trust</span>
          </div>
        </section>


{/* ABOUT CONNECTCIRCLE */}
<section className="about-section" id="about-connectcircle">
  <div className="section-heading">
    <span className="eyebrow">ABOUT CONNECTCIRCLE</span>
    <h2>Bringing brands, creators and consumers together.</h2>
    <p>
      ConnectCircle is a platform designed to make brand-creator
      collaborations more meaningful, organised and transparent.
      It brings brands and creators together while giving importance
      to consumer trust and authentic communication.
    </p>
  </div>

  <div className="about-grid">
    <article className="about-card">
      <h3>Our Purpose</h3>
      <p>
        To make it easier for brands to discover relevant creators
        and build meaningful partnerships.
      </p>
    </article>

    <article className="about-card">
      <h3>Our Approach</h3>
      <p>
        To support organised campaigns, clear expectations and
        transparent communication between users.
      </p>
    </article>

    <article className="about-card">
      <h3>Our Vision</h3>
      <p>
        To encourage authentic collaborations and help understand
        the factors that influence consumer trust.
      </p>
    </article>
  </div>
</section>


        {/* FEATURES */}
        <section className="features" id="for-brands">
          <div className="section-heading">
            <span className="eyebrow">FOR BRANDS</span>
            <h2>Find the right people for your brand.</h2>
            <p>
              Discover creators, organise campaigns and understand
              how audiences respond to sponsored content.
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <span className="feature-icon">↗</span>
              <h3>Find your people</h3>
              <p>
                Explore creator profiles that fit your niche,
                audience, campaign goals and budget.
              </p>
            </article>

            <article className="feature-card">
              <span className="feature-icon">◎</span>
              <h3>Manage campaigns</h3>
              <p>
                Keep collaboration requests, deliverables and
                campaign progress organised in one workspace.
              </p>
            </article>

            <article className="feature-card">
              <span className="feature-icon">♡</span>
              <h3>Learn from audiences</h3>
              <p>
                Explore feedback about authenticity, credibility,
                disclosure and purchase intent.
              </p>
            </article>
          </div>
        </section>

        {/* CREATOR SECTION */}
        <section className="audience-section" id="for-creators">
          <div className="audience-copy">
            <span className="eyebrow">FOR CREATORS</span>
            <h2>Your creativity deserves the right partnerships.</h2>
            <p>
              Build your profile, showcase your work and discover
              brand opportunities that fit your content and values.
            </p>
            <Link
              to="/register/influencer"
              className="primary-btn large-btn"
            >
              Join as a Creator
            </Link>
          </div>

          <div className="audience-points">
            <div className="audience-point">
              <span>01</span>
              <div>
                <h3>Showcase your work</h3>
                <p>Present your content, niche and creative strengths.</p>
              </div>
            </div>

            <div className="audience-point">
              <span>02</span>
              <div>
                <h3>Find meaningful matches</h3>
                <p>Explore campaigns that align with your interests.</p>
              </div>
            </div>

            <div className="audience-point">
              <span>03</span>
              <div>
                <h3>Build lasting relationships</h3>
                <p>Keep campaign communication and deliverables clear.</p>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST LAB */}
        <section className="trust-lab-section" id="trust-lab">
          <div className="section-heading">
            <span className="eyebrow">INTRODUCING THE CONNECTCIRCLE TRUST LAB</span>
            <h2>See what actually builds trust.</h2>
            <p>
              Reach beyond likes and views. Explore how disclosure,
              credibility and content authenticity can shape audience
              perceptions of sponsored posts.
            </p>
          </div>

          <div className="trust-lab-grid">
            <article className="trust-lab-copy">
              <span className="lab-icon">✳</span>
              <h3>Trust is more than a number.</h3>
              <p>
                The Trust Lab is designed to explore how people
                perceive influencer campaigns and which factors
                may affect credibility and purchase intent.
              </p>

              <ul>
                <li>Explore audience feedback</li>
                <li>Compare perceptions of campaign content</li>
                <li>Learn about transparency and disclosure</li>
              </ul>

              <Link
                to="/register/consumer"
                className="primary-btn large-btn"
              >
                Join as a Consumer
              </Link>
            </article>

            <article className="trust-chart-card">
              <div className="chart-heading">
                <div>
                  <span className="eyebrow">SAMPLE RESEARCH VIEW</span>
                  <h3>Disclosure and perceived trust</h3>
                </div>
                <span className="chart-tag">Illustrative</span>
              </div>

              <p className="chart-description">
                Example scores on a hypothetical 100-point scale.
              </p>

              <div className="chart-legend">
                <span><i className="legend-dot disclosure-dot" /> Clear disclosure</span>
                <span><i className="legend-dot no-disclosure-dot" /> No disclosure</span>
              </div>

              <div className="bar-chart">
                <div className="chart-row">
                  <span className="chart-label">Perceived trust</span>
                  <div className="bar-pair">
                    <div className="bar-track">
                      <div className="bar disclosure-bar" style={{ width: '78%' }} />
                    </div>
                    <div className="bar-track">
                      <div className="bar no-disclosure-bar" style={{ width: '56%' }} />
                    </div>
                  </div>
                </div>

                <div className="chart-row">
                  <span className="chart-label">Credibility</span>
                  <div className="bar-pair">
                    <div className="bar-track">
                      <div className="bar disclosure-bar" style={{ width: '84%' }} />
                    </div>
                    <div className="bar-track">
                      <div className="bar no-disclosure-bar" style={{ width: '62%' }} />
                    </div>
                  </div>
                </div>

                <div className="chart-row">
                  <span className="chart-label">Purchase intent</span>
                  <div className="bar-pair">
                    <div className="bar-track">
                      <div className="bar disclosure-bar" style={{ width: '68%' }} />
                    </div>
                    <div className="bar-track">
                      <div className="bar no-disclosure-bar" style={{ width: '59%' }} />
                    </div>
                  </div>
                </div>
              </div>

              <p className="chart-footnote">
                These values are fictional examples, not research findings.
                Actual results must come from collected and analysed data.
              </p>
            </article>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="how-section" id="how-it-works">
          <div className="section-heading">
            <span className="eyebrow">SIMPLE BY DESIGN</span>
            <h2>From first hello to real impact.</h2>
            <p>
              A clearer path from discovering the right match
              to learning what earns audience trust.
            </p>
          </div>

          <div className="steps-grid">
            <article className="step-card">
              <span className="step-icon">⌕</span>
              <span className="step-number">01</span>
              <h3>Discover</h3>
              <p>Explore creators, brands and relevant opportunities.</p>
            </article>

            <article className="step-card">
              <span className="step-icon">♡</span>
              <span className="step-number">02</span>
              <h3>Connect</h3>
              <p>Find a suitable match and start a conversation.</p>
            </article>

            <article className="step-card">
              <span className="step-icon">✳</span>
              <span className="step-number">03</span>
              <h3>Collaborate</h3>
              <p>Coordinate campaign expectations and deliverables.</p>
            </article>

            <article className="step-card">
              <span className="step-icon">↗</span>
              <span className="step-number">04</span>
              <h3>Measure trust</h3>
              <p>Explore audience perceptions and research insights.</p>
            </article>
          </div>
        </section>

        {/* VERIFICATION */}
        <section className="verification-section">
          <div>
            <span className="eyebrow">BUILT WITH ACCOUNTABILITY</span>
            <h2>Know who you're working with.</h2>
            <p>
              ConnectCircle is designed to support profile verification
              and transparent collaboration. Brand and creator accounts
              can be reviewed before receiving verified status.
            </p>
          </div>

          <div className="verification-steps">
            <div>
              <span>01</span>
              <p><strong>Submit details</strong>Complete the required registration information.</p>
            </div>
            <div>
              <span>02</span>
              <p><strong>Review</strong>Account details are checked by an administrator.</p>
            </div>
            <div>
              <span>03</span>
              <p><strong>Verification status</strong>See whether your account is pending or verified.</p>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL PLACEHOLDERS */}
        <section className="testimonials-section">
          <div className="section-heading">
            <span className="eyebrow">DESIGNED FOR BETTER CONNECTIONS</span>
            <h2>Different roles. One shared goal.</h2>
            <p>
              These are example statements illustrating the intended
              value for each type of ConnectCircle user.
            </p>
          </div>

          <div className="testimonial-grid">
            <article className="testimonial-card">
              <span className="feature-icon">“</span>
              <p>
                I want a clearer way to discover creators who align
                with my campaign goals.
              </p>
              <strong>Brand perspective</strong>
              <span>Illustrative example</span>
            </article>

            <article className="testimonial-card">
              <span className="feature-icon">“</span>
              <p>
                I want to find collaborations that fit my content
                and build lasting partnerships.
              </p>
              <strong>Creator perspective</strong>
              <span>Illustrative example</span>
            </article>

            <article className="testimonial-card">
              <span className="feature-icon">“</span>
              <p>
                I want more transparency about sponsored content
                and what makes it credible.
              </p>
              <strong>Consumer perspective</strong>
              <span>Illustrative example</span>
            </article>
          </div>
        </section>

       
{/* PRICING */}
<section className="pricing-section" id="pricing">
  <div className="section-heading">
    <span className="eyebrow">SIMPLE, TRANSPARENT OPTIONS</span>
    <h2>A model that supports collaboration.</h2>
    <p>
      The final pricing model can be configured as the platform
      develops. These are proposed options, not active plans.
    </p>
  </div>

  <div className="pricing-grid">
    <article
      className="pricing-card"
      role="button"
      tabIndex={0}
      onClick={() =>
        window.location.assign("/get-started?plan=membership")
      }
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          window.location.assign("/get-started?plan=membership");
        }
      }}
    >
      <span className="eyebrow">OPTION ONE</span>
      <h3>Membership</h3>
      <p className="pricing-subtitle">For regular platform users</p>
      <h4>Subscription-based</h4>
      <p>
        A recurring fee could provide access to selected
        discovery, campaign management and analytics features.
      </p>
      <span className="pricing-status">Proposed model</span>
      <p className="pricing-action">Explore this model →</p>
    </article>

    <article
      className="pricing-card pricing-card-featured"
      role="button"
      tabIndex={0}
      onClick={() =>
        window.location.assign("/get-started?plan=commission")
      }
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          window.location.assign("/get-started?plan=commission");
        }
      }}
    >
      <span className="eyebrow">OPTION TWO</span>
      <h3>Commission</h3>
      <p className="pricing-subtitle">For completed collaborations</p>
      <h4>Transaction-based</h4>
      <p>
        A platform fee could apply to eligible collaborations
        completed through ConnectCircle.
      </p>
      <span className="pricing-status">Proposed model</span>
      <p className="pricing-action">Explore this model →</p>
    </article>
  </div>
</section>


        {/* FINAL CTA */}
        <section className="final-cta">
          <span className="eyebrow">YOUR NEXT CONNECTION STARTS HERE</span>
          <h2>Let's make influence more meaningful.</h2>
          <p>
            Whether you build brands, create content or study
            consumer trust, there's a place for you.
          </p>
          <Link to="/get-started" className="primary-btn large-btn">
            Get started
          </Link>
        </section>
      </main>


      {/* FOOTER */}
      
<footer className="footer" id="about">
  <div className="footer-main">

    {/* Column 1: Brand */}
    <div>
      <Link to="/" className="logo">
        <span className="logo-icon">C</span>
        ConnectCircle
      </Link>
      <p>Meaningful collaborations start here.</p>
    </div>

    {/* Column 2: Explore */}
    <div className="footer-links">
      <a href="#for-brands">For Brands</a>
      <a href="#for-creators">For Creators</a>
      <a href="#trust-lab">Trust Lab</a>
      <a href="#pricing">Pricing</a>
    </div>

    {/* Column 3: Information */}
    <div className="footer-links">
      <a href="#about-connectcircle">About</a>
      <Link to="/contact">Contact</Link>
      <Link to="/privacy">Privacy</Link>
      <Link to="/terms">Terms</Link>
    </div>

  </div>

  <div className="footer-bottom">
    <span>© {new Date().getFullYear()} ConnectCircle</span>
    <span>
      Research ethics: participation should be informed,
      voluntary and transparent.
    </span>
  </div>
</footer>

    </div>
  )
}

function LoginPlaceholder() {
  return (
    <main className="role-page">
      <Link to="/" className="logo">
        <span className="logo-icon">C</span>
        ConnectCircle
      </Link>
      <section className="role-content">
        <span className="eyebrow">WELCOME BACK</span>
        <h1>Log in to ConnectCircle</h1>
        <p>
          The login form is not implemented yet. You can register
          or return to the homepage for now.
        </p>
        <Link to="/get-started" className="primary-btn large-btn">
          Get started
        </Link>
        <p className="existing-account">
          <Link to="/">← Back to homepage</Link>
        </p>
      </section>
    </main>
  )
}


function InfoPage({ type }) {
  const isPrivacy = type === 'privacy'

  return (
    <main className="role-page info-page">
      <Link to="/" className="logo">
        <span className="logo-icon">C</span>
        ConnectCircle
      </Link>

      <section className="info-content">
        <span className="eyebrow">CONNECTCIRCLE</span>
        <h1>
          {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
        </h1>

        <p className="info-updated">
          Project information | Last reviewed: November 2026
        </p>

        {isPrivacy ? (
          <>
            <h2>1. Introduction</h2>
            <p>
              ConnectCircle is designed to connect brands, creators
              and consumers through collaboration and consumer trust
              insights. This policy explains how personal information
              may be handled when using the platform.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              Depending on the features used, information may include
              names, email addresses, account details, profile
              information and information submitted through platform
              forms.
            </p>

            <h2>3. How Information Is Used</h2>
            <p>
              Information may be used to create accounts, support
              platform features, manage collaborations, maintain
              account security and improve the user experience.
            </p>

            <h2>4. Information Sharing</h2>
            <p>
              Personal information should not be shared with
              unauthorised parties. Information sharing between
              platform users should be limited to what is necessary
              for the relevant platform activity.
            </p>

            <h2>5. Data Security</h2>
            <p>
              Appropriate technical and organisational measures
              should be used to protect account information and
              prevent unauthorised access.
            </p>

            <h2>6. User Rights</h2>
            <p>
              Users should be able to request access to, correction
              of or deletion of their personal information, subject
              to applicable requirements.
            </p>

            <h2>7. Contact</h2>
            <p>
              For privacy-related questions, please contact our
              project team through the Contact page.
            </p>
          </>
        ) : (
          <>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using ConnectCircle, users agree to
              follow the applicable platform terms and use the
              platform responsibly.
            </p>

            <h2>2. User Accounts</h2>
            <p>
              Users are responsible for providing accurate
              registration information and maintaining the
              confidentiality of their account credentials.
            </p>

            <h2>3. User Responsibilities</h2>
            <p>
              Users should provide genuine information, communicate
              respectfully and avoid misleading, fraudulent or
              harmful activities.
            </p>

            <h2>4. Brand and Creator Collaborations</h2>
            <p>
              Brands and creators are responsible for agreeing on
              campaign requirements, deliverables, timelines and
              other collaboration terms before beginning a project.
            </p>

            <h2>5. Consumer Trust and Feedback</h2>
            <p>
              Feedback submitted through ConnectCircle should be
              honest, respectful and based on genuine experiences
              or clearly identified opinions.
            </p>

            <h2>6. Platform Use</h2>
            <p>
              Users must not misuse the platform, attempt
              unauthorised access, disrupt services or violate
              applicable laws.
            </p>

            <h2>7. Changes to Terms</h2>
            <p>
              These terms may be updated as platform features
              and requirements evolve. Users should review the
              latest version when changes are published.
            </p>

            <h2>8. Contact</h2>
            <p>
              For questions about these terms, please contact
              our project team through the Contact page.
            </p>
          </>
        )}

        <Link to="/contact" className="primary-btn large-btn">
          Contact our team
        </Link>
        <Link to="/" className="info-back-link">
          ← Back to homepage
        </Link>
      </section>
    </main>
  )
}



function ContactPage() {
  const creators = [
    {
      name: 'Plaksha Gupta',
      email: 'plakshagupta.mca26@bvicam.in',
    },
    {
      name: 'Nancy Gupta',
      email: 'nancygupta.mca26@bvicam.in',
    },
    {
      name: 'Rajneet Kaur',
      email: 'rajneetkaur.mca26@bvicam.in',
    },
    {
      name: 'Harshita Gulati',
      email: 'harshitagulati.mca26@bvicam.in',
    },
  ]

  return (
    <main className="role-page info-page">
      <Link to="/" className="logo">
        <span className="logo-icon">C</span>
        ConnectCircle
      </Link>

      <section className="info-content">
        <span className="eyebrow">GET IN TOUCH</span>
        <h1>Contact Our Team</h1>
        <p>
          Have a question or want to know more about ConnectCircle?
          Feel free to reach out to our project team.
        </p>

        <div className="contact-grid">
          {creators.map((creator) => (
            <article className="contact-card" key={creator.email}>
              <div className="contact-avatar">
                {creator.name.charAt(0)}
              </div>
              <h3>{creator.name}</h3>
              <a href={`mailto:${creator.email}`}>
                {creator.email}
              </a>
            </article>
          ))}
        </div>

        <Link to="/" className="primary-btn large-btn">
          Back to homepage
        </Link>
      </section>
    </main>
  )
}


function FAQPage() {
  const faqs = [
    {
      question: 'What is ConnectCircle?',
      answer: 'ConnectCircle is a platform that connects brands, creators and consumers through meaningful collaborations and consumer trust insights.',
    },
    {
      question: 'Who can join ConnectCircle?',
      answer: 'Brands, creators and consumers can all join ConnectCircle using their respective account types.',
    },
    {
      question: 'How can I create an account?',
      answer: 'Click Get Started, select your role as a Brand, Creator or Consumer, and complete the registration form.',
    },
    {
      question: 'How can brands connect with creators?',
      answer: 'Brands can discover relevant creators and explore collaboration opportunities through the platform.',
    },
    {
      question: 'Can creators apply for brand collaborations?',
      answer: 'Creators can build their profiles and explore available brand collaboration opportunities.',
    },
    {
      question: 'What is the ConnectCircle Trust Lab?',
      answer: 'The Trust Lab focuses on consumer perceptions of sponsored content, authenticity, credibility and purchase intent.',
    },
    {
      question: 'Can consumers share product feedback?',
      answer: 'ConnectCircle is designed to support consumer feedback and insights about products and sponsored content.',
    },
    {
      question: 'How can I contact the ConnectCircle team?',
      answer: 'You can visit our Contact page to find the email addresses of all four project team members.',
    },
  ]

  return (
    <main className="role-page info-page">
      <Link to="/" className="logo">
        <span className="logo-icon">C</span>
        ConnectCircle
      </Link>

      <section className="info-content faq-page-content">
        <span className="eyebrow">NEED SOME HELP?</span>
        <h1>Frequently Asked Questions</h1>
        <p>
          Find answers to common questions about ConnectCircle.
        </p>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <details className="faq-item" key={index}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>

        <p>Still have questions?</p>

        <Link to="/contact" className="primary-btn large-btn">
          Contact our team →
        </Link>

        <p>
          <Link to="/" className="info-back-link">
            ← Back to homepage
          </Link>
        </p>
      </section>
    </main>
  )
}



function LoadingScreen() {
  const name = "ConnectCircle";

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="twirl-logo">
          <span>C</span>
        </div>

        <h1 className="twirl-wordmark" aria-label={name}>
          {name.split("").map((letter, index) => (
            <span
              key={index}
              style={{ animationDelay: `${0.12 + index * 0.07}s` }}
              aria-hidden="true"
            >
              {letter}
            </span>
          ))}
        </h1>

        <p className="loading-tagline">Where genuine connections begin.</p>
      </div>
    </div>
  );
}
  
function App() {
  const [loading, setLoading] = useState(true);

  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('connectcircle-theme') || 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    try {
      localStorage.setItem('connectcircle-theme', theme);
    } catch {
      // The website still works if storage is unavailable.
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(current => current === 'light' ? 'dark' : 'light');
  };


useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2200);

  return () => clearTimeout(timer);
}, []);

if (loading) {
  return <LoadingScreen />;
}
 
  return (
    <BrowserRouter>
     

      <Routes>
        <Route
  path="/"
  element={<Home theme={theme} toggleTheme={toggleTheme} />}
/>
        <Route path="/get-started" element={<RoleSelection />} />
        <Route path="/register/:role" element={<Register />} />
        <Route path="/dashboard/:role" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<ContactPage />} />
<Route path="/privacy" element={<InfoPage type="privacy" />} />
<Route path="/terms" element={<InfoPage type="terms" />} />
<Route path="/faq" element={<FAQPage />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App

