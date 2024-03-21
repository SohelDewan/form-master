import { useState } from "react";

const StatefulForm = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [name, setFirstName] = useState('name is required');
    const [error, setError] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length < 6){
            setError('Password must be at least 6 characters');
        }
        else{
            setError('');
        }
        console.log(name, email, password);
    }
    const handleEmailChange = e =>{
        // console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }
    const handleNameChange = e =>{
        setFirstName(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange}
                type="text" name="name"/>
                <br />
                <input onChange={handleEmailChange}
                type="email" name="email"  />
                <br />
                <input onChange={handlePasswordChange}
                 type="password" name="password" required />
                 {
                    error && <p>{error}</p>
                 }
                <br />
                {/* <button>Submit</button> */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StatefulForm;