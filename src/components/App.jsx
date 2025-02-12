import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);


  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });

  }
  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }



  return (
    <div className="background-img">
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <InputArea
          onAdd={addItem} />
        <div>
          <ul>
            {items.map((todoItem, index) => (
              <ToDoItem
                key={index}
                id={index}
                text={todoItem}
                onChecked={deleteItem}
              />
            ))}
          </ul>


        </div>
        <div>   <footer>
          <p>Copyright ⓒ {new Date().getFullYear()} <i>coded by EA</i></p>
        </footer>
        </div>
      </div>



    </div>


  );

}

export default App;
