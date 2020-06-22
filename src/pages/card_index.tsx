import React, { useState } from 'react'
import { Data } from '../App'
import Card from '../components/Card'
import CircleBtn from '../components/CircleBtn'
import good from '../data/good.svg'
import back from '../data/back.png'

type Props = {
  datasets: Array<Data>,
  num: number,
  setNum: (num: number) => void,
}

const CardIndex: React.FC<Props> = ({datasets, num, setNum}) => {
  const [flag, setFlag] = useState(0)
  const renderCard = () => {
    var item: Data = datasets[num]
    return <Card id={item.id} name={item.name} age={item.age} affinity={item.affinity} description={item.description} url={item.url} isOpen={flag} />
  }
  const changeNum1 = (): void => {
    if  (num < datasets.length-1) {
      setFlag(1)
      setTimeout(() => {
        setFlag(0)
        setNum(num+1)
      }, 1000)
    } else {
      setNum(0)
    }
  }

  const changeNum2 = (): void => {
    if  (num < datasets.length-1) {
      setFlag(2)
      setTimeout(() => {
        setFlag(0)
        setNum(num+1) 
      }, 1000)
    } else {
      setNum(0)
    }
  }

  // let copiedData = datasets
  // const [array, setArray] = useState(copiedData)

  // const renderCard = () => {
  //   return array.map((item, i) => {
  //     return <Card id={item.id} name={item.name} age={item.age} affinity={item.affinity} description={item.description} url={item.url} key={i} />
  //   })
  // }
  // const changeNum = (): void => {
  //   copiedData.shift()
  //   console.log(array)
  //   setArray(copiedData)
  // }

  return (
    <React.Fragment>
      <div>
        <p className="card-index__title">お相手からのいいね</p>
        <div className="card-index__box">
          {renderCard()}
        </div>
        <div className="button">
          <CircleBtn changeNum={changeNum2} image={back} />
          <CircleBtn changeNum={changeNum1} image={good} />
        </div>
      </div>
      <style jsx>{`
        .card-index__title {
          color: grey;
          font-weight: bold;
          font-size: 12px;
          text-align: center;
          margin: 10px 5px;
        }
        .card-index__box {
          position: relative;
          height: 400px;
        }
        .button {
          width: 230px;
          margin: 10px auto;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </React.Fragment>
  )
}

export default CardIndex