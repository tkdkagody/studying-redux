import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");


number.innerText = 0; 

const countModifier = (count = 0, action) => {  //only can modify data
  console.log(count, action)
  if(action.type === "ADD"){
    return count +1 ;
  }else if(action.type === "MINUS"){
    return count -1; 
  }
  return count;
};


const countStore = createStore(countModifier);  //data를 저장하는 곳 

const onChange = () => {
  number.innerText = countStore.getState()
}
countStore.subscribe(onChange);

const handleAdd = ( ) => {
  countStore.dispatch({ type: "ADD"})
}

const handleMinus = () => {
  countStore.dispatch({type:"MINUS"})
}



add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);


