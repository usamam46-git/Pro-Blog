import React from 'react'
import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className='py-12 bg-background min-h-screen'>
      <Container>
        <PostForm />
      </Container>
    </div>
  )
}

export default AddPost