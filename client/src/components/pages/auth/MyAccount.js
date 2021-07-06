import React, {useEffect, useState} from 'react'
import axios from '../../../containers/axios'

function MyAccount() {
    const [user, setUser] = useState([])
    /// get user 
    const fetchData = async () => {
        await axios.get('/user', {headers:{"authorization": localStorage.getItem('authorization')}}) 
        .then(res => {
        setUser(res.data)
        })
        .catch(error => console.log(error.response.data))
    }
    useEffect(()=> {
        fetchData()
    }, [])

    // reload page
    useEffect(()=> {
        // window.location.reload();
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="my__account">
            <div className="container">
                <p>{user.name}</p>
            </div>
        </div>
    )
}

export default MyAccount
