import React,{useContext} from 'react'
import { appreactor } from './Context'
import './header.css'


const Header = () => {

  const {setsearch} = useContext(appreactor)

  let jk=(e)=>{
    setsearch(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div className="header">
        <p>Search Anime</p>
        <input type="text" className='input' onChange={jk}/>
    </div>
  )
}

export default Header