
const SimpleForm = () => {
    const handleSubmit = e => {
        e.preventDefault(); // for not reloading
        console.log(e.target.email.value);//e.target means form
        console.log(e.target.phone.value);//phone.value means property value
        console.log('Submit')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name"/>
                <br />
                <input type="email" name="email"  />
                <br />
                <input type="text" name="phone"  />
                <br />
                {/* <button>Submit</button> */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;