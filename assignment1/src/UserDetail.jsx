import React from 'react'
import Styles from './UserDetail.module.css'
import './App.css'
 
export const UserDetail = (props) => {
    const {avatar, first_name,last_name,address,karma,followers,posts,is_following}= props

  return ( 
    <>
    <div id="body">
        <div className = {Styles.Navbar}>
       <div className ={Styles.Image}>
      <img src ={avatar}  className={Styles.img}></img>
    </div>
    <div className={Styles.section1}> 
        <div className ={Styles.userName}><h4 id="firstname">{first_name}</h4><h4>{last_name}</h4></div>
        <div className ={Styles.address}><p>{address}</p></div>
        
    </div>
    <div className={Styles.Section2}>
        <div className={Styles.child1}>
            <h4>{karma}</h4>
            <p>Karma</p>
        </div>
        <div className={Styles.child1}>
            <h4>{followers}</h4>
            <p>followers</p>
        </div>
        <div className={Styles.child1}>
            <h4>{posts}</h4>
            <p>posts</p>
        </div>
        <div className={Styles.Section3}>
            <button className={Styles.button}>{(is_following!=true)?(<h5>UnFollow</h5>):(<h5>Follow</h5>)}</button></div>
    </div>

    </div>
    </div>
  </>
  )
}
