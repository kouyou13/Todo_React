import React, {useState} from 'react';

export const SingleTodo = ({ todo, DelTodo }) => {
  const [state, setState] = useState("Todo"); //Todo:項目にあるのみ Doing:作業中 Done:完了

  const changeState = () => {
    if(state === "Todo"){
      setState("Doing");
    }
    else if(state === "Doing"){
      setState("Done");
    }
    console.log(`${todo} ${state}`);
  }

  const delTodo = () => {
    DelTodo(todo);
  }

  return (
    <div className='SingleTodo'>
      <li>{todo}</li>
      <button onClick={changeState}>{state}</button>
      <button onClick={delTodo}>Delete</button>
    </div>
  )
}
