import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userRequest } from '../requestMethods'
import styled from 'styled-components'

const Container = styled.div`
    widTh: 100vw;
    height: 100vh;
    display: flex;
    //align-items: center;
    justify-content: center;
    background-size: cover;
    margin: 50px 0;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`
const Label = styled.label`
    margin: 0 20px;
`
const Button = styled.button`
    width: 40%;
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

const NewMeduSession = () => {
    const [inputs, setInputs] = useState({})
    const navigate = useNavigate()

    const handleChange = (e) => {
        setInputs(prev => {
          return {...prev, [e.target.name]: e.target.value}
        })
      }

    const handleClick = (e) => {
        e.preventDefault();
        try {
            const res = userRequest.post('/medusession/new', {
                ...inputs
            })
            
        }catch(err) {}
        navigate('/medusessions')
    }
  return (
    <Container>
    <form className="addProductForm">
        
    <div className="addProductItem">
      <Label>Location</Label>
      <Input name="location" type="text" placeholder="Location" onChange={handleChange}/>
    </div>
    <div className="addProductItem">
    <Label>Speaker</Label>
    <Input name="speaker" type="text" placeholder="Speaker" onChange={handleChange}/>
  </div>
    <div className="addProductItem">
      <Label>Status</Label>
      <Input name="status" type="text" placeholder="status" onChange={handleChange}/>
    </div>
    <div className="addProductItem">
      <Label>URL</Label>
      <Input name="url" type="text" placeholder="url" onChange={handleChange}/>
    </div>
    
    <Button className="addProductButton" onClick={handleClick}>Create</Button>
    <Link to="/medusessions">
      <Button className="addProductButton">Back</Button>
    </Link>
  </form>
    </Container>
  )
}

export default NewMeduSession