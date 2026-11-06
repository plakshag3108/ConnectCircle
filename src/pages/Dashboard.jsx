
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const creatorData = [
  { name: 'Aarohi Sharma', handle: '@aarohistyle', niche: 'Fashion', followers: '42.5K', engagement: '4.8%', rate: '₹8,000', color: '#f0d8c9' },
  { name: 'Meera Kapoor', handle: '@meeraliving', niche: 'Lifestyle', followers: '28.2K', engagement: '5.2%', rate: '₹5,500', color: '#dfe3d6' },
  { name: 'Riya Verma', handle: '@riyabeauty', niche: 'Beauty', followers: '65.1K', engagement: '3.9%', rate: '₹12,000', color: '#eee0d1' },
  { name: 'Ananya Das', handle: '@ananyaeats', niche: 'Food', followers: '19.8K', engagement: '6.1%', rate: '₹4,000', color: '#ead8df' },
]

const campaigns = [
  { name: 'The Everyday Edit', brand: 'Mira Studio', category: 'Fashion', budget: '₹5,000–₹10,000', description: 'Show how everyday essentials fit into your personal style.', type: 'Instagram Reel' },
  { name: 'Little Rituals', brand: 'Earth & Essence', category: 'Beauty', budget: '₹3,000–₹8,000', description: 'Create authentic content around your favourite self-care rituals.', type: 'Reel + Story' },
  { name: 'A Taste of Home', brand: 'Goodfolk Foods', category: 'Food', budget: '₹4,000–₹7,000', description: 'Share a recipe or food moment that feels like home.', type: 'Instagram Post' },
]

