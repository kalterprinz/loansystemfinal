import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login'; 
import Register from './components/signup'; 
import Landing from './components/landing';
import ViewMore from './components/ViewMore'; 
import ViewMorePage from './components/ViewNext'
import Borrower from './components/borrowerdash';
import LoanStatus from './components/loanstatus';
import TransactionHistory from './components/transac';
import OfficerDashboard2 from './components/officerdashboard2'; // Correct import
import OfficerDashboard3 from './components/officerdashboard3'; // Import the new component
//import Generate from './components/Generate';
import OfficerProfile from './components/officerprof';
import OfficerDashboard1 from './components/officerdashboard1';
import ApplicationForm from './components/appform'
import CashFlow from './components/cashflow'
import QuizResult from './components/quizresult'
import Calculator from './components/calculator'
import PreQuiz from './components/prequiz'
import CoMaker from './components/comaker';

//import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} /> 
          <Route path="/signup" element={<Register />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/borrowerdash" element={<Borrower />} />
          <Route path="/loanstatus" element={<LoanStatus />} />
          <Route path="/transac" element={<TransactionHistory />} />
          <Route path="/officerdashboard2" element={<OfficerDashboard2 />} />  
          <Route path="/officerdashboard3" element={<OfficerDashboard3 />} />
          <Route path="/officerprof" element={<OfficerProfile />} />
          <Route path="/officerdashboard1" element={<OfficerDashboard1 />} />
          <Route path="/view" element={<ViewMore />} />
          <Route path="/ViewMorePage" element={<ViewMorePage />} />
         {/*  <Route path="/generate" element={<Generate />} /> 
              <Route path="/payment" element={<Payment />} />
              <Route path="/view-more/:id" element={<ViewMore />} />
          */}
          <Route path="/appform" element={<ApplicationForm />} />
          <Route path="/cashflow" element={<CashFlow />} />
          <Route path="/prequiz" element={<PreQuiz />} />
          <Route path="/quizresult" element={<QuizResult />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/comaker" element={<CoMaker />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;