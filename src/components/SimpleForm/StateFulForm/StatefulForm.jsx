import { useState } from "react";

const StatefulForm = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [firstName, setFirstName] = useState(null);

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(firstName, email, password);
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
                <input onChange={handleNameChange}
                type="text" name="name"/>
                <br />
                <input onChange={handleEmailChange}
                type="email" name="email"  />
                <br />
                <input onChange={handlePasswordChange}
                 type="password" name="password"  />
                <br />
                {/* <button>Submit</button> */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StatefulForm;