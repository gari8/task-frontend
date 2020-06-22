import React from 'react'

type Props = {
    name: string,
    age: number
}

const Name: React.FC<Props> = ({name, age}) => {
  return (
    <React.Fragment>
      <p className="name"><span className="preCircle">●</span> {name} {age}歳</p>
      <style jsx>{`
        .name {
          color: white;
          font-size: 14px;
          font-weight: bold;
        }
        .preCircle {
          color: lightgreen;
          font-size: 10px;
        }
      `}</style>
    </React.Fragment>
  )
}

export default Name