import React from 'react'
import heart from '../data/heart.svg'

type Props = {
    affinity: number
}

const Rate: React.FC<Props> = ({ affinity }) => {
  return (
    <React.Fragment>
      <p className="rate">
        <img className="heart" src={heart} alt="heart"/> {affinity}%
      </p>
      <style jsx>{`
        .rate {
          color: white;
          font-size: 12px;
          margin: 0 10px;
          line-height: 20px;
          font-weight: bold;
        }
        .heart {
          width: 8px;
          height: 8px;
          border-radius: 0;
        }
      `}</style>
    </React.Fragment>
  )
}

export default Rate