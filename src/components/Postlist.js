import React, { useEffect, useState } from 'react'

import Post from './Post';

const Postlist = () => {
    const [data, setData] = useState(null)
    const [postComment, setPostComment] = useState([]);
    const fetchURL = "https://jsonplaceholder.typicode.com"

    const getData = () =>
    fetch(`${fetchURL}/posts`)
      .then((res) => res.json())

      useEffect(() => {
        getData().then((data) => setData(data))
        
      }, [])
      console.log(data)
    return (
        <div>
        {
            data?.map((item) => <Post title={item.title} content={item.body} />)
        }         
        </div>
    )
}
export default Postlist;