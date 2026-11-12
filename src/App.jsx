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
          <div>
            <Link to="/" className="logo">
              <span className="logo-icon">C</span>
              ConnectCircle
            </Link>
            <p>Meaningful collaborations start here.</p>
          </div>

          <div className="footer-links">
            <a href="#for-brands">For Brands</a>
            <a href="#for-creators">For Creators</a>
            <a href="#trust-lab">Trust Lab</a>
            <a href="#pricing">Pricing</a>
          </div>

          <div className="footer-links">
            <a href="#about">About</a>
            <a href="mailto:hello@connectcircle.example">Contact</a>
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

function InfoPage({ title }) {
  return (
    <main className="role-page">
      <Link to="/" className="logo">
        <span className="logo-icon">C</span>
        ConnectCircle
      </Link>
      <section className="role-content">
        <span className="eyebrow">CONNECTCIRCLE</span>
        <h1>{title}</h1>
        <p>
          This page needs its official content before the platform
          is ready to launch. No final policy is being presented here.
        </p>
        <Link to="/" className="primary-btn large-btn">
          Back to homepage
        </Link>
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
        <Route path="/privacy" element={<InfoPage title="Privacy" />} />
        <Route path="/terms" element={<InfoPage title="Terms" />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App

