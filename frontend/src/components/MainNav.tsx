// import React from 'react'
import UsernameMenu from './UsernameMenu';
import { Button } from './ui/button'
import { useAuth0 } from '@auth0/auth0-react'

export default function MainNav() {
  const {loginWithRedirect, isAuthenticated} = useAuth0();
  return (
    <span className='flex space-x-2 items-center'>
      {isAuthenticated? <UsernameMenu/>:
      <Button variant="ghost" className='font-bold hover:text-green-500 hover: bg-white'
      onClick={async ()=> await loginWithRedirect()}
      > 
        Log In
      </Button>
      }
    </span>
    
   
  )
}
