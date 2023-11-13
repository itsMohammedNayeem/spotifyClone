import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'

import './Login2.css'

function Login2() {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const [userInfo, setUserInfo] = useState()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [profilePic, setProfilePic] = useState('')

  const onSubmit = (data) => {
    console.log(data)
  }

  const loginToApp = (e) => {
    // e.preventDefault()

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) =>
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL
          })
        )
      )
      .catch((err) => alert(err))
  }

  return (
    <div className="login">
      <img
        src="https://logos-world.net/wp-content/uploads/2020/09/Spotify-Logo.png"
        alt=""
      />
      {/* <pre>{JSON.stringify(userInfo, undefined, 2)}</pre> */}
      <h2>Sign up for free to start listening.</h2>
      <form
      // onSubmit={handleSubmit(onSubmit)}
      >
        <label>What should we call you?</label>
        <input
          name="name"
          placeholder="Enter a profile name."
          type="text"
          onChange={(e) => setName(e.target.value)}
          {...register('name', { required: 'required' })}
        />
        <p class="error">{errors.name?.message} </p>

        <label>Can we get your picture?</label>
        <input
          name="picture"
          placeholder="Profile picture URL (optional)"
          type="text"
          {...register('picture')}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <label>What's your email?</label>
        <input
          name="email"
          placeholder="Enter your email."
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          {...register('email', {
            required: 'required',
            pattern: { value: /^\S+@\S+$/i, message: 'invalid email' }
          })}
        />
        <p class="error">{errors.email?.message}</p>
        <label>Create a password</label>
        <input
          name="password"
          placeholder="Create a password."
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          {...register('password', {
            required: 'required',
            minLength: { value: 4, message: 'must be > 4 characters' },
            maxLength: { value: 10, message: 'must be < 10 characters' }
          })}
        />
        <p class="error">{errors.password?.message}</p>
        <span>
          By clicking on sign-up, you agree to Spotify's Terms and Conditions of
          Use.
        </span>
        <button type="submit" onClick={loginToApp}>
          Log in
        </button>
      </form>
      <p>
        Don't have an account?{'   '}
        <span className="login__register">Sign up</span>
        <span>.</span>
      </p>
      {/* <Link to="/list" style={{ textDecoration: "none" }}> */}
      {/* <p>skip</p> */}
      {/* </Link> */}
    </div>
  )
}

export default Login2
