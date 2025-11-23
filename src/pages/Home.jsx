import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className="w-full py-20 min-h-screen flex items-center justify-center bg-background">
                <Container>
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-text-main">
                            Welcome to <span className="text-gradient">MegaBlog</span>
                        </h1>
                        <p className="text-xl text-text-muted max-w-2xl mb-10">
                            Discover stories, thinking, and expertise from writers on any topic.
                        </p>
                        <div className="p-2 w-full">
                            <h2 className="text-2xl font-bold text-text-main">
                                Login to read posts
                            </h2>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-12 bg-background min-h-screen'>
            <Container>
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-text-main mb-4">Latest Posts</h2>
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

export default Home