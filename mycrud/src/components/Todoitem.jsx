import React, { useRef } from "react";
import {AiFillEdit} from "react-icons/ai"
import{IoIosDoneAll,IoIosClose} from "react-icons/io"
const Todoitem = (props) => {
    const{item,updateTodos,removeTodos,completeTodos} = props;
    const inputRef = useRef(true)
    const changeFocus = () =>{
      inputRef.current.disabled = false;
      inputRef.current.focus();
    }
    const update = (id,value,e) =>{
        if(e.which === 13)
        {
            updateTodos({id,item:value});
          inputRef.current.disabled = true;
  
        }
    }
  return (
    <li key={item.id} className="card">
      <textarea
        disabled={inputRef}
        ref={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="btns">
      <button style={{color:"blue"}} onClick={() => changeFocus()}><AiFillEdit/></button>{" "}
      <button style={{color:"green"}} onClick={() => completeTodos(item.id)}><IoIosDoneAll/></button>{" "}
      <button style={{color:"red"}} onClick={() => removeTodos(item.id)}><IoIosClose/></button>
      </div>
      {item.completed && <span className="completed">Done</span>}
    </li>
  );
};

export default Todoitem;