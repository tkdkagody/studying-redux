import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

function Home ({toDos, addToDo}) {

    const [text, setText] = useState(""); 
    const onChange = (e) => {
        setText(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        addToDo(text);
        setText("");
    }

    return (
        <>
            <h1>to do </h1>
            <form onSubmit={onSubmit}>
             <input type="text" value={text} onChange={onChange}></input>
             <button>Add</button>
            </form>
            <ul>
                {JSON.stringify(toDos)}
            </ul>
        </>
    )
}

//용도:  store에 있는 state를 getState()를 통해 가져다가 우리의 컴퍼넌트에 전해줌 !
function mapStateToProps(state, ownProps) {
    return { toDos: state }
}
//용도 : {dispatch}를 리턴한 이후 , props를 바꿀 수 있는 파워가 생김 
function mapDispatchToProps(dispatch, ownProps) {
    return {
        addToDo : (text) => dispatch(actionCreators.addToDo(text))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home) ; 