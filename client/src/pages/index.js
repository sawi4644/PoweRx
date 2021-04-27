import React from 'react'
import Content from '../components/Content'
import Hero from '../components/Hero'
import { Container } from 'react-bootstrap'

function Home() {
    return (
        <Container className="d-flex  align-items-center justify-content-center">
            <Hero /> 
            <Content /> 
        </Container>
    )
}

export default Home
