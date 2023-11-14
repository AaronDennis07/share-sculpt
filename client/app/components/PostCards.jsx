
import React from 'react'
import PostCard from './PostCard'

const PostCards = ({count}) => {
  const cards = new Array(count).fill(5)
    return (
    <>
        {cards.map((n,i)=><PostCard isEditable={true} key={i}/>)}
    </>
  )
}

export default PostCards