const baseUrl = process.env.BASE_URL

export const getData = async (url, token) => {
    const res = await fetch(`${baseUrl}/${url}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
          }
    })
    if (res.status === 204) {
        return null; // If the response is empty, return null
    }
    const data = await res.json()
    return data
}

export const postData = async (url, post, token) => {
    const res = await fetch(`${baseUrl}/${url}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(post)
    })

    if (res.status === 204) {
        return null; // If the response is empty, return null
    }
    const data = await res.json()
    return data
}



export const putData = async (url, post, token) => {
    const res = await fetch(`${baseUrl}/${url}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(post)
    })

    const data = await res.json()
    return data
}

export const patchData = async (url, post, token) => {
    const res = await fetch(`${baseUrl}/${url}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(post)
    })

    const data = await res.json()
    return data
}


export const deleteData = async (url, token) => {
    const res = await fetch(`${baseUrl}/${url}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })

    const data = await res.json()
    return data
}

