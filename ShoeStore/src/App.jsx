import { useState } from 'react'
import Navbar from './Components/Navbar';
import ShoeList from './Components/List';
import Cart from './Components/Cart'

function App() {
  let [cart,setCart] = useState([]);
  const shoelist = [
    {id:1,image:'./images/image1.webp',name:'laal tape',price:2000},
    {id:2,image:'./images/image2.webp',name:'abidas',price:700},
    {id:3,image:'./images/image3.webp',name:'puke',price:200},
    {id:4,image:'./images/image4.webp',name:'pama',price:500},
    {id:5,image:'./images/image5.webp',name:'jardun',price:800},
    {id:6,image:'./images/image6.webp',name:'devdas',price:1500},
  ]
  const addToCart = (shoe)=>{
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === shoe.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...shoe, quantity: 1 }];
      }
    });
  };
  const removeFromCart = (shoe) =>{
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === shoe.id);
      if (existingItem.quantity === 1) {
        return prevCart.filter(item => item.id !== shoe.id);
      } else {
        return prevCart.map(item =>
          item.id === shoe.id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  }
  return (
    <> 
       <Navbar />
       <ShoeList shoeslist={shoelist} addToCart={addToCart} />
       <Cart cart = {cart} removeFromCart={removeFromCart} addToCart={addToCart} />
    </>
  )
}

export default App;