import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Signup from "../components/Signup/Signup"

const SignupPage = () => {
  const navigate = useNavigate();

  //getting the state of user, whether authenticated or not
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if(isAuthenticated === true){
      navigate("/");
    }
  }, [])
  return (
    <div><Signup /></div>
  )
}

export default SignupPage