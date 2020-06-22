import React from 'react'
// import { Data } from '../App'
import { Link } from 'react-router-dom'
import Rate from './Rate'
import Name from './Name'
import Description from './Description'
import man1 from '../data/man1.jpg'
import man2 from '../data/man2.jpg'

type Props = {
  id: number,
  name: string,
  age: number,
  affinity: number,
  description: string,
  url: string,
  isOpen: number
}

const Card: React.FC<Props> = ({id, name, age, affinity, description, url, isOpen}) => {
  const changeStyle = (): string => {
    switch (isOpen) {
      case 1:
        return "opacity: 0; transform: rotate(45deg) translateX(400px);";
      case 2:
        return "opacity: 0; transform: rotate(-45deg) translateX(-400px);";
      default:
        return "";
    }
  }

  const checkImg = (): string => {
    switch (url) {
      case "man1":
        return man1
      case "man2":
        return man2
      default:
        return ""
    }
  }

  return (
    <React.Fragment>
      <div className="card">
        <Link to='/card' >
          <div className="cardBox">
            <div className="nameBox">
              <Name name={name} age={age} />
              <Rate affinity={affinity} />
            </div>
            <Description description={description} />
          </div>
        </Link>
      </div>
      <style jsx>{`
        .card {
          height: 400px;
          width: 235px;
          box-shadow: 0 2px 20px lightgrey;
          border-radius: 20px;
          margin: 0 auto;
          background-image: url(${checkImg()});
          background-position: center;
          background-size: cover;
          position: relative;
          transition: all 1s;
          ${changeStyle()}
        }
        .nameBox {
          display: flex;
          justify-content: start;
          padding: 5px;
        }
        .cardBox {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
        }
      `}</style>
    </React.Fragment>
  )
}

export default Card