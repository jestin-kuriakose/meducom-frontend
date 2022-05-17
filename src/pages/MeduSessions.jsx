import React, { useEffect, useState } from 'react'
import TopNav from '../components/TopNav'
import styled from 'styled-components'
import { userRequest } from '../requestMethods'
import { Link } from 'react-router-dom'

const Container = styled.div`
    widTh: 100vw;
    height: 100vh;
    display: flex;
    //align-items: center;
    justify-content: center;
    background-size: cover;
`
const Table = styled.table``
const Td = styled.td`
border: 1px solid #ddd;
  padding: 8px;
`
const Th = styled.th`
border: 1px solid #ddd;
  padding: 8px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #164589;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled{
        color: green;
        cursor: not-allowed;
    }
`

const MeduSessions = () => {
    const [users, setUsers] = useState([])


    useEffect(()=> {
        const getUsers = async () => {
            try {
                const res = await userRequest.get(`/medusession`)
                setUsers(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        getUsers()
    }, [])
    console.log(users)

  
  return (
    <div>
        <TopNav/>
        <Link to="/createsession"><Button>Create New Session</Button></Link>

        <Container>
        
        <Table id="cases">
            <tr>
                <Th>Date</Th>
                <Th>Location</Th>
                <Th>Speaker</Th>
                <Th>Status</Th>
                <Th>Created by</Th>
                <Th>Created Date</Th>
                <Th>Session URL</Th>
                <Th>Action</Th>
            </tr>
             {users.map((user) => 
            <tr id={user.id}>
                <Td>01/05/2022</Td>
                <Td>{user.city}</Td>
                <Td>{user.speaker}</Td>
                <Td>{user.status}</Td>
                <Td>{user.email}</Td>
                <Td>01/05/2022</Td>
                <Td>{user.url}</Td>
                <Td></Td>
            </tr>
            )}
        </Table>
        </Container>
    </div>
  )
}

export default MeduSessions