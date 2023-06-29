import './App.css';
import { Button, Navbar, Container, Nav, Card } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Product from './components/Products';
import { useState } from 'react';
import datas from './data';
import Detail from './pages/Detail';
import NavBar from './components/NavBar';

function App() {

let [shoes, setShoes] = useState(datas)

const abcSort = ()=>{
  let copyDatas = [...shoes]
  copyDatas.sort((a, b)=>{
    if(a.title > b.title){
      return 1
    }else if(a.title < b.title){
      return -1
    }else{
      return 0
    }
  })
  setShoes(copyDatas)
}

const defaultSort = () =>{
  let copyDatas = [...datas]
  setShoes(copyDatas)
  
}
const priceSort = () => {
  let copyDatas = [...shoes]
  copyDatas.sort((a,b)=>{return a.price-b.price})
  setShoes(copyDatas)
}

  return (
    <div className="App">
      <div className='flex-center'><NavBar></NavBar></div>
      <div className="main-bg"></div>
      <Routes>
        <Route path='/detail/:id' element={<>
          <Detail></Detail>
        </>}>
        </Route>
          <Route path='/' element={<>
            <div className="main-btn-box">
                <Button variant="light" onClick={()=>{priceSort()}}>저렴 순 정렬</Button>
                <Button variant="light" onClick={()=>{abcSort()}}>가나다 정렬</Button>
                <Button variant="light" onClick={()=>{defaultSort()}}>원래대로 정렬</Button>
              </div>
            <div className='flex-center'>

            <div className='item-container'>
              {
                shoes.map((el, i) => {
                  return (
                    <Product
                      el={el}
                      i={i}
                    ></Product>
                  )
                })
              }
            </div>
            </div>
          </>}>
          </Route>
      </Routes>
    </div>
  );
}
export default App;