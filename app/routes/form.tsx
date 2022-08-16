import React from 'react'

// import { Container } from './styles';

const routes: React.FC = () => {
  return (
    <div>
      <form method="POST">
        <input name="name" type="input" />
        <input name="email" type="input" />
        <input name="password" type="input" />
        <input type="input" />
      </form>
    </div>
  )
}

export default routes
