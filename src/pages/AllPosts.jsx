import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => { }, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
    return (
        <div className='w-full py-12 bg-background min-h-screen'>
            <Container>
                <div className="mb-12 text-center">
                    <h1 className="text-3xl font-bold text-text-main mb-4">All Posts</h1>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {posts.map((post) => (
                        <div key={post.$id} className='h-full'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts