import React from 'react'
import   "./SearchPage.css";
import UseGoogle from './UseGoogle';
import respon from '../respon.json';
import { Link } from 'react-router-dom';
import Search from "./Serach"
import { BsSearch ,BsCardImage  } from 'react-icons/bs';
import {  MdOutlineVideoSettings} from 'react-icons/md';
import {  SiGooglemaps} from 'react-icons/si';
import {  FaRegNewspaper} from 'react-icons/fa';
import {  FiMoreVertical} from 'react-icons/fi';
import {useStateValue} from "../StateProfider";





 export default function SearchPage() {
    const [{term}, dispatch]=useStateValue(null);
    console.log(term)
 const {date} = UseGoogle(term);
//  moke api 
//  const data = respon;


console.log(date)
    return (
      <>
      
      <div className='search_header'>
          <div className='container'>
              <Link to="/">
          <img className='logo' 
src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNzIiIGhlaWdodD0iOTIiPjxwYXRoIGZpbGw9IiNFQTQzMzUiIGQ9Ik0xMTUuNzUgNDcuMThjMCAxMi43Ny05Ljk5IDIyLjE4LTIyLjI1IDIyLjE4cy0yMi4yNS05LjQxLTIyLjI1LTIyLjE4QzcxLjI1IDM0LjMyIDgxLjI0IDI1IDkzLjUgMjVzMjIuMjUgOS4zMiAyMi4yNSAyMi4xOHptLTkuNzQgMGMwLTcuOTgtNS43OS0xMy40NC0xMi41MS0xMy40NFM4MC45OSAzOS4yIDgwLjk5IDQ3LjE4YzAgNy45IDUuNzkgMTMuNDQgMTIuNTEgMTMuNDRzMTIuNTEtNS41NSAxMi41MS0xMy40NHoiLz48cGF0aCBmaWxsPSIjRkJCQzA1IiBkPSJNMTYzLjc1IDQ3LjE4YzAgMTIuNzctOS45OSAyMi4xOC0yMi4yNSAyMi4xOHMtMjIuMjUtOS40MS0yMi4yNS0yMi4xOGMwLTEyLjg1IDkuOTktMjIuMTggMjIuMjUtMjIuMThzMjIuMjUgOS4zMiAyMi4yNSAyMi4xOHptLTkuNzQgMGMwLTcuOTgtNS43OS0xMy40NC0xMi41MS0xMy40NHMtMTIuNTEgNS40Ni0xMi41MSAxMy40NGMwIDcuOSA1Ljc5IDEzLjQ0IDEyLjUxIDEzLjQ0czEyLjUxLTUuNTUgMTIuNTEtMTMuNDR6Ii8+PHBhdGggZmlsbD0iIzQyODVGNCIgZD0iTTIwOS43NSAyNi4zNHYzOS44MmMwIDE2LjM4LTkuNjYgMjMuMDctMjEuMDggMjMuMDctMTAuNzUgMC0xNy4yMi03LjE5LTE5LjY2LTEzLjA3bDguNDgtMy41M2MxLjUxIDMuNjEgNS4yMSA3Ljg3IDExLjE3IDcuODcgNy4zMSAwIDExLjg0LTQuNTEgMTEuODQtMTN2LTMuMTloLS4zNGMtMi4xOCAyLjY5LTYuMzggNS4wNC0xMS42OCA1LjA0LTExLjA5IDAtMjEuMjUtOS42Ni0yMS4yNS0yMi4wOSAwLTEyLjUyIDEwLjE2LTIyLjI2IDIxLjI1LTIyLjI2IDUuMjkgMCA5LjQ5IDIuMzUgMTEuNjggNC45NmguMzR2LTMuNjFoOS4yNXptLTguNTYgMjAuOTJjMC03LjgxLTUuMjEtMTMuNTItMTEuODQtMTMuNTItNi43MiAwLTEyLjM1IDUuNzEtMTIuMzUgMTMuNTIgMCA3LjczIDUuNjMgMTMuMzYgMTIuMzUgMTMuMzYgNi42MyAwIDExLjg0LTUuNjMgMTEuODQtMTMuMzZ6Ii8+PHBhdGggZmlsbD0iIzM0QTg1MyIgZD0iTTIyNSAzdjY1aC05LjVWM2g5LjV6Ii8+PHBhdGggZmlsbD0iI0VBNDMzNSIgZD0iTTI2Mi4wMiA1NC40OGw3LjU2IDUuMDRjLTIuNDQgMy42MS04LjMyIDkuODMtMTguNDggOS44My0xMi42IDAtMjIuMDEtOS43NC0yMi4wMS0yMi4xOCAwLTEzLjE5IDkuNDktMjIuMTggMjAuOTItMjIuMTggMTEuNTEgMCAxNy4xNCA5LjE2IDE4Ljk4IDE0LjExbDEuMDEgMi41Mi0yOS42NSAxMi4yOGMyLjI3IDQuNDUgNS44IDYuNzIgMTAuNzUgNi43MiA0Ljk2IDAgOC40LTIuNDQgMTAuOTItNi4xNHptLTIzLjI3LTcuOThsMTkuODItOC4yM2MtMS4wOS0yLjc3LTQuMzctNC43LTguMjMtNC43LTQuOTUgMC0xMS44NCA0LjM3LTExLjU5IDEyLjkzeiIvPjxwYXRoIGZpbGw9IiM0Mjg1RjQiIGQ9Ik0zNS4yOSA0MS40MVYzMkg2N2MuMzEgMS42NC40NyAzLjU4LjQ3IDUuNjggMCA3LjA2LTEuOTMgMTUuNzktOC4xNSAyMi4wMS02LjA1IDYuMy0xMy43OCA5LjY2LTI0LjAyIDkuNjZDMTYuMzIgNjkuMzUuMzYgNTMuODkuMzYgMzQuOTEuMzYgMTUuOTMgMTYuMzIuNDcgMzUuMy40N2MxMC41IDAgMTcuOTggNC4xMiAyMy42IDkuNDlsLTYuNjQgNi42NGMtNC4wMy0zLjc4LTkuNDktNi43Mi0xNi45Ny02LjcyLTEzLjg2IDAtMjQuNyAxMS4xNy0yNC43IDI1LjAzIDAgMTMuODYgMTAuODQgMjUuMDMgMjQuNyAyNS4wMyA4Ljk5IDAgMTQuMTEtMy42MSAxNy4zOS02Ljg5IDIuNjYtMi42NiA0LjQxLTYuNDYgNS4xLTExLjY1bC0yMi40OS4wMXoiLz48L3N2Zz4='
></img>
</Link>
<Search/>

          </div>
      </div>


      <div className='search_option'>
          <ul>

<div className='container'>
<BsSearch />
<Link to="/all" className='search_option'>All</Link>   
<div>

<BsCardImage />
<Link to="/images"className='search_option' >Images</Link>  
</div>
<div>

<MdOutlineVideoSettings />
<Link to="/images"className='search_option' >Videos</Link>  
</div>

<div>

<SiGooglemaps />
<Link to="/images"className='search_option' >maps</Link>  
</div>


<div>

<FaRegNewspaper />
<Link to="/images"className='search_option' >news</Link>  
</div>
<div>

<FiMoreVertical />
<Link to="/images"className='search_option' >more</Link>  
</div>
          </div>
          </ul>


</div>
{term  &&

<div className='search_results'>
<p className='search_result_count'>
  About {date?.searchInformation.formattedTotalResults} 
  resutls ({`${date?.searchInformation.formattedSearchTime}seconds `})        
</p> 

       {date.items.map((item)=>{
           return <div className='search_result'>
               <a className='link' href={item.link} >
                   {item.displayLink}
                   <br></br>
               <h2 className='title'>{item.title}</h2>
               </a>
               <p className='snippet'>{item.snippet}</p>
          </div>

})} 


       </div> 
}
      </>
    
    
  )
}
