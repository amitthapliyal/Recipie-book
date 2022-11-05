import './Navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import useTheme from '../Hooks/useTheme'

export default function Navbar() {
  const { color, changeColor } = useTheme()
  
  
  return (
    <div className='navbar' style={{ background: color }} >
      <nav onClick={() => changeColor('blue')}>
        <Link to='/' className='brand'>
          <h1>Recipie book</h1>
        </Link>
        <SearchBar />
        <Link to='/create'>create Recipie</Link>
      </nav>
      <button onClick={() => changeColor('green')} >green</button>
      <button onClick={() => changeColor('white')}>white</button>
      <button onClick={() => changeColor('yellow')}>yellow</button>
      {/* <button onClick={darkMode}>darkmode</button> */}
      <button>backmode</button>
    </div>
  )
}
