import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import NewEmployee from "./pages/new/NewEmployee";
import NewDepartment from "./pages/new/NewDepartment"
import NewPosition from "./pages/new/NewPosition";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { productInputs, productInputs1, userInputs } from "./formSource";
import Setting from "./pages/settings/Setting";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" >
              <Route index element={<Home/>} />
              <Route path="login" element={<Login/>} />
              <Route path="employees">
                <Route index element={<List listName={"Funcionarios"} listPath={'employees'} />} />
                <Route path=":employeeId" element={<Single/>} />
                <Route path="new" element={<NewEmployee inputs={userInputs} title="Add novo Funcionario" />} />
              </Route>
              <Route path="positions">
                <Route index element={<List listName={"Cargo"} listPath={"positions"}/>} />
                <Route path=":positionId" element={<Single/>} />
                <Route path="new" element={<NewPosition inputs={productInputs} title="Add novo Cargo" />} />
              </Route>
              <Route path="schedules">
                <Route index element={<List listName={"Horario"} listPath={"schedules"}/>} />
                <Route path=":scheduleId" element={<Single/>} />
                <Route path="new" element={<New inputs={productInputs} title="Add novo Horario" />} />
              </Route>
              <Route path="departments">
                <Route index element={<List listName={"Departamentos"} listPath={"departments"}/>} />
                <Route path=":departmentId" element={<Single/>} />
                <Route path="new" element={<NewDepartment inputs={productInputs1} title="Add novo Departamento" />} />
              </Route>
              <Route path="payrolls">
                <Route index element={<List listName={"Pagamento"} listPath={"payrolls"}/>} />
                <Route path=":payrollId" element={<Single/>} />
                <Route path="new" element={<New inputs={productInputs} title="Add novo Pagamento" />} />
              </Route>
              <Route path="attendace">
                <Route index element={<List listName={"Presenca"} listPath={"attendace"}/>} />
                <Route path=":attendaceId" element={<Single/>} />
                <Route path="new" element={<New inputs={productInputs} title="Add nova Presenca" />} />
              </Route>
              <Route path="cashadvances">
                <Route index element={<List listName={"Adiantamento"} listPath={"cashadvances"}/>} />
                <Route path=":cashadvanceId" element={<Single/>} />
                <Route path="new" element={<New inputs={productInputs} title="Add novo Adiantamento" />} />
              </Route>
              <Route path="overtime">
                <Route index element={<List listName={"Horas Extras"} listPath={"overtime"}/>} />
                <Route path=":overtimeId" element={<Single/>} />
                <Route path="new" element={<New inputs={productInputs} title="Add nova Horas Extras" />} />
              </Route>
              <Route path="dedunctions">
                <Route index element={<List listName={"Desconto"} listPath={"dedunctions"}/>} />
                <Route path=":dedunctionId" element={<Single/>} />
                <Route path="new" element={<New inputs={productInputs} title="Add nova Deducao" />} />
              </Route>
              <Route path="profile">
                <Route index element={<List listName={"Perfil"} listPath={"profile"}/>} />
                <Route path=":profileId" element={<Single/>} />
                <Route path="new" element={<New inputs={productInputs} title="Add novo Perfil" />} />
              </Route>
              <Route path="settings">
                <Route index element={<Setting/>} />
              </Route>
              <Route path="logout">
                <Route index element={<Login/>} />
              </Route>
            </Route>          
          </Routes>
        </AuthProvider>    
      </BrowserRouter>
    </div>
  );
}

export default App;
