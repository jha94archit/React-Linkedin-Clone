import React, { useState } from 'react'
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import './Login.css'
import { login } from './features/userSlice'

function Login() {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [name, setName] = useState('')
    const [profilePic, setprofilePic] = useState('')
    const dispatch =  useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(
            userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: userAuth.user.displayName,
                            photoURL: userAuth.user.photoUrl,
                }))
            }
        ).catch((error) => alert(error))
    }

    const register = e => {
        if (!name) {
            return alert('Please enter a Full Name')
        }

        auth.createUserWithEmailAndPassword(email, password).then(
            (userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                }
                    
                ).then(
                    () => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoURL: profilePic,
                        }))
                    }
                )
            }
        ).catch((error) => alert(error))
    }

    

    return (
        <div className='login'>
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" 
                alt="" 
            />

            <form>
                <input placeholder="Full name (required if registering)" value={name} onChange={e => setName(e.target.value)} type="text" />
                <input placeholder="Profile pic URL (ooptional)" value={profilePic} onChange={e => setprofilePic(e.target.value)} type="text" />
                <input placeholder="Email" value={email} onChange={e => setemail(e.target.value)} type="email" />
                <input placeholder="Password" value={password} onChange={e => setpassword(e.target.value)} type="password" />
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member?
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
