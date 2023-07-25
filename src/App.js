import "./styles.css";
import Q1 from "./Q1.js";
import { ProductDetails } from "./ProductDetails.js";
import Gadgets from "./Gadgets";
import Phones from "./Phones";
import Article from "./Article";
import ColorPicker from "./ColorPicker";
import Todo from "./Todo";

export default function App() {
  const products = [
    {
      id: 1,
      name: "keyboard",
      description: "Logitech Mechanical Keyboard",
      price: 2000
    },
    { id: 2, name: "mouse", description: "Dell Wireless Mouse", price: 1200 },
    { id: 3, name: "mobile", description: "iPhone 13", price: 61000 },
    {
      id: 4,
      name: "monitor",
      description: "Lenovo 32-inch display Monitor",
      price: 10000
    },
    { id: 5, name: "mobile", description: "iPhone 13 Pro Max", price: 140000 },
    {
      id: 6,
      name: "speakers",
      description: "Creative Desktop Speakers",
      price: 5000
    },
    {
      id: 7,
      name: "headphones",
      description: "Sony over-the-ear wired Headphones with mic",
      price: 1500
    },
    { id: 8, name: "mobile", description: "iPhone 12", price: 90000 }
  ];

  const todoList = [
    {
      id: 1,
      title: "Complete practice set",
      description: "Practice set 1 of React",
      isCompleted: true
    },
    {
      id: 2,
      title: "Attend revision session",
      description: "Revision session of React",
      isCompleted: false
    },
    {
      id: 3,
      title: "Watch recording",
      description: "Live session recording of React",
      isCompleted: true
    },
    {
      id: 4,
      title: "Attend DSH",
      description: "Doubt Solving Hours of React",
      isCompleted: false
    },
    {
      id: 5,
      title: "Complete practice set",
      description: "Practice set 2 of React",
      isCompleted: false
    }
  ];

  const title = "React is awesome";
  const content = "React is a JavaScript library for building user interfaces.";

  return (
    <div className="App">
      {/* <Q1 /> */}
      {/* <ProductDetails /> */}
      {/* <Gadgets products={products} /> */}
      {/* <Phones products={products} /> */}
      {/* <Article title={title} content={content} /> */}
      {/* <ColorPicker /> */}

      <Todo todoList={todoList} />
    </div>
  );
}
