import "./Products.css";
import { Card, Button } from "react-bootstrap";
import datas from "../data";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Product(props) {
  const navigate = useNavigate();

  return (
    <div className={`item-box ${props.darkMode}`} key={props.i}>
      <Card
        onClick={() => {
          navigate(`/detail/${props.el.id}`);
        }}
        className={`item musinsa-medium-font ${props.darkMode}`}
        key={props.i}
      >
        <Card.Img
          className="item-img br-10px"
          variant="top"
          src={`${process.env.PUBLIC_URL}img/item/item${props.el.id + 1}.jpg`}
        />
        <Card.Body>
          <Card.Title>{props.el.title}</Card.Title>
          <Card.Text>{props.el.price}원</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Product;
