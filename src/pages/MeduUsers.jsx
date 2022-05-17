import React, { useEffect, useState } from 'react'
import TopNav from '../components/TopNav'
import styled from 'styled-components'
import { userRequest } from '../requestMethods'

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

const MeduUsers = () => {
    const [users, setUsers] = useState([])

    useEffect(()=> {
        const getUsers = async () => {
            try {
                const res = await userRequest.get(`/meduuser`)
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
        <Container>
        <Table id="cases">
            <tr>
                <Th>First Name</Th>
                <Th>Last Name</Th>
                <Th>City</Th>
                <Th>Email</Th>
                <Th>Speciality</Th>
                <Th>Password</Th>
                <Th>Account type</Th>
                <Th>Action</Th>
            </tr>
             {users.map((user) => 
            <tr id={user.id}>
                <Td>{user.firstname}</Td>
                <Td>{user.lastname}</Td>
                <Td>{user.city}</Td>
                <Td>{user.email}</Td>
                <Td>{user.speciality}</Td>
                <Td>{user.password}</Td>
                <Td>{user.isAdmin ? "Admin": "Rep"}</Td>
            </tr>
            )}
        </Table>
        </Container>
    </div>
  )
}

export default MeduUsers