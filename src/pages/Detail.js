import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import datas from "../data";
import { Card, Button, Nav } from "react-bootstrap";
import { cartAdd } from "../store.js";
import { useDispatch } from "react-redux";
import "./Detail.css";

export default function Detail(props) {
  let id = useParams().id;
  let item = [...datas];
  let [tabCount, setTabCount] = useState(0);
  let [detailFade, setDetailFade] = useState("");
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(2);
  const [eventBox, setEventBox] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDetailFade("fade-end");
    }, 10);

    setDetailFade("");
  }, [Detail]);

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
    <div className={`fade-start ${detailFade}`}>
      <div className="">
        <Card
          className={`detail-item-container musinsa-medium-font ${props.darkMode}`}
        >
          <div className="deteil-item-img-box">
            <Card.Img
              className="detail-item-img br-10px"
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
                className={`${props.darkModeBtnStyle}`}
                onClick={() => {
                  navigator("/buy");
                }}
                variant="light"
              >
                구매하기
              </Button>
              <Button
                className={`${props.darkModeBtnStyle}`}
                variant="light"
                onClick={() => {
                  dispatch(cartAdd(item[id]));
                }}
              >
                장바구니
              </Button>
            </div>
            {eventBox == true ? (
              <div className="alert alert-warning event-box">
                {timer}초 후 사라집니다
              </div>
            ) : null}
          </Card.Body>
        </Card>
      </div>
      <div className="flex-center">
        <Nav
          className="musinsa-medium-font w-80vw"
          variant="tabs"
          defaultActiveKey="link0"
        >
          <Nav.Item className="">
            <Nav.Link
              className={`${props.darkModeBtnStyle}`}
              onClick={() => {
                setTabCount(0);
              }}
              eventKey="link0"
            >
              상세정보
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className={`${props.darkModeBtnStyle}`}
              onClick={() => {
                setTabCount(1);
              }}
              eventKey="link1"
            >
              배송문의
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className={`${props.darkModeBtnStyle}`}
              onClick={() => {
                setTabCount(2);
              }}
              eventKey="link2"
            >
              판매자 정보
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <DetailTab tabCount={tabCount} item={item} id={id} />
    </div>
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
  let [detailTabFade, setDetailTabFade] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setDetailTabFade("fade-end");
    }, 10);
    setDetailTabFade("");
  }, [props.tabCount]);
  return (
    <div
      className={`detail-tab-container w-80vw flex-center fade-start ${detailTabFade}`}
    >
      {/* {props.tabCount === 0 ? <div>0번 탭</div> : null}
      {props.tabCount === 1 ? <div>1번 탭</div> : null}
      {props.tabCount === 2 ? <div>2번 탭</div> : null} */}

      {
        [
          <div>{props.item[props.id]["title"]}</div>,
          <div>1번 탭</div>,
          <div>2번 탭</div>,
        ][props.tabCount]
      }
    </div>
  );
}
