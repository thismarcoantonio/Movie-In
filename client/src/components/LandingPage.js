import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <React.Fragment>
      <header className="hero">
        <div className="hero_bg" />
        <h1 className="brand_title">Movie<b>In</b></h1>
        <p className="brand_description">Share passion, share emotions</p>
        <Link to="/auth" className="hero_button">SHARE MOVIES</Link>
      </header>

      <section className="container d-flex p-relative">
        <article className="card">
          <h1 className="card_title">Create a video</h1>
          <p className="card_description">Create Movies, short films, 3d animations, anything</p>
        </article>
        <article className="card">
          <h1 className="card_title">Create an account</h1>
          <p className="card_description">MovieIn is free and always it will be</p>
        </article>
        <article className="card">
          <h1 className="card_title">Upload and share your creation</h1>
          <p className="card_description">It's time to show to everybody what amazing things you've done</p>
        </article>
      </section>

      <footer className="footer">MovieIn</footer>
    </React.Fragment>
  )
}

export default LandingPage