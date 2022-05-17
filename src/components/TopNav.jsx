import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { logout } from '../redux/apiCalls'

const Container = styled.div`
    background-color: #164589;
`

const Image = styled.img`
    object-fit: cover;
`
const Button = styled.button`
    width: 20%;
    border: none;
    padding: 15px 20px;
    background-color: #164589;
    color: white;
    cursor: pointer;
    margin: 10px;
    &:disabled{
        color: green;
        cursor: not-allowed;
    }
`
const TopNav = () => {
  const user = useSelector((state)=> state.user)
  const cUser = user.currentUser ? user.currentUser : false;
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = (e) => {
    e.preventDefault()
    logout(dispatch)
    navigate('/')
  }

  return (
    <div>
        <Container>
            <Image src='https://i.ibb.co/hfb3yQj/innerbanner.png'/>
            
        </Container>
        {cUser && <Link to={'/meduusers'}><Button>MANAGE ACCOUNTS</Button></Link>}
            {cUser && <Link to={'/medusessions'}><Button>MANAGE SESSIONS</Button></Link>}
            {cUser && <Button onClick={handleLogout}>LOGOUT</Button>}
    </div>
  )
}

export default TopNav