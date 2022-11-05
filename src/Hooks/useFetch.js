import { useEffect, useState } from 'react'


export default function useFetch(url, method = "GET") {

    const [data, setData] = useState(null)
    const [isPending, SetIsPending] = useState(true)
    const [error, setError] = useState(null)
    const [options, setOption] = useState(null)

    const postData = (postData) => {
        setOption({
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
        })
    }

    useEffect(() => {

        const fetchData = async (fetchOptions) => {
            SetIsPending(true)
            try {
                const response = await fetch(url, fetchOptions)
                // console.log(response)
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                const json = await response.json();
                SetIsPending(false)
                setData(json)
                setError(null)
            }
            catch (err) {
                SetIsPending(false)
                setError('could not fetch data')
                console.log(err.message)
            }

        }
        if (method === 'GET') {
            fetchData()
        }
        if (method === "POST" && options) {
            console.log(options)
            fetchData(options)
        }
        // fetchData() 
    }, [url, method, options])
    return { data, isPending, error, postData }
}
