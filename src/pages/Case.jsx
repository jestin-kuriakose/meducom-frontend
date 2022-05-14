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

const Case = () => {
    const [users, setUsers] = useState([])

    useEffect(()=> {
        const getUsers = async () => {
            try {
                const res = await userRequest.get(`/users`)
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
                <Td>{user.firstname} {user.lastname}</Td>
                <Td>Completed</Td>
                <Td>01/05/2022</Td>
                <Td>{user.firstname} {user.lastname}</Td>
            </tr>
            )}
        </Table>
        </Container>
    </div>
  )
}

export default Case