import './SearchBar.css'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchBar() {

    const [term, setTerm] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        if (term) {
            navigate(`/search?q=${term}`)
        }
        else { navigate('/') }
    },[term,navigate])

        return (
            <div className='searchBar'>
                <form>
                    <label htmlFor="search">Search</label>
                    <input type="text" id='search' onChange={(e) => setTerm(e.target.value)} required />
                </form>
            </div>
        )
    }
