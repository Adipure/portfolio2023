import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/PairUp.jpg'
import IMG2 from '../../assets/4AnimeArchive.jpg'
import IMG3 from '../../assets/console.log.jpg'
import IMG5 from '../../assets/weather.jpg'
import IMG6 from '../../assets/snakeGame.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Pair_Up',
    github: 'https://github.com/Adipure/pairUp',
    demo: 'https://me0wmerz.github.io/pairUp/'
  },
  {
    id: 2,
    image: IMG2,
    title: '4AnimeArchive',
    github: 'https://github.com/Adipure/anotherAnimeArchive',
    demo: ''
  },
  {
    id: 3,
    image: IMG3,
    title: 'Console.log',
    github: 'https://github.com/Adipure/console.log',
    demo: ''
  },
  {
    id: 4,
    image: '',
    title: '',
    github: '',
    demo: ''
  },
  {
    id: 5,
    image: IMG5,
    title: 'Weather App',
    github: 'https://github.com/Adipure/WeatherHomwork',
    demo: 'https://adipure.github.io/WeatherHomwork/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Snake Game',
    github: 'https://github.com/Adipure/snakeGame',
    demo: ''
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item-cta'>
                  <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live View</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