function Sidebar({ role, active, setActive }) {
  const items = role === 'brand'
    ? [['Overview', '⌂'], ['Discover creators', '◎'], ['My campaigns', '▤'], ['Shortlist', '♡']]
    : role === 'influencer'
      ? [['Overview', '⌂'], ['Discover campaigns', '◎'], ['My applications', '▤'], ['My profile', '♡']]
      : [['Overview', '⌂'], ['Available surveys', '◎'], ['My responses', '▤'], ['Trust insights', '♡']]

  return (
    <aside className="dash-sidebar">
      <Link to="/" className="logo dash-logo">
        <span className="logo-icon">C</span>
        ConnectCircle
      </Link>

      <p className="sidebar-label">WORKSPACE</p>

      <nav className="sidebar-nav">
        {items.map(([label, icon]) => (
          <button
            key={label}
            className={`sidebar-item ${active === label ? 'active' : ''}`}
            onClick={() => setActive(label)}
          >
            <span>{icon}</span>{label}
          </button>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="sidebar-help">
          <span>✳</span>
          <strong>Built on trust.</strong>
          <p>Meaningful connections start with authenticity.</p>
        </div>
        <Link to="/" className="sidebar-home">← Back to homepage</Link>
      </div>
    </aside>
  )
}

function Dashboard() {
  const { role } = useParams()
  const [active, setActive] = useState('Overview')
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [shortlisted, setShortlisted] = useState([])
  const [applied, setApplied] = useState([])
  const [surveyRatings, setSurveyRatings] = useState({})
  const [submittedSurveys, setSubmittedSurveys] = useState([])
  const [notice, setNotice] = useState('')

  const validRole = ['brand', 'influencer', 'consumer'].includes(role)
  const isBrand = role === 'brand'
  const isCreator = role === 'influencer'
  const title = isBrand ? 'Brand workspace' : isCreator ? 'Creator studio' : 'Consumer Trust Lab'
  const firstName = isBrand ? 'there' : isCreator ? 'creator' : 'friend'

  if (!validRole) {
    return (
      <main className="role-page">
        <h1>Dashboard not found</h1>
        <Link to="/get-started">Choose your role</Link>
      </main>
    )
  }

  const filteredCreators = creatorData.filter((creator) => {
    const matchesSearch = `${creator.name} ${creator.handle} ${creator.niche}`.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === 'All' || creator.niche === category
    const matchesShortlist = active !== 'Shortlist' || shortlisted.includes(creator.handle)
    return matchesSearch && matchesCategory && matchesShortlist
  })

  const filteredCampaigns = campaigns.filter((campaign) => {
    const matchesSearch = `${campaign.name} ${campaign.brand} ${campaign.category}`.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === 'All' || campaign.category === category
    return matchesSearch && matchesCategory
  })

  const surveys = [
    { id: 1, title: 'Does disclosure build trust?', topic: 'Sponsored content', time: '2 min', description: 'Explore how clear sponsorship labels affect your confidence in a creator.' },
    { id: 2, title: 'The authentic recommendation', topic: 'Creator credibility', time: '3 min', description: 'Share what makes a product recommendation feel genuine to you.' },
    { id: 3, title: 'From discovery to purchase', topic: 'Buying decisions', time: '2 min', description: 'Tell us how creator content influences your shopping decisions.' },
  ]

  const stats = isBrand
    ? [['Active campaigns', '04', 'Across your workspace'], ['Creators discovered', '128', 'Sample platform data'], ['Shortlisted', String(shortlisted.length).padStart(2, '0'), 'Your saved creators'], ['Campaign budget', '₹48K', 'Illustrative total']]
    : isCreator
      ? [['Open opportunities', String(campaigns.length).padStart(2, '0'), 'Sample opportunities'], ['Applications sent', String(applied.length).padStart(2, '0'), 'Your activity'], ['Shortlisted by brands', '03', 'Sample platform data'], ['Profile strength', '75%', 'Demo estimate']]
      : [['Available surveys', String(surveys.length).padStart(2, '0'), 'Ready to explore'], ['Surveys completed', String(submittedSurveys.length).padStart(2, '0'), 'Your activity'], ['Trust topics', '03', 'Explore different themes'], ['Your contribution', 'Active', 'Every response matters']]

  function handleAction(message) {
    setNotice(message)
  }

  function renderContent() {
    if (isBrand && active === 'Discover creators') {
      return (
        <>
          <div className="dash-section-heading">
            <div><span className="eyebrow">YOUR NEXT COLLABORATION</span><h2>Find your people.</h2><p>Discover creators whose audiences align with your brand.</p></div>
          </div>
          <div className="dash-filters">
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search creators or niches..." aria-label="Search creators" />
            <select value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Filter by niche">
              {['All', 'Fashion', 'Lifestyle', 'Beauty', 'Food'].map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>
          <div className="creator-grid">
            {filteredCreators.map((creator) => (
              <article className="creator-card" key={creator.handle}>
                <div className="creator-cover" style={{ background: creator.color }}><span>{creator.name.split(' ').map((part) => part[0]).join('')}</span><span className="creator-niche">{creator.niche}</span></div>
                <h3>{creator.name}</h3><p className="creator-handle">{creator.handle}</p>
                <div className="creator-metrics"><div><strong>{creator.followers}</strong><span>Followers</span></div><div><strong>{creator.engagement}</strong><span>Engagement</span></div></div>
                <div className="creator-card-bottom"><strong>{creator.rate}<small> / post</small></strong><button className={`save-btn ${shortlisted.includes(creator.handle) ? 'saved' : ''}`} onClick={() => setShortlisted((old) => old.includes(creator.handle) ? old.filter((item) => item !== creator.handle) : [...old, creator.handle])}>{shortlisted.includes(creator.handle) ? '♥ Saved' : '♡ Shortlist'}</button></div>
              </article>
            ))}
          </div>
          {filteredCreators.length === 0 && <p className="empty-state">No creators match those filters. Try another search.</p>}
        </>
      )
    }

    if (isBrand && active === 'Shortlist') {
      const saved = creatorData.filter((creator) => shortlisted.includes(creator.handle))
      return <><div className="dash-section-heading"><div><span className="eyebrow">YOUR COLLECTION</span><h2>Creator shortlist.</h2><p>Keep promising collaborators close at hand.</p></div><button className="primary-btn" onClick={() => setActive('Discover creators')}>Discover more +</button></div><div className="creator-grid">{saved.map((creator) => <article className="creator-card" key={creator.handle}><div className="creator-cover" style={{ background: creator.color }}><span>{creator.name.split(' ').map((part) => part[0]).join('')}</span><span className="creator-niche">{creator.niche}</span></div><h3>{creator.name}</h3><p className="creator-handle">{creator.handle}</p><div className="creator-card-bottom"><strong>{creator.rate}<small> / post</small></strong><button className="save-btn saved" onClick={() => setShortlisted((old) => old.filter((item) => item !== creator.handle))}>♥ Remove</button></div></article>)}</div>{saved.length === 0 && <div className="empty-state"><span>♡</span><h3>Your shortlist starts here.</h3><p>Save creators you like and they will appear here.</p><button className="primary-btn" onClick={() => setActive('Discover creators')}>Explore creators</button></div>}</>
    }

    if (isCreator && active === 'Discover campaigns') {
      return <><div className="dash-section-heading"><div><span className="eyebrow">OPPORTUNITIES FOR YOU</span><h2>Find your next collab.</h2><p>Explore illustrative campaigns and apply to the ones you love.</p></div></div><div className="dash-filters"><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search campaigns or brands..." aria-label="Search campaigns" /><select value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Filter campaigns">{['All', 'Fashion', 'Beauty', 'Food'].map((item) => <option key={item}>{item}</option>)}</select></div><div className="campaign-grid">{filteredCampaigns.map((campaign) => <article className="campaign-card" key={campaign.name}><span className="campaign-category">{campaign.category}</span><h3>{campaign.name}</h3><p className="campaign-brand">by {campaign.brand}</p><p>{campaign.description}</p><div className="campaign-meta"><span>◷ {campaign.type}</span><strong>{campaign.budget}</strong></div><button className={`primary-btn campaign-apply ${applied.includes(campaign.name) ? 'applied' : ''}`} onClick={() => setApplied((old) => old.includes(campaign.name) ? old : [...old, campaign.name])}>{applied.includes(campaign.name) ? '✓ Applied (demo)' : 'Apply to campaign →'}</button></article>)}</div></>
    }

    if (isCreator && active === 'My applications') {
      return <><div className="dash-section-heading"><div><span className="eyebrow">YOUR ACTIVITY</span><h2>My applications.</h2><p>Campaigns you have expressed interest in.</p></div></div>{campaigns.filter((campaign) => applied.includes(campaign.name)).map((campaign) => <div className="application-row" key={campaign.name}><div><strong>{campaign.name}</strong><p>{campaign.brand} · {campaign.category}</p></div><span className="status-pill">Submitted · Demo</span></div>)}{applied.length === 0 && <div className="empty-state"><h3>No applications yet.</h3><p>Discover campaigns to get started.</p><button className="primary-btn" onClick={() => setActive('Discover campaigns')}>Explore campaigns</button></div>}</>
    }

    if (!isBrand && !isCreator && active === 'Available surveys') {
      return <><div className="dash-section-heading"><div><span className="eyebrow">YOUR VOICE MATTERS</span><h2>Help build consumer trust.</h2><p>Choose a topic, rate your view from 1 to 5, and submit your demo response.</p></div></div><div className="survey-grid">{surveys.map((survey) => <article className="survey-card" key={survey.id}><span className="campaign-category">{survey.topic}</span><h3>{survey.title}</h3><p>{survey.description}</p><div className="survey-rating"><span>Your rating</span><div>{[1, 2, 3, 4, 5].map((rating) => <button key={rating} className={surveyRatings[survey.id] === rating ? 'rating-selected' : ''} aria-label={`Rate ${rating} out of 5`} onClick={() => setSurveyRatings((old) => ({ ...old, [survey.id]: rating }))}>{rating}</button>)}</div></div><button className="primary-btn" onClick={() => { if (!surveyRatings[survey.id]) { handleAction('Choose a rating before submitting your response.'); return } setSubmittedSurveys((old) => old.includes(survey.id) ? old : [...old, survey.id]); handleAction('Your demo response has been recorded for this session.') }}>{submittedSurveys.includes(survey.id) ? '✓ Response submitted' : 'Submit response →'}</button></article>)}</div></>
    }

    if (!isBrand && !isCreator && active === 'My responses') {
      return <><div className="dash-section-heading"><div><span className="eyebrow">YOUR CONTRIBUTION</span><h2>My responses.</h2><p>Surveys you have submitted in this session.</p></div></div>{submittedSurveys.map((id) => { const survey = surveys.find((item) => item.id === id); return <div className="application-row" key={id}><div><strong>{survey.title}</strong><p>{survey.topic}</p></div><span className="status-pill">Rating: {surveyRatings[id]}/5</span></div> })}{submittedSurveys.length === 0 && <div className="empty-state"><h3>Your voice belongs here.</h3><p>Complete a survey to see your responses here.</p><button className="primary-btn" onClick={() => setActive('Available surveys')}>Explore surveys</button></div>}</>
    }

    if ((!isBrand && !isCreator && active === 'Trust insights')) {
      return <><div className="dash-section-heading"><div><span className="eyebrow">TRUST, IN PERSPECTIVE</span><h2>What makes influence genuine?</h2><p>Explore the principles behind trustworthy creator collaborations.</p></div></div><div className="insight-grid">{[['01', 'Transparency', 'Clear sponsorship labels help audiences understand when content is paid.'], ['02', 'Credibility', 'Relevant recommendations and honest opinions support trust.'], ['03', 'Authenticity', 'Content that fits a creator’s usual voice can feel more genuine.']].map(([number, title, description]) => <article className="insight-card" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div><p className="demo-note">These are general principles, not measured results from ConnectCircle respondents.</p></>
    }

    if (active === 'My campaigns') {
      return <><div className="dash-section-heading"><div><span className="eyebrow">YOUR WORKSPACE</span><h2>My campaigns.</h2><p>Track your sample campaign workspace.</p></div><button className="primary-btn" onClick={() => handleAction('Campaign creation form is the next feature to build.')}>+ Create campaign</button></div><div className="campaign-grid">{['Spring creator launch', 'Everyday essentials', 'Community favourites', 'New season stories'].map((name, index) => <article className="campaign-card" key={name}><span className="campaign-category">{index % 2 === 0 ? 'Active' : 'Planning'}</span><h3>{name}</h3><p>Creator partnership campaign</p><div className="campaign-meta"><span>{index + 2} creators</span><strong>₹{(8 + index * 4).toLocaleString('en-IN')},000</strong></div><button className="secondary-btn" onClick={() => handleAction(`${name}: demo campaign details selected.`)}>View details →</button></article>)}</div></>
    }

    if (active === 'My profile') {
      return <><div className="dash-section-heading"><div><span className="eyebrow">YOUR CREATOR IDENTITY</span><h2>Make your profile yours.</h2><p>This is a local demo profile, not a saved account.</p></div></div><div className="profile-demo"><div className="profile-avatar">CC</div><h3>Creator profile</h3><p>Add your niche, social links, audience details and collaboration rates when profile editing is implemented.</p><button className="primary-btn" onClick={() => handleAction('Profile editing is the next feature to build.')}>Edit profile →</button></div></>
    }

    if (active === 'Overview') {
      return <><div className="welcome-panel"><div><span className="eyebrow">A LITTLE MORE CONNECTION, A LITTLE MORE IMPACT</span><h2>{isBrand ? 'Let’s find your next great match.' : isCreator ? 'Your next opportunity starts here.' : 'Your perspective makes a difference.'}</h2><p>{isBrand ? 'Discover creators who can bring your brand story to life.' : isCreator ? 'Find partnerships that align with your voice and values.' : 'Share your views and help us understand what builds consumer trust.'}</p><button className="primary-btn" onClick={() => setActive(isBrand ? 'Discover creators' : isCreator ? 'Discover campaigns' : 'Available surveys')}>{isBrand ? 'Discover creators' : isCreator ? 'Explore campaigns' : 'Explore surveys'} →</button></div><div className="welcome-mark">{isBrand ? '✳' : isCreator ? '↗' : '♡'}</div></div><div className="stats-grid">{stats.map(([label, value, note]) => <article className="stat-card" key={label}><span>{label}</span><strong>{value}</strong><p>{note}</p></article>)}</div><div className="dash-section-heading lower-heading"><div><span className="eyebrow">{isBrand ? 'A GOOD PLACE TO START' : isCreator ? 'OPPORTUNITIES AHEAD' : 'EXPLORE THE TRUST LAB'}</span><h2>{isBrand ? 'Build a better collaboration.' : isCreator ? 'Find a partnership that fits.' : 'Every opinion counts.'}</h2></div></div>{isBrand ? <div className="quick-actions"><button onClick={() => setActive('Discover creators')}><span>◎</span><strong>Discover creators</strong><small>Search by niche and engagement</small><b>→</b></button><button onClick={() => setActive('Shortlist')}><span>♡</span><strong>Your shortlist</strong><small>Keep potential partners together</small><b>→</b></button><button onClick={() => setActive('My campaigns')}><span>▤</span><strong>Campaign workspace</strong><small>Review your sample campaigns</small><b>→</b></button></div> : isCreator ? <div className="campaign-grid">{campaigns.slice(0, 2).map((campaign) => <article className="campaign-card" key={campaign.name}><span className="campaign-category">{campaign.category}</span><h3>{campaign.name}</h3><p className="campaign-brand">by {campaign.brand}</p><p>{campaign.description}</p><div className="campaign-meta"><span>{campaign.type}</span><strong>{campaign.budget}</strong></div><button className="secondary-btn" onClick={() => setActive('Discover campaigns')}>Explore opportunity →</button></article>)}</div> : <div className="quick-actions"><button onClick={() => setActive('Available surveys')}><span>◎</span><strong>Share your perspective</strong><small>Answer short trust surveys</small><b>→</b></button><button onClick={() => setActive('Trust insights')}><span>♡</span><strong>Explore trust insights</strong><small>Learn about transparency and credibility</small><b>→</b></button></div>}</>
    }

    return <div className="empty-state"><h3>{active}</h3><p>This section is ready for the next feature.</p><button className="primary-btn" onClick={() => setActive('Overview')}>Back to overview</button></div>
  }

  return (
    <div className="dashboard-layout">
      <Sidebar role={role} active={active} setActive={(value) => { setActive(value); setSearch(''); setCategory('All'); setNotice('') }} />
      <main className="dashboard-main">
        <header className="dash-topbar">
          <div><span className="dash-breadcrumb">CONNECTCIRCLE / WORKSPACE</span><h1>{title}</h1></div>
          <div className="dash-user"><span className="user-avatar">{isBrand ? 'B' : isCreator ? 'C' : '♡'}</span><div><strong>{isBrand ? 'Brand account' : isCreator ? 'Creator account' : 'Consumer account'}</strong><small>Demo workspace</small></div><Link to="/" className="logout-link">Exit</Link></div>
        </header>

        <div className="dash-content">
          {notice && <div className="dash-notice" role="status"><span>{notice}</span><button onClick={() => setNotice('')} aria-label="Dismiss message">×</button></div>}
          {renderContent()}
          <p className="dashboard-disclaimer">ConnectCircle demo · Sample data only · Actions are not saved to a database</p>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
