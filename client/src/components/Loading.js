import React, {useState, useEffect} from 'react'
import ClipLoader from "react-spinners/FadeLoader";
import './css/loading.css'
function Loading() {
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        setLoading(true)
        setTimeout(()=> {
          setLoading(false)
        }, 2000)
    }, [])

    return (
        <div className={`${loading && "loading__page"}`}>
            <ClipLoader color='#F5A623' loading={loading} size={150} />
        </div>
    )
}

export default Loading
