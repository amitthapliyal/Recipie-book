import './Home.css'
import React from 'react'
import useFetch  from '../../Hooks/useFetch'
import RecipieList from '../../Component/RecipieList'

export default function Home() {
  const { data, isPending, error } = useFetch("http://localhost:3000/recipes")
  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>loading...</p>}
      {data && <RecipieList recipie={data} />}
    </div>
  )
}
