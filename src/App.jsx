
import './App.css'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm';
// import RefForm from './components/SimpleForm/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/SimpleForm/StateFulForm/StatefulForm'

function App() {
  const handleSignUp = data =>{
    console.log(data);
  }
  const handleUpdateProfile = data =>{
    console.log(data);
  }

  return (
    <>
      
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm title={'SignUp' } handleSubmit={handleSignUp}>
        <div>
          <h2>SignUp</h2>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm title={'Profile Update'} handleSubmit={handleUpdateProfile} submitBtnText='Update'>
        <div>
          <h2>Profile Update</h2>
          <p>Please update your profile right now</p>
        </div>
      </ReusableForm>
    </>
  )
}

export default App
