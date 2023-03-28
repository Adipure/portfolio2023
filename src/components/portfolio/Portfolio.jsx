import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/PairUp.jpg'
import IMG2 from '../../assets/4AnimeArchive.jpg'
import IMG3 from '../../assets/console.log.jpg'
import IMG5 from '../../assets/weather.jpg'
import IMG6 from '../../assets/snakeGame.png'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="Pair Up" />
          </div>
          <h3>Pair Up</h3>
          <a href='https://github.com/Adipure/pairUp' className='btn' target='_blank'>Github</a>
          <a href='https://me0wmerz.github.io/pairUp/' className='btn btn-primary' target='_blank'>Live View</a>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG2} alt="4AnimeArchive" />
          </div>
          <h3>4AnimeArchive</h3>
          <a href='https://github.com/Adipure/anotherAnimeArchive' className='btn' target='_blank'>Github</a>
          <a href='#' className='btn btn-primary' target='_blank'>Live View</a>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG3} alt="Console.log" />
          </div>
          <h3>Console.log</h3>
          <a href='https://github.com/Adipure/console.log' className='btn' target='_blank'>Github</a>
          <a href='#' className='btn btn-primary' target='_blank'>Live View</a>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG5} alt="weather" />
          </div>
          <h3>Weather Forecast</h3>
          <a href='https://github.com/Adipure/WeatherHomwork' className='btn' target='_blank'>Github</a>
          <a href='https://adipure.github.io/WeatherHomwork/' className='btn btn-primary' target='_blank'>Live View</a>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG6} alt="snakeGame" />
          </div>
          <h3>Snake Game</h3>
          <a href='https://github.com/Adipure/snakeGame' className='btn' target='_blank'>Github</a>
          <a href='#' className='btn btn-primary' target='_blank'>Live View</a>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src="#" alt="tbh" />
          </div>
          <h3>TBH</h3>
          <a href='#' className='btn' target='_blank'>Github</a>
          <a href='#' className='btn btn-primary' target='_blank'>Live View</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio