import "./App.css";
import { Button, Navbar, Container, Nav, Card } from "react-bootstrap";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Product from "./components/Products";
import { useEffect, useState } from "react";

import Detail from "./pages/Detail.js";
import Cart from "./pages/Cart.js";
import NavBar from "./components/NavBar";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { abcSort, defaultSort } from "./store";

function App() {
  const dispatch = useDispatch();
  const [dataCount, setDataCount] = useState(2);
  const [dataBool, setDataBool] = useState(true);
  const [darkMode, setDarkMode] = useState("");
  const [darkModeBtnStyle, setDarkModeBtnStyle] = useState("");
  const [darkModeBool, setDarkModeBool] = useState(false);
  const products = useSelector((products) => {
    return products["products"];
  });

  const priceToString = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  // const priceSort = () => {
  //   let copyDatas = [...shoes];
  //   copyDatas.sort((a, b) => {
  //     return a.price - b.price;
  //   });
  //   setShoes(copyDatas);
  // };
  const darkModeBtn = () => {
    if (darkModeBool === false) {
      setDarkModeBool(true);
    } else if (darkModeBool === true) {
      setDarkModeBool(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (darkModeBool == true) {
        setDarkMode("dark-mode");
        setDarkModeBtnStyle("dark-mode-btn");
      } else {
        setDarkMode("");
        setDarkModeBtnStyle("");
      }
    }, 10);
  }, [darkModeBool]);

  return (
    <div className={`App ${darkMode}`}>
      <NavBar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        darkModeBool={darkModeBool}
        setDarkModeBool={setDarkModeBool}
        darkModeBtn={darkModeBtn}
      />
      <div className="main-bg"></div>
      <Routes>
        <Route
          path="/detail/:id"
          element={
            <Detail
              darkMode={darkMode}
              darkModeBtnStyle={darkModeBtnStyle}
            ></Detail>
          }
        ></Route>
        <Route
          path="/"
          element={
            <>
              <div className="main-btn-box musinsa-medium-font">
                <Button className={`${darkModeBtnStyle}`} variant="light">
                  저렴 순 정렬
                </Button>
                <Button
                  className={`${darkModeBtnStyle}`}
                  variant="light"
                  onClick={() => {
                    dispatch(abcSort());
                  }}
                >
                  가나다 정렬
                </Button>
                <Button
                  className={`${darkModeBtnStyle}`}
                  variant="light"
                  onClick={() => {
                    dispatch(defaultSort());
                  }}
                >
                  원래대로 정렬
                </Button>
              </div>
              <div className="flex-center">
                <div className="item-container">
                  {products.map((el) => {
                    return (
                      <Product
                        el={el}
                        id={el["id"]}
                        darkMode={darkMode}
                        darkModeBtnStyle={darkModeBtnStyle}
                      ></Product>
                    );
                  })}
                </div>
              </div>
              {dataBool === true ? (
                <div className="btn-box musinsa-medium-font">
                  <Button
                    // onClick={() => {
                    //   axios
                    //     .get(
                    //       `https://codingapple1.github.io/shop/data${dataCount}.json`
                    //     )
                    //     .then((result) => {
                    //       const newData = [...result.data];
                    //       const copyDatas = [...shoes, ...newData];
                    //       setShoes(copyDatas);
                    //       setDataCount(+1);
                    //     })
                    //     .catch(() => {
                    //       console.log("데이터 없음");
                    //       setDataBool(false);
                    //     });
                    // }}
                    className={`btn ${darkModeBtnStyle}`}
                    variant="light"
                  >
                    더 보기
                  </Button>
                </div>
              ) : (
                <div className="btn-box">dataNone</div>
              )}
            </>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <>
              <Cart darkMode={darkMode} darkModeBtnStyle={darkModeBtnStyle} />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}
export default App;
