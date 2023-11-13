import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from './features/userSlice'
import { auth } from './firebase'
import './Login.css'
import React, {
  useState,
  Suspense,
  createContext,
  useEffect,
  useReducer,
  useRef
} from 'react'
import { initialState, reducer } from './reducers'

function Login() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [profilePic, setProfilePic] = useState('')
  const dispatch1 = useDispatch()

  const loginToApp = (e) => {
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) =>
        // dispatch({
        //   type: 'LOGIN'
        // })
        dispatch1(
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

  const register = () => {
    if (!email || !name) {
      return alert('User name or Email missing!')
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic
          })
          .then(() => {
            // dispatch(
            //   { type: 'LOGIN' }
            dispatch1(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic
              })
            )
          })
      })
      .catch((error) => alert(error))
  }

  return (
    <div className="login">
      <img
        src="https://logos-world.net/wp-content/uploads/2020/09/Spotify-Logo.png"
        alt=""
      />
      <h2>Sign up for free to start listening.</h2>
      <form>
        <label>What should we call you?</label>
        <input
          placeholder="Enter a profile name."
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <label>Can we get your picture?</label>
        <input
          placeholder="Profile picture URL (optional)"
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <label>What's your email?</label>
        <input
          placeholder="Enter your email."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <label>Create a password</label>
        <input
          placeholder="Create a password."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
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
        <span className="login__register" onClick={register}>
          Sign up
        </span>
        <span>.</span>
      </p>
      {/* <Link to="/list" style={{ textDecoration: "none" }}> */}
      {/* <p>skip</p> */}
      {/* </Link> */}
    </div>
  )
}

export default Login
