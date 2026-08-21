import { useState } from "react";
import "./App.css";

function App() {
	const [showDates, setShowDates] = useState(false);
	return (
		<div className="site-wrapper">
			{/* ── NAV ── */}
			<header className="nav">
				<div className="nav-inner">
					{/* Logo */}
					<a href="#home" className="nav-logo">
						<span className="logo-oc">OC</span>
						<span className="logo-3">3</span>
						<span className="logo-ans">ANS</span>
					</a>

					{/* Main menu */}
					<nav className="nav-links">
						<a href="#home">Home</a>
						<a href="#about">About</a>
						<a href="#shows">Upcoming Shows</a>
						<a href="#blog">Store</a>
						<a href="#booking">Booking</a>
					</nav>

					{/* Social icons */}
					<div className="nav-socials">
						{/* YouTube */}
						<a
							href="https://www.youtube.com/@Oc3ans_Official"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="YouTube"
							className="social-icon"
						>
							<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
							</svg>
						</a>
						{/* Instagram */}
						<a
							href="https://www.instagram.com/oc3ans_official/?hl=en"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram"
							className="social-icon"
						>
							<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
							</svg>
						</a>
						{/* Facebook */}
						<a
							href="https://www.facebook.com/p/Oc3ans-Official-61552627313859/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Facebook"
							className="social-icon"
						>
							<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
							</svg>
						</a>
					</div>
				</div>
			</header>

			{/* ── HERO ── */}
			<section id="home" className="hero">
				<div className="hero-overlay" />
				<div className="hero-content">
					<p className="hero-eyebrow">New Album Out Now</p>
					<h1 className="hero-title" style={{opacity: 0}}>OC3ANS</h1>
					<p className="hero-subtitle">Listen to <em>Riptide</em> — Stream It Now</p>
					<a
						href="https://unitedmasters.com/m/riptide-13"
						target="_blank"
						rel="noopener noreferrer"
						className="btn-stream"
					>
						<span className="btn-stream-icon">
							<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
								<path d="M8 5v14l11-7z"/>
							</svg>
						</span>
						Stream Now
					</a>
				</div>
			</section>

			{/* ── SHOW DATES (hidden – toggle only) ── */}
			{showDates && (
			<section id="showdates" className="section-showdates">
				<img src="/IMG_3261.PNG" alt="" className="showdates-octopus" aria-hidden="true" />
				<div className="showdates-overlay" />
				<div className="section-inner showdates-inner">
					<span className="section-label">On The Road</span>
					<h2 className="section-heading">Show Dates</h2>
					<ul className="showdates-list">
						<li><span className="show-date">Fri Aug 21</span><span className="show-venue">Boatyard</span></li>
						<li><span className="show-date">Sat Aug 22</span><span className="show-venue">The Bend</span></li>
						<li><span className="show-date">Fri Aug 28</span><span className="show-venue">The CB Pier</span></li>
						<li><span className="show-date">Fri Sep 11</span><span className="show-venue">Private Event</span></li>
						<li><span className="show-date">Fri Sep 18</span><span className="show-venue">Boatyard</span></li>
						<li><span className="show-date">Sat Oct 24</span><span className="show-venue">Barnburner <span className="show-location">// Aldie, VA</span></span></li>
						<li><span className="show-date">Sat Nov 14</span><span className="show-venue">Bad Day After Party</span></li>
					</ul>
				</div>
			</section>
			)}

			{/* ── ABOUT ── */}
			<section id="about" className="section-about">
				<div className="section-inner">
					<span className="section-label">Our Story</span>
					<h2 className="section-heading">About OC3ANS</h2>
					<p className="section-body">
						Born from the place where the 3 seas meet, Oc3ans blends soulful melodies with the
						raw energy of the coast. Our sound moves like water — fluid, powerful, and impossible to ignore.
					</p>
				</div>
			</section>

			{/* ── UPCOMING SHOWS ── */}
			<section id="shows" className="section-shows">
				<div className="section-inner">
					<span className="section-label">Live</span>
					<h2 className="section-heading">Upcoming Shows</h2>
					<div className="shows-empty">
						<button className="btn-booking" onClick={() => setShowDates(v => !v)}>
							{showDates ? 'Hide Dates' : 'View Dates'}
						</button>
					</div>
				</div>
			</section>

			{/* ── BLOG ── */}
			<section id="blog" className="section-blog">
				<div className="section-inner">
					<span className="section-label">Merch</span>
					<h2 className="section-heading">Store</h2>
					<div className="shows-empty">
						<p>Posts coming soon.</p>
					</div>
				</div>
			</section>

			{/* ── BOOKING ── */}
			<section id="booking" className="section-booking">
				<div className="section-inner">
					<span className="section-label">Get In Touch</span>
					<h2 className="section-heading">Booking</h2>
					<p className="section-body">
						Interested in booking OC3ANS for your event? Reach out and let's make waves together.
					</p>
					<a href="mailto:oc3ansbooking@gmail.com" className="btn-booking">
						Contact Us
					</a>
				</div>
			</section>

			{/* ── FOOTER ── */}
			<footer className="footer">
				<p>© {new Date().getFullYear()} OC3ANS | photos by @tylersalesportfolio</p>
				<p>All rights reserved.</p>
				<div className="footer-socials">
					<a href="https://www.youtube.com/@Oc3ans_Official" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
						<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
							<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
						</svg>
					</a>
					<a href="https://www.instagram.com/oc3ans_official/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
						<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
							<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
						</svg>
					</a>
					<a href="https://www.facebook.com/p/Oc3ans-Official-61552627313859/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
						<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
							<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
						</svg>
					</a>
				</div>
			</footer>
		</div>
	);
}

export default App;
