import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import React from 'react';

function BakeryFood(){
  const [price, setPrice] = useState(0);
  const [items, setItems] = useState([]);

  const SetBoth = (x, item) => {
    setPrice(price + x);
    setItems([...items , <br />, item]);
  }
  return (
    <div>
      <h3>  Cart: <br></br>
      {items}</h3>
      <h3> Current Total: {price} </h3>
      <img className="Bakery-item" src={require("./cake.png")}/>
      <button onClick={() => SetBoth(30, "cake = $30")}>
        Add to Cart
      </button>
      <img className="Bakery-item" src={require("./strudel.png")}/>
      <button onClick={() => SetBoth(5, "strudel = $5")}>
        Add to Cart
      </button>
      <img className="Bakery-item" src={require("./pie.png")}/>
      <button onClick={() => SetBoth(20, "pie = $20")}>
        Add to Cart
      </button>
      <img className="Bakery-item" src={require("./pizza.png")}/>
      <button onClick={() => SetBoth(5, "pizza = $5")}>
        Add to Cart
      </button>
      <img className="Bakery-item" src={require("./croissant.png")}/>
      <button onClick={() => SetBoth(3, "croissant = $3")}>
        Add to Cart
      </button>
      <img className="Bakery-item" src={require("./bread.png")}/>
      <button onClick={() => SetBoth(10, "bread = $10")}>
        Add to Cart
      </button>
      <img className="Bakery-item" src={require("./cookies.png")}/>
      <button onClick={() => SetBoth(10, "cookies = $10")}>
        Add to Cart
      </button>
      <img className="Bakery-item" src={require("./cupcake.png")}/>
      <button onClick={() => SetBoth(5, "cupcake = $5")}>
        Add to Cart
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App" style={{backgroundColor: 'tan'}}>
      <h1 className="Header"> Guiseppe's Bakery</h1>
      <BakeryFood />
    </div>
  );
}
export default App;
