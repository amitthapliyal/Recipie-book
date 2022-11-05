import './RecipieList.css'
import { Link } from 'react-router-dom'
import React from 'react'

export default function RecipieList({ recipie }) {
    return (
        <div className='recipe-list'>
            {recipie.map(recipie => (
                <div key={recipie.id} className="card">
                    <h3>{recipie.title}</h3>
                    <p>{recipie.cookingTime} to make.</p>
                    <div>{recipie.method.substring(0, 100)}...</div>
                    <Link to={`recipie/${recipie.id}`}>Cook this</Link>
                </div>
            ))}
        </div>
    )
}
