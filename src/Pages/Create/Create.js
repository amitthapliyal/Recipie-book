import './Create.css'

import React, { useState, useRef } from 'react'
import useFetch from '../../Hooks/useFetch'

export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [NewIngredients, setNewIngredients] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = NewIngredients.trim()
    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, ing])
    }
    setNewIngredients('')
    ingredientInput.current.focus()
  }
  
  const {postData, data ,error, isPending} = useFetch("http://localhost:3000/recipes", "POST")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, method, cookingTime)
    postData({ title, ingredients, method, cookingTime: cookingTime + 'minutes' })
  }
  return (
    <div className='create'>
      <h2 className='page-title'>

        <form onSubmit={handleSubmit}>
          <label>
            <span>Recipie Title</span>
            <input type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title} />

          </label>
          <label>
            <span>recipie indegriendts</span>
            <div className='ingredients'>
              <input type="text"
                onChange={(e) => setNewIngredients(e.target.value)} value={NewIngredients} ref={ingredientInput} />
              <button onClick={handleAdd} className="btn">Add</button>
            </div>
          </label>
          <p>current Ingreidents: {ingredients.map(i => <em key={i}>{i},</em>)}</p>
          <label>
            <span>Recipie Method</span>
            <textarea onChange={(e) => setMethod(e.target.value)}
              value={method} />
          </label>

          <label>
            <span>Cookin time (minutes)</span>
            <input type="text"
              onChange={(e) => setCookingTime(e.target.value)}
              value={cookingTime} />
          </label>
          <button className='btn'>submit</button>
        </form>
      </h2>
    </div>
  )
}


