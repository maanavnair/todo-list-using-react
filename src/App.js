import Heading from './Heading.js'
import Input from './Input.js'
import { useState } from 'react';

function App(){
  const[item, setItem] = useState([]);
  const[val, setVal] = useState("");

  function handleClick(){
    if(val === ""){
      alert("Field is Empty");
      return;
    }
    console.log(val);
    setItem( [...item, {value: val, key: item.length + 1}])
    setVal("");
  }

  function handleDelete(keyToDelete){
    setItem( item.filter(a => a.key !== keyToDelete ))
    console.log(item)
  }

  return(
    <div>
      <Heading/>
      <Input setVal = {setVal} val = {val} onSmash = {handleClick} item = {item} setItem = {setItem}
       handleDelete = {handleDelete} />
    </div>
  )
}

export default App;