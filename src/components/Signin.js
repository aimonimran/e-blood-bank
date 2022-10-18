import { useState } from "react";

const Signin = () => {
    const handleChange = (name) => ({target: { value }}) => {

    }

    return(
        <div className="signin">
            <h1>Signin</h1>
            <form className="signin-form">
                <input placeholder="Email" value='' onChange={handleChange('email')} type="email" />
                <input placeholder="Password" value='' type="password" />
            </form>
        </div>
    );
}

export default Signin;