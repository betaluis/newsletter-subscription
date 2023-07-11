import './App.css'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignUp from './sections/SignUp'
import ThankYou from './sections/ThankYou'
// import ThankYou from './sections/ThankYou'


function App() {

    const [ email, setEmail ] = useState("");

    return (
        <div className="flex flex-col bg-slate-800 min-h-screen xs:p-4 xs:justify-center xs:items-center" >
            <Router>
                <Routes>
                    <Route path="/" element={<SignUp email={email} setEmail={setEmail} />} />
                    {!!email && <Route path="/thankyou" element={<ThankYou setEmail={setEmail} email={email} />} />}
                </Routes>
            </Router>
        </div>
    )
}

export default App
