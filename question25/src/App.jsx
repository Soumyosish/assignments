import React from 'react'
import UserCard from './UserCard';

const App = () => {
  return (
    <>
      <UserCard name="Soumyosish" email="soum12@gmail.com" age={20} />
      <UserCard name="Dip" email="dip78@gmail.com" age={21} />
    </>
  )
}

export default App