import React from 'react';
import musicPlayerImg from "../../img/reproductor-de-musica.png"


export const Login = ({ onLogin }) => {
  return (
  <div className="container text-aling-center">
    <div className="row justify-content-center">
        <div className="col-6">
        <form className="p-3">
            <img className="mb-4" src={ musicPlayerImg } width="140" height="125" alt="logo"/>
            <h3 className="h4 mb-3 fw-normal">Please sign in</h3>

            <div className="form-floating">
            <input type="email" className="form-control shadow-sm my-3" id="floatingInput" placeholder="name@example.com"/>
            <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
            <input type="password" className="form-control shadow-sm" id="floatingPassword" placeholder="Password"/>
            <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me"/> Remember me
            </label>
            </div>
            <button className="w-100 btn btn-lg btn-success bg-gradient opacity-75" type="submit" onClick={ onLogin }>Sign in</button>
            <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
        </form>
        </div>
    </div>
  </div>
  )
}

