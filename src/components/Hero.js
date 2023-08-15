import React from 'react'

const Hero = () => {
  return (
    <div>
    <section
    className="hero section"
    id="home"
    style={{backgroundImage: `url('./media/bg-hero.jpg')`}}
  >
    <h1 className="hero__title">
      Start Your Day <br />
      With Favorite Coffee <br />
      And Cozy Place.
    </h1>
    <button className="hero__button">Order Now</button>
  </section>
    </div>
  )
}

export default Hero
