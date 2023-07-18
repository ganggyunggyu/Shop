import React from "react";
import { Table } from "react-bootstrap";

export default function Cart(props) {
  return (
    <div>
      <Table className={`w-80vw m-auto musinsa-medium-font ${props.darkMode}`}>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>안녕</td>
            <td>안녕</td>
            <td>안녕</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
