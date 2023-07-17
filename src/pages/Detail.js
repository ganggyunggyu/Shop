import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import datas from "../data";
import { Card, Button, Nav } from "react-bootstrap";
import "./Detail.css";

export default function Detail() {
  let id = useParams().id;
  let item = [...datas];
  const [timer, setTimer] = useState(2);
  const [eventBox, setEventBox] = useState(true);
  let [tabCount, setTabCount] = useState(0);

  let navigator = useNavigate();

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
      console.log(timer);
    }
    if (timer == 0) {
      setEventBox(false);
    }
  });

  return (
    <>
      <div className="detail-item-container">
        {eventBox == true ? (
          <div className="alert alert-warning event-box">
            {timer}초 후 사라집니다
          </div>
        ) : null}
        <Card className="item">
          <div className="deteil-item-img-box">
            <Card.Img
              className="detail-item-img"
              variant="top"
              src={
                process.env.PUBLIC_URL + "/img/item/item" + (+id + 1) + ".jpg"
              }
            />
          </div>
          <Card.Body>
            <Card.Title>{item[id].title}</Card.Title>
            <Card.Text>{item[id].content}</Card.Text>
            <Card.Text>{item[id].price} 원</Card.Text>
            <div className="detail-btn-box">
              <Button
                onClick={() => {
                  navigator("/buy");
                }}
                variant="light"
              >
                구매하기
              </Button>
              <Button variant="light">장바구니</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="flex-center">
        <Nav
          className="tab-nav-container"
          variant="tabs"
          defaultActiveKey="link0"
        >
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTabCount(0);
              }}
              eventKey="link0"
            >
              버튼0
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTabCount(1);
              }}
              eventKey="link1"
            >
              버튼1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTabCount(2);
              }}
              eventKey="link2"
            >
              버튼2
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <DetailTab tabCount={tabCount}></DetailTab>
    </>
  );
}

function DetailTab(props) {
  // if (props.tabCount === 0) {
  //   return <div>0</div>;
  // } else if (props.tabCount === 1) {
  //   return <div>1</div>;
  // } else if (props.tabCount === 2) {
  //   return <div>2</div>;
  // }
  return (
    <div className="detail-tab-container tab-nav-container flex-center">
      {/* {props.tabCount === 0 ? <div>0번 탭</div> : null}
      {props.tabCount === 1 ? <div>1번 탭</div> : null}
      {props.tabCount === 2 ? <div>2번 탭</div> : null} */}
      {
        [<div>0번 탭</div>, <div>1번 탭</div>, <div>2번 탭</div>][
          props.tabCount
        ]
      }
    </div>
  );
}
