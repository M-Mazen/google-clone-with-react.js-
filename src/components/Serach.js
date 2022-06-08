import React, { useState } from 'react'
import  "./Search.css";
import {useNavigate} from 'react-router-dom';
import "../pages/Home.css"
import { BsFillMicFill,BsSearch } from 'react-icons/bs';
import {useStateValue} from "../StateProfider";
import {actionType} from "../Reducer";
export default function Serach() {
    const [{}, dispatch]=useStateValue();
    const [inputval,Setinputval]=useState("");
    const [{term}, ]=useStateValue(null);


    const navigate=useNavigate();
    const search=(e)=>{
        e.preventDefault() ;
        console.log(e)
        navigate("/search")
        Setinputval(e);
        console.log(inputval.target.value);
    }
    return (
      <form className="search" onSubmit
      ={search}>
                <div className="search_input_container">
<div className='input_search'>
<BsSearch  className='bs' />
<input type="text" onChange={(e)=>       {
Setinputval(e) 
dispatch({
    type:actionType.SET_SEARCH_TEARM,
    term:inputval.target.value
})
console.log(inputval.target.value);
} } value={inputval.values}/>
<BsFillMicFill  className='bs'/>
</div>
</div>

</form>
  )
}
