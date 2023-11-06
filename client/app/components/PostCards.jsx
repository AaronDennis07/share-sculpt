import React from 'react'
import PostCard from './PostCard'

const PostCards = ({count}) => {
  const cards = new Array(count).fill(1)
    return (
    <>
        {cards.map((n,i)=><PostCard key={i}/>)}
    </>
  )
}

export default PostCards