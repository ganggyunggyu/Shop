import React from "react";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { countPlus, countMinus, agePlus, cartDelete } from "../store.js";

export default function Cart() {
  const cartList = useSelector((cartList) => {
    return cartList["cartList"];
  });
  const userInfo = useSelector((user) => {
    return user["user"];
  });
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{userInfo["name"] + userInfo["age"]}</h1>
      <button
        onClick={() => {
          dispatch(agePlus());
        }}
      >
        hou!
      </button>
      <Table className={`w-80vw m-auto musinsa-medium-font`}>
        <thead>
          <tr>
            <th>#</th>
            <th>이름</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        {cartList.map((el, i) => {
          return (
            <CartItem dispatch={dispatch} cartList={cartList} el={el} i={i} />
          );
        })}
      </Table>
    </div>
  );
}

function CartItem({ cartList, el, i, dispatch }) {
  return (
    <tbody key={i}>
      <tr>
        <td>{i}</td>
        <td>{cartList[i]["title"]}</td>
        <td>{el["count"]}</td>
        <td>
          <button
            onClick={() => {
              dispatch(countPlus(i));
              console.log(cartList);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              dispatch(countMinus(i));
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              dispatch(cartDelete(i));
            }}
          >
            삭제
          </button>
        </td>
      </tr>
    </tbody>
  );
}
