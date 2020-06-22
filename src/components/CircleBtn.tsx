import React from 'react'

type Props = {
  changeNum: () => void,
  image: string
}

const CircleBtn: React.FC<Props> = ({changeNum, image}) => {
  return (
    <React.Fragment>
      <button onClick={changeNum}>
        <img src={image} alt="icon" />
      </button>
      <style jsx>{`
        button {
          cursor: pointer;
          outline: none;
          height: 50px;
          width: 50px;
          border-radius: 50%;
          border: solid 1px lightgrey;
          box-shadow: 0 3px 10px lightgrey;
          margin: 0 10px;
          background-color: white;
          z-index: 2;
        }
        img {
          height: 30px;
          width: 30px;
          border-radius: 50%;
        }
      `}</style>
    </React.Fragment>
  )
}

export default CircleBtn