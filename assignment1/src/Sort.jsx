import React from 'react'
import { UserDetail } from './UserDetail'
import {data} from './data.js'

export const Sort = () => {
    function sortAsc(){
      let bar=document.querySelector("#main")
      bar.innerHTML = ""
      console.log(bar)
         
    }
    function sortDsc(){

    }
  return (
    <>
    <div>
    <button onClick ={sortAsc}>sort Asc</button>
    <button onClick ={sortDsc}>sort Dsc</button></div>
    <div id="main">
    
   {data.map((items)=>{
    return <UserDetail  key ={items.id} {...items} />
  })}
 </div>
</>
  )
}
