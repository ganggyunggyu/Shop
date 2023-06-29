import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import datas from '../data'
import { Card, Button } from 'react-bootstrap'
import './Detail.css'

export default function Detail() {

  let id = useParams().id
  let item = [...datas]
  const [timer, setTimer] = useState(2)
  const [eventBox, setEventBox] = useState(true)

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {setTimer(timer - 1)}, 1000)
      console.log(timer)
    }
    if(timer == 0) {
      setEventBox(false)
    }
  })



  return (

    <div className="detail-item-container">
      {
        eventBox == true ? <div className='alert alert-warning event-box'>{timer}초 후 사라집니다</div> : null
      }

      <Card className='item'>
        <div className='deteil-item-img-box'>
          <Card.Img className='detail-item-img' variant="top" src={process.env.PUBLIC_URL + "/img/item/item" + (+id + 1) + ".jpg"} />
        </div>
        <Card.Body>
          <Card.Title>
            {item[id].title}
          </Card.Title>
          <Card.Text>
            {item[id].content}
          </Card.Text>
          <Card.Text>
            {item[id].price}
          </Card.Text>
          <div className='detail-btn-box'>
            <Button variant="light">구매하기</Button>
            <Button variant="light">장바구니</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}