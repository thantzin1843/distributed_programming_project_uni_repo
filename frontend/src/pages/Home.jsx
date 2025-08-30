import React from 'react';

const Home = () => {
  // Sample data for featured content and stats
  const popularProjects = [
    { id: 1, name: 'Open Source LMS', description: 'A Moodle alternative built with React.' },
    { id: 2, name: 'Project Collaboration Tool', description: 'Manage and share your projects easily.' },
    { id: 3, name: 'Forum Hub', description: 'Engage in active discussions with peers.' },
  ];

  const activeDiscussions = [
    { id: 1, title: 'How to integrate UniRepo with GitHub?' },
    { id: 2, title: 'Best practices for project collaboration' },
    { id: 3, title: 'Feature requests for the next release' },
  ];

  const recentlyUpdated = [
    { id: 1, name: 'React Course Platform', updated: '2 hours ago' },
    { id: 2, name: 'Community Forum', updated: '1 day ago' },
    { id: 3, name: 'Documentation Site', updated: '3 days ago' },
  ];

  const stats = {
    projects: 1200,
    members: 500,
    posts: 200,
  };

  return (
    <>
      {/*{/* Navigation Bar/}
      <nav style={styles.navbar}>
        <div style={styles.navBrand}>UniRepo</div>
        <ul style={styles.navLinks}>
          <li><a href="#home" style={styles.navLink}>Home</a></li>
          <li><a href="#projects" style={styles.navLink}>Projects</a></li>
          <li><a href="#forums" style={styles.navLink}>Forums</a></li>
          <li><a href="#about" style={styles.navLink}>About</a></li>
          {/* <li><a href="#profile" style={styles.navLink}>Profile / Dashboard</a></li> /}
        </ul>
        <div>
          <button style={styles.btnPrimary}>Join Now</button>
          <button style={styles.btnSecondary}>Login</button>
        </div>
      </nav> */}
      {/* Hero Section */}
      <header style={styles.hero} id = "home">
        <h1 style={styles.logo}>UniRepo</h1>
        <p style={styles.tagline}>Collaborate, Share, and Grow Your Projects in One Place</p>
        <div style={styles.heroButtons}>
          <button style={styles.btnPrimary}>Browse Projects</button>
          <button style={styles.btnSecondary}>Join Now</button>
        </div>
      </header>

      {/* Featured Content */}
      <section style={styles.section} id="projects">
        <h2>Featured Content</h2>
        <div style={styles.featuredGrid}>
          <div style={styles.featuredColumn}>
            <h3>Popular Projects</h3>
            <ul>
              {popularProjects.map((proj) => (
                <li key={proj.id} style={styles.listItem}>
                  <strong>{proj.name}</strong>: {proj.description}
                </li>
              ))}
            </ul>
          </div>
          <div style={styles.featuredColumn} id ="forums">
            <h3>Active Discussions</h3>
            <ul>
              {activeDiscussions.map((disc) => (
                <li key={disc.id} style={styles.listItem}>{disc.title}</li>
              ))}
            </ul>
          </div>
          <div style={styles.featuredColumn}>
            <h3>Recently Updated Projects</h3>
            <ul>
              {recentlyUpdated.map((proj) => (
                <li key={proj.id} style={styles.listItem}>
                  {proj.name} <em>({proj.updated})</em>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section style={{ ...styles.section, backgroundColor: '#f9f9f9' }} id = "about">
        <h2>Why Use UniRepo?</h2>
        <div style={styles.valueGrid}>
          <div style={styles.valueItem}>
            <span style={styles.emoji}>🚀</span>
            <h3>Launch your ideas</h3>
            <p>Start your projects quickly and easily.</p>
          </div>
          <div style={styles.valueItem}>
            <span style={styles.emoji}>🤝</span>
            <h3>Collaborate with peers</h3>
            <p>Work together and share knowledge seamlessly.</p>
          </div>
          <div style={styles.valueItem}>
            <span style={styles.emoji}>📚</span>
            <h3>Learn & share knowledge</h3>
            <p>Access resources and contribute to the community.</p>
          </div>
        </div>
      </section>

      {/* Search & Explore */}
      <section style={styles.section} id ="explore">
        <h2>Search & Explore</h2>
        <form style={styles.searchForm} onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            placeholder="Find Projects, People, or Discussions"
            style={styles.searchInput}
            aria-label="Search UniRepo"
          />
          <button type="submit" style={styles.btnPrimary}>Search</button>
        </form>
        <div style={styles.filters}>
          <label>
            Field:
            <select style={styles.select}>
              <option>All</option>
              <option>Education</option>
              <option>Technology</option>
              <option>Science</option>
            </select>
          </label>
          <label>
            Tags:
            <select style={styles.select}>
              <option>All</option>
              <option>React</option>
              <option>Open Source</option>
              <option>Collaboration</option>
            </select>
          </label>
          <label>
            Date:
            <select style={styles.select}>
              <option>Anytime</option>
              <option>Last 24 hours</option>
              <option>Last week</option>
              <option>Last month</option>
            </select>
          </label>
          <label>
            Popularity:
            <select style={styles.select}>
              <option>All</option>
              <option>Most Popular</option>
              <option>Trending</option>
            </select>
          </label>
        </div>
      </section>

      {/* Community Section */}
      <section style={{ ...styles.section, backgroundColor: '#f9f9f9' }} id ="community">
        <h2>Community</h2>
        <p style={styles.stats}>
          <strong>{stats.projects}+</strong> Projects | <strong>{stats.members}+</strong> Active Members | <strong>{stats.posts}+</strong> Forum Posts
        </p>
        <blockquote style={styles.testimonial}>
          “UniRepo has transformed how our team collaborates and shares knowledge. Highly recommended!” — Jane D.
        </blockquote>
      </section>

      {/* Call to Action */}
      <section style={styles.ctaSection} id = "signup">
        <h2>Create Your First Project Today</h2>
        <button style={styles.btnPrimary}>Sign Up</button>
      </section>

      {/* Footer */}
      <footer style={styles.footer} id = "footer">
        <div style={styles.footerLinks}>
          <a href="#docs" style={styles.footerLink}>Docs</a>
          <a href="#about" style={styles.footerLink}>About</a>
          <a href="#privacy" style={styles.footerLink}>Privacy</a>
          <a href="#contact" style={styles.footerLink}>Contact</a>
        </div>
        <div style={styles.socialLinks}>
          <a href="https://twitter.com/unirepo" target="_blank" rel="noopener noreferrer" style={styles.footerLink}>Twitter</a>
          <a href="https://github.com/unirepo" target="_blank" rel="noopener noreferrer" style={styles.footerLink}>GitHub</a>
          <a href="https://linkedin.com/company/unirepo" target="_blank" rel="noopener noreferrer" style={styles.footerLink}>LinkedIn</a>
        </div>
        <p style={{ marginTop: 10, fontSize: 14, color: '#777' }}>
          &copy; {new Date().getFullYear()} UniRepo. All rights reserved.
        </p>
      </footer>
    </>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#2c3e50',
    color: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  navBrand: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  // navLinks: {
  //   listStyle: 'none',
  //   display: 'flex',
  //   gap: 20,
  //   margin: 0,
  //   padding: 0,
  // },
  // navLink: {
  //   color: 'white',
  //   textDecoration: 'none',
  //   fontSize: 16,
  // },
  btnPrimary: {
    backgroundColor: '#2980b9',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: 4,
    cursor: 'pointer',
    fontSize: 16,
    marginLeft: 10,
  },
  btnSecondary: {
    backgroundColor: 'transparent',
    color: 'white',
    border: '1px solid white',
    padding: '8px 16px',
    borderRadius: 4,
    cursor: 'pointer',
    fontSize: 16,
    marginLeft: 10,
  },
  hero: {
    textAlign: 'center',
    padding: '80px 20px 60px',
    // backgroundColor: '#34495e',
    backgroundColor: 'lightblue',
    color: 'darkblue',
  },
  logo: {
    fontSize: 48,
    marginBottom: 10,
  },
  tagline: {
    fontSize: 20,
    marginBottom: 30,
    fontStyle: 'italic',
  },
  heroButtons: {
    display: 'inline-flex',
    gap: 15,
  },
  section: {
    maxWidth: 960,
    margin: '40px auto',
    padding: '0 20px',
  },
  featuredGrid: {
    display: 'flex',
    gap: 30,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  featuredColumn: {
    flex: '1 1 30%',
    minWidth: 250,
  },
  listItem: {
    marginBottom: 10,
  },
  valueGrid: {
    display: 'flex',
    justifyContent: 'space-around',
    gap: 30,
    flexWrap: 'wrap',
  },
  valueItem: {
    flex: '1 1 30%',
    minWidth: 220,
    textAlign: 'center',
  },
  emoji: {
    fontSize: 48,
    marginBottom: 10,
  },
  searchForm: {
    display: 'flex',
    maxWidth: 600,
    margin: '0 auto 20px',
    gap: 10,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    borderRadius: 4,
    border: '1px solid #ccc',
  },
  filters: {
    display: 'flex',
    justifyContent: 'center',
    gap: 20,
    flexWrap: 'wrap',
  },
  select: {
    marginLeft: 8,
    padding: 6,
    fontSize: 14,
  },
  stats: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  testimonial: {
    fontStyle: 'italic',
    maxWidth: 600,
    margin: '0 auto',
    textAlign: 'center',
    color: '#555',
  },
  ctaSection: {
    textAlign: 'center',
    padding: '40px 20px',
    backgroundColor: '#2980b9',
    color: 'white',
  },
  footer: {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '30px 20px',
    textAlign: 'center',
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: 30,
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  footerLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: 14,
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 10,
  },
};

export default Home;
