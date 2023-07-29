import "./Products.css";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Product(props) {
  const navigate = useNavigate();
  const products = useSelector((products) => {
    return products["products"];
  });
  return (
    <div className={`item-box ${props.darkMode}`} key={props.i}>
      <Card
        onClick={() => {
          navigate(`/detail/${props.el.id}`);
        }}
        className={`item musinsa-medium-font ${props.darkMode}`}
        key={props.el.id}
      >
        <Card.Img
          className="item-img br-10px"
          variant="top"
          src={`${process.env.PUBLIC_URL}img/item/item${props.el.id + 1}.jpg`}
        />
        <Card.Body>
          <Card.Title>{products[props.id]["title"]}</Card.Title>
          <Card.Text>{products[props.id]["price"]}원</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Product;
