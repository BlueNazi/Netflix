import React, { useState } from 'react';
import './style.css';
import { signInWithPopup } from "firebase/auth";
import netflix from "../images/netflix.png";
import { auth, googleAuth } from "../firebase/setup";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signin() {
    const navigate = useNavigate();

    const googleSignin = async () => {
        try {
            await signInWithPopup(auth, googleAuth);
            setTimeout(()=>{
                auth.currentUser?.emailVerified && navigate("/");
            },2000)
            toast.success("signedIn succesfully")
        } catch (err) {
            console.log(err);
        }
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        navigate("/");
    };

    return (
        <>
            <img className='logo2' src={netflix} />
            <div className="login-container">
                <ToastContainer autoClose={2000}/>
                <form className="login-form" onSubmit={handleLogin}>
                    <h2>Sign In</h2>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                    <br />
                    <button className="ggl-btn" onClick={googleSignin}>Sign in with Google</button>
                </form>
            </div>
        </>
    );
}
