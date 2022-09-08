import React from 'react'
import { Wrapper, Card } from './Account.styles'
import Avatar from '../../Components/Avatar/Avatar'
import AccountForm from './AccountForm'

const Account = () => {
  return (
    <>
    <Wrapper>
        <h1>User Account</h1>
        <p>User Details</p>
        <Card>
          <Avatar />
          <AccountForm />
        </Card>
    </Wrapper>
    </>
  )
}

export default Account