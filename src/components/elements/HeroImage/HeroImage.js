import React from 'react';
import { Link } from 'react-router-dom';
import './HeroImage.css';

const HeroImage = (props) => {
  return (
    <div>
      {props.clickable ? (
        <Link to={{ pathname: `/${props.movieId}`, title: `${props.title}` }}>
          <div className="rmdb-heroimage"
            style={{
              background:
                `linear-gradient(to bottom, rgba(0,0,0,0)
               39%, rgba(0,0,0,0)
               41%, rgba(0,0,0,0.65)
               100%),
               url('${props.image}'), #1c1c1c`


            }}
          >
            <div className="rmdb-heroimage-content">
              <div className="rmdb-heroimage-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
              </div>
            </div>
          </div>
        </Link>
      ) : (
          <div className="rmdb-heroimage"
            style={{
              background:
                `linear-gradient(to bottom, rgba(0,0,0,0)
               39%, rgba(0,0,0,0)
               41%, rgba(0,0,0,0.65)
               100%),
               url('${props.image}'), #1c1c1c`

            }}
          >
            <div className="rmdb-heroimage-content">
              <div className="rmdb-heroimage-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default HeroImage;