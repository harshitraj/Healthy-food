import RenderFoodItems from './components/RenderFoodItems';
import ErrorMsg from './components/ErrorMsg';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Container from './components/Container';
import FoodInput from './components/FoodInput';
import { useState } from 'react';

function App() {

  {/*Creating an array of fooditems, NOw as we keep adding the items in this array then result will be reflected in output*/ }
  // let foodItems = ['Dal', 'Green Vegetable', 'Roti', 'Salad', 'Milk', 'sabzi'];
  // FoodItems can be written as stateful manner that whenever any changes in fooItems array, it will get reflected there

  // let textStateArr = useState("item entered by user");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];
  //After destructuring above 3 lines we can write it as

  // let [textToShow, setTextState] = useState(); Not using it show just comment out this
  let [foodItems, setFoodItems] = useState([]);

  function onKeyDown(event) {
    if (event.key === "Enter") {
      // This will print food value whenever we click enter. Before this whatever we have written just after if statement, according to that, Whatever key we pressed then it print the value on console. Now value on console will be printed only when enter is clicked.
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem]; //...foodItems will bring all foodItems which are included previously and then in that array we will add newFoodItem to update the foodItems section to newItems.
      setFoodItems(newItems);
      //Whenever update functions(from useState) is encountered then that component repaint itself form starting.
    }
    // console.log(event.target.value);
    // setTextState(event.target.value);
  }


  return <>

    <Container>
      {/* Generally instead of div tag, we use React fragment by importing (import React from "react") to avoid extra element in DOM tree */}
      {/*Thus we use <React.Fragment></React.Fragment> or in short we can use <></> also. */}
      {/*JavaScript codes should be written in {} in jsx */}

      <h1 className='food-heading'>Healthy food</h1>
      <FoodInput handleOnChange={onKeyDown}></FoodInput>
      {/* <p>{textToShow}</p> */}
      <RenderFoodItems items={foodItems}></RenderFoodItems>
      <ErrorMsg items={foodItems}></ErrorMsg>
    </Container>

    <Container>
      <h2>Hey, This is Harshit Raj</h2>
    </Container>
    {/*Here as we can see that by making a tag Container we can use it for many times for different things */}
  </>


}

export default App
