import useInputState  from '../../Hooks/useInputState.js';

const HookForm = () => {
    const [name, handleNameChange] = useInputState('')
    const emailState = useInputState('email')//another state way

    const handleSubmit = e => {
        console.log('form data', emailState.value);// it is not giving the correct output
        console.log('form data', name);
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} type="text" onChange={handleNameChange} name="name"/>
                <br />
                <input {...emailState}  type="email" name="email" id=""  />
                <br />
                <input type="password" name="password"  />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
    };
export default HookForm;