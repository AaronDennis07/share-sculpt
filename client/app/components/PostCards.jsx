
import React from 'react'
import PostCard from './PostCard'


const PostCards = ({count,blogs}) => {

    return (
    <>
        {blogs.map((b)=><PostCard isEditable={true} title={b.title} description={b.description} tag={b.tag} createdAt={b.createdAt} profile_img={b.author.profile_img} author={b.author.username} id={b._id} coverImg={b.coverImg} key={b._id}/>)}
    </>
  )
}

export default PostCards