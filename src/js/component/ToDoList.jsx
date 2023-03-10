import React, { useState } from "react";
import gram from '/workspace/to-do-list/src/img/gram.jpg';


const ToDoList = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const change1 = (e) => {
    setInputList(e.target.value);
  };
  const change2 = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const deleteItem = (ind) => {
    return setItems(
      items.filter((item, i) => {
        return i !== ind;
      })
    );
  };
  return (
    <div className="App">
      <div className="container" style={{textAlign: "center", backgroundColor:"salmon", backgroundImage: `url(${gram})`, backgroundSize: 'cover', width: '100%', position: "center"}}>
        <div className="inner_div" >
          <input type="text" onChange={change1} value={inputList} />
          <button onClick={change2} style={{ backgroundColor: "lightblue", fontStretch: "1rem", borderRadius:"10px" }}>Add it to the List</button>
          <ol style={{ listStyle: "none" }}>
            {items.map((itemval, ind) => {
              return (
                <div style={{ display: "flex", backgroundColor:"lightblue", opacity:".5" }}>
                  <button onClick={() => deleteItem(ind)} style={{margin:"1rem", backgroundColor:"lightblue", borderRadius:"10px" }}>X</button>
                  <li id={ind} key={items.id} style={{fontWeight:"bold", color:"black", fontSize:"30px"}}>
                    {itemval}
                    <span
                      style={{
                        textDecoration: items.isChecked
                          ? "underline overline dotted red;"
                          : "none",
                      }}
                    >
                      {items.text}
                    </span>
                    <input type="checkbox" checked={items.isChecked} style={{margin:"1rem" }}></input>
                  </li>
                </div>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
