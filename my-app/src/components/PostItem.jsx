import React from 'react'
import css from './css/PostItem.module.css';

const PostItem = (props) => {


    return (
        props.posts.map((post) => (
            <div>
                <div className={css.SearchItem}>
                    <p>{post.title}</p>
                    <p>{post.name}</p>
                    <img src={post.image} alt={post.title} />
                    <p>{post.description}</p>
                </div>
            </div>
        ))
    );
};

// Solution:

// function PostItem(props) {
//     return (
//         props.savedPosts.map(post => {
//             // Extra task destructuring 
//             const {title, name, image, description} = post
//             return <div className={css.SearchItem} key={title}>
//                 <p>{title}</p>
//                 <p>{name}</p>
//                 <img src={image} alt="random"/>
//                 <p>{description}</p>
//             </div>
//             }
//         )
//     )
// }

export default PostItem