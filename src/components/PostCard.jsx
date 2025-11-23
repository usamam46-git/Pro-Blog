import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full glass-card rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group h-full'>
        <div className='w-full justify-center mb-4 overflow-hidden rounded-xl'>
          <img src={appwriteService.getFileView(featuredImage)} alt={title}
            className='rounded-xl object-cover h-52 w-full transition-transform duration-500 group-hover:scale-110' />
        </div>
        <h2
          className='text-xl font-bold text-text-main group-hover:text-primary transition-colors line-clamp-2'
        >{title}</h2>
      </div>
    </Link>
  )
}


export default PostCard