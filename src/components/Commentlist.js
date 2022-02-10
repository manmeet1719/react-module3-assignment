import React, { useEffect, useState } from 'react'

import Comment from './Comment';

const Commentlist = () => {
    const [data, setData] = useState(null)
    const fetchURL = "https://jsonplaceholder.typicode.com/comments?postId=1"

    const getData = () =>
    fetch(fetchURL)
      .then((res) => res.json())

      useEffect(() => {
        getData().then((data) => setData(data))
        
      }, [])
      console.log(data)
    return (
        <div>
        {
            data?.map((item) => <Comment name={item.name} content={item.body} email={item.email} />)
        }         
        </div>
    )
}
export default Commentlist;