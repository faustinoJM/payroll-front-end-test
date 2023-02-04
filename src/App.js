import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { productInputs, userInputs } from "./formSource";
import Setting from "./pages/settings/Setting";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Home/>} />
            <Route path="login" element={<Login/>} />
            <Route path="employees">
              <Route index element={<List listName={"Employee"} listPath={'employees'} />} />
              <Route path=":employeeId" element={<Single/>} />
              <Route path="new" element={<New inputs={userInputs} title="Add New Employee" />} />
            </Route>
            <Route path="positions">
              <Route index element={<List listName={"Position"} listPath={"positions"}/>} />
              <Route path=":positionId" element={<Single/>} />
              <Route path="new" element={<New inputs={productInputs} title="Add new Position" />} />
            </Route>
            <Route path="schedules">
              <Route index element={<List listName={"Schedule"} listPath={"schedules"}/>} />
              <Route path=":scheduleId" element={<Single/>} />
              <Route path="new" element={<New inputs={productInputs} title="Add new Schedule" />} />
            </Route>
            <Route path="departments">
              <Route index element={<List listName={"Department"} listPath={"departments"}/>} />
              <Route path=":departmentId" element={<Single/>} />
              <Route path="new" element={<New inputs={productInputs} title="Add new Department" />} />
            </Route>
            <Route path="payrolls">
              <Route index element={<List listName={"Payroll"} listPath={"payrolls"}/>} />
              <Route path=":payrollId" element={<Single/>} />
              <Route path="new" element={<New inputs={productInputs} title="Add new Payroll" />} />
            </Route>
            <Route path="attendace">
              <Route index element={<List listName={"Attendace"} listPath={"attendace"}/>} />
              <Route path=":attendaceId" element={<Single/>} />
              <Route path="new" element={<New inputs={productInputs} title="Add new Attendace" />} />
            </Route>
            <Route path="cashadvances">
              <Route index element={<List listName={"Cash Advance"} listPath={"cashadvances"}/>} />
              <Route path=":cashadvanceId" element={<Single/>} />
              <Route path="new" element={<New inputs={productInputs} title="Add new Cash Advance" />} />
            </Route>
            <Route path="overtime">
              <Route index element={<List listName={"Overtime"} listPath={"overtime"}/>} />
              <Route path=":overtimeId" element={<Single/>} />
              <Route path="new" element={<New inputs={productInputs} title="Add new Overtime" />} />
            </Route>
            <Route path="dedunctions">
              <Route index element={<List listName={"Dedunction"} listPath={"dedunctions"}/>} />
              <Route path=":dedunctionId" element={<Single/>} />
              <Route path="new" element={<New inputs={productInputs} title="Add new Dedunction" />} />
            </Route>
            <Route path="profile">
              <Route index element={<List listName={"Profile"} listPath={"profile"}/>} />
              <Route path=":profileId" element={<Single/>} />
              <Route path="new" element={<New inputs={productInputs} title="Add new Profile" />} />
            </Route>
            <Route path="settings">
              <Route index element={<Setting/>} />
            </Route>
            <Route path="logout">
              <Route index element={<Login/>} />
            </Route>
    
          </Route>          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
