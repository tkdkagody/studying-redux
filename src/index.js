import { createStore } from "redux";


const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");



const countModifier = (count = 0, action) => {  //only can modify data
  if(action.type === "ADD"){
    return count +1 ;
  }else if(action.type === "MINUS"){
    return count -1; 
  }
  return count;
};


const countStore = createStore(countModifier);  //data를 저장하는 곳 


countStore.dispatch({ type : "ADD"});
countStore.dispatch({ type : "ADD"})
countStore.dispatch({ type : "ADD"})
countStore.dispatch({ type : "MINUS"})

console.log(countStore.getState())


