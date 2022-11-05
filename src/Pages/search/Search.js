import './Search.css'
import React from 'react'
import { useLocation } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch'
import RecipieList from '../../Component/RecipieList'

export default function Search() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')
  const url = "http://localhost:3000/recipes?q=" + query
  const { error, ispending, data } = useFetch(url)
  return (
    <div>
      <h2 className='page-title'>Recipie include "{query}"</h2>
      {error && <p className='error'>{error}</p>}
      {ispending && <p className='loading'>loading...</p>}
      {data && <RecipieList recipie={data} />}
    </div>
  )
}
