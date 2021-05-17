const apiResponse = ({ method, url, body}) => {
    if(method === 'GET') return fetch(url)
        .then(res => res.json())
 //   if(method === 'DELETE') return fetch(url, {method})
   //     .then(res => res.json())
    
    
    return fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body
    })
    .then(res => res.json());
}

export default apiResponse;