import React, {useState, useRef} from 'react'
import FlexBarInput from '../ui/FlexBarInput'

const Toolbar = props=>{
    const inputRef = useRef(null)
    const [item,setItem] = useState("")
    const setItemHandler = e =>{
        setItem(e.target.value)
    }
    
    
return(

    
<form onSubmit={(e)=>{e.preventDefault(); inputRef.current.value=""; return props.methods.appendList(item)}}>
    <FlexBarInput>
    <input ref={inputRef} onChange={setItemHandler} type="text"/>
    <button>+</button>
    </FlexBarInput>
</form>


)}

export default Toolbar