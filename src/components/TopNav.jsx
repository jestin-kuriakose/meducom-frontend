import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: #164589;
`

const Image = styled.img`
    object-fit: cover;
`
const TopNav = () => {
  return (
    <div>
        <Container>
            <Image src='https://i.ibb.co/hfb3yQj/innerbanner.png'/>
        </Container>
    </div>
  )
}

export default TopNav