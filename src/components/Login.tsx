import React, { ReactElement } from 'react'

interface Props {
    
}

function Login({}: Props): ReactElement {
    return (
        <form className="form">
            <div className="form--group">
                <label htmlFor="input1">Login:</label>
                <input type="text" id="input1" className="form--input" placeholder="Login"/>
            </div>
        </form>
    )
}

export default Login
