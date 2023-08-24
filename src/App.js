import React, {useState} from 'react';
import { ViewList } from './ViewList';
import { Edit } from "./Edit";

import { Todo_data } from './common/Todo_data';

const App = () => {
  const [Todos, setTodo] = useState(Todo_data);

  // Todoリストに追加
  const AddTodo = (Todo) => {
    // Todo_data.append(Todo);
    console.log(Todo);
    setTodo([...Todos, Todo]);
  }

  // Todoリストから削除
  // 参考 https://qiita.com/itachi/items/4184b2afc35b55b45568
  const DelTodo = (Todo) => {
    setTodo(
      Todos.filter((todo, i) => (todo !== Todo))
    )
  }

  return(
    <div>
      <ViewList TodoData={Todos} DelTodo={DelTodo}/>
      <Edit AddTodo={AddTodo} />
    </div>
  )
}

export default App;