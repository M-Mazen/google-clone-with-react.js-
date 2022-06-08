import  { useEffect, useState } from 'react'
import API_KEY from './keys';

const CONTEXT_KEY=`61183a179a5980a2a`
 

const  UseGoogle = (term) => {
const [date,Setdate] =useState();
 
useEffect(()=>{
    const FeachData= async() =>{
        fetch(
            `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        )
        .then(resp => resp.json())
        .then(result=>{
          Setdate(result)
          console.log(result)


      })        
    }
    FeachData()
},[term])
return {date}
}


export default UseGoogle;