import "./App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LoginComponent from "./components/LoginComponent";
import BainAcctInqComponent from "./components/BainAcctInqComponent";
import BianCreateAccount from "./components/BianCreateAccount";
import BainCustInqComponent from "./components/BianCustInqComponent";


function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<LoginComponent />}></Route>
            <Route path="createaccount" element={<BianCreateAccount />} />
            <Route path="accountdetails" element={<BainAcctInqComponent />} />
            <Route path="customerdetails" element={<BainCustInqComponent />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
