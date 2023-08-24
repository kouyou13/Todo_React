import React from 'react';
import { SingleTodo } from "./SingleTodo";


export const ViewList = ({ TodoData, DelTodo }) => {
  return(
    <div>
      <h4>Todoリスト</h4>
      <ul>
        {
          TodoData.length > 0 ? 
            TodoData.map((Todo, Index) => {
              return (
                <SingleTodo key={Index} todo={Todo} DelTodo={DelTodo}/>
              )
            })
            :
            <li>項目がありません</li>
        }
      </ul>
      
    </div>
  )
}