import React, {useState} from 'react';
import Commentlist from './Commentlist';
import './Poststyle.css';
const Post = ({title, content}) => {
   const [showComment, setShowComment] = useState(false);
   const handleClick = () => {
        setShowComment(!showComment)
   }
    return (
        <div class="card" style={{padding:'20px', border: '1px solid red', marginBottom:'20px '}}>
            <div class="container">
            <p>{title}</p>
            <div>{content}</div>
            <button onClick={handleClick}>{!showComment ? 'show comment' : 'hide comment'}</button>
            {
                showComment && <Commentlist />
            }
            </div>
        </div>
    )                            
}

export default Post;