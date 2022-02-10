import React, {useState} from 'react';

const Comment = ({name, content, email}) => {
   
    return (
        <div style={{border:'1px dashed blue', padding: '10px', margin:'20px'}}>
            <p>{name}</p>
            <p>{email}</p>
            <div>{content}</div>
        </div>
    )
}

export default Comment;