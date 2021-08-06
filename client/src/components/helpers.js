

export const isInCart = (product, cart) => {
    return cart.find(item => item.id === product.id && item.productSize === product.productSize);
}

export const sessionIdStripe = sessionStorage.getItem('stripe_session_id')

export const activeUser = localStorage.getItem('user')  ? JSON.parse(localStorage.getItem('user')) : []


// const API = 'http://localhost:5000'
const API = 'https://www.bkclothing.xyz'

// success page
export async function fetchFromApi (endpoint, opts) {
    const {method, body} = {method: 'POST', body: null, ...opts}

    const res = await fetch (`${API}/${endpoint}`, {
        method,
        ...(body && { body: JSON.stringify(body) }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(res.status === 200){
        return res.json();
    }else{
        throw new Error(res.statusText)
    }
}

export async function fetchFromApiPut (endpoint, opts) {
    const {method, body} = {method: 'PUT', body: null, ...opts}

    const res = await fetch (`${API}/${endpoint}`, {
        method,
        ...(body && { body: JSON.stringify(body) }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(res.status === 200){
        return res.json();
    }else{
        throw new Error(res.statusText)
    }
}

export async function authorUpdateOnLogin (endpoint, opts) {
    const {method, body} = {method: 'PUT', body: null, ...opts}

    const res = await fetch (`${API}/${endpoint}`, {
        method,
        ...(body && { body: JSON.stringify(body) }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(res.status === 200){
        return res.json();
    }else{
        throw new Error(res.statusText)
    }
}

