import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { checkLocal } from './redux/features/user/userSlice'
import LoginForm from './components/login'
import Dashboard from './components/dashboard'

export default function App() {
  const user = useSelector((state) => state.user.value)
  const dispatch = useDispatch()

  React.useEffect(()=> {
    dispatch(checkLocal());
  })

  return (
    <div>
      {user.local ? (<Dashboard/>): (<LoginForm/>)}
    </div>
  )
}