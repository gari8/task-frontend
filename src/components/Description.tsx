import React from 'react'

type Props = {
    description: string
}

const Description: React.FC<Props> = ({description}) => {
  return (
    <React.Fragment>
      <p className="description"><span className="desPart">{description}</span></p>
      <style jsx={true}>{`
        .description {
          background-color: white;
          border-radius: 10px;
          padding: 5px 10px;
        }
        .desPart {
          background-color: lightblue;
          border-radius: 10px;
          padding: 2px 10px;
          font-size: 12px;
          color: royalblue;
          font-weight: bold;
        }
      `}</style>
    </React.Fragment>
  )
}

export default Description