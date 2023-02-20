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
import SingleEmployee from "./pages/single/SingleEmployee";
import ListPosition from "./pages/list/ListPosition";
import ListDepartment from "./pages/list/ListDepartment";
import ListPayroll from "./pages/list/ListPayroll";
import ListEmployee from "./pages/list/ListEmployee";
import NewPayroll from "./pages/new/NewPayroll";
import Routers from "./routes";
import RequireAuth from "./routes/RequireAuth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          {/* <Routes>
            <Route path="/" >
              <Route index element={<Login/>} />
              <Route path="dashboard" element={<Home/>} />
              <Route path="employees">
                <Route index element={<ListEmployee listName={"Funcionarios"} listPath={'employees'} />} />
                <Route path=":employeeId" element={<SingleEmployee/>} />
                <Route path="new" element={<NewEmployee inputs={userInputs} title="Add novo Funcionario" />} />
              </Route>
              <Route path="positions">
                <Route index element={<ListPosition listName={"Cargo"} listPath={"positions"}/>} />
                <Route path=":positionId" element={<Single/>} />
                <Route path="new" element={<NewPosition inputs={productInputs} title="Add novo Cargo" />} />
              </Route>
              <Route path="schedules">
                <Route index element={<List listName={"Horario"} listPath={"schedules"}/>} />
                <Route path=":scheduleId" element={<Single/>} />
                <Route path="new" element={<New inputs={productInputs} title="Add novo Horario" />} />
              </Route>
              <Route path="departments">
                <Route index element={<ListDepartment listName={"Departamentos"} listPath={"departments"}/>} />
                <Route path=":departmentId" element={<Single/>} />
                <Route path="new" element={<NewDepartment inputs={productInputs1} title="Add novo Departamento" />} />
              </Route>
              <Route path="payrolls">
                <Route index element={<ListPayroll listName={"Salario"} listPath={"payrolls"}/>} />
                <Route path=":payrollId" element={<Single/>} />
                <Route path="new" element={<NewPayroll inputs={productInputs} title="Add novo Pagamento" />} />
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
              <Route path="/">
                <Route index element={<Login/>} />
              </Route>
            </Route>          
          </Routes> */}
          <Routers />
          {/* <Routes>
            <Route path="/" >
              <Route index element={<RequireAuth><Home/></RequireAuth>} />
              <Route path="login" element={<Login/>} />
              <Route path="employees">
                <Route index element={<RequireAuth><ListEmployee listName={"Funcionarios"} listPath={'employees'} /></RequireAuth>} />
                <Route path=":employeeId" element={<RequireAuth><SingleEmployee/></RequireAuth>} />
                <Route path="new" element={<RequireAuth><NewEmployee title="Add novo Funcionario" /> </RequireAuth>} />
              </Route>
              <Route path="positions">
                <Route index element={ <RequireAuth><ListPosition listName={"Cargo"} listPath={"positions"}/></RequireAuth>} />
                <Route path=":positionId" element={<RequireAuth><Single/></RequireAuth>} />
                <Route path="new" element={<RequireAuth><NewPosition title="Add novo Cargo" /></RequireAuth>} />
              </Route>
              <Route path="departments">
                <Route index element={<RequireAuth><ListDepartment listName={"Departamentos"} listPath={"departments"}/></RequireAuth>} />
                <Route path=":departmentId" element={<RequireAuth><Single/></RequireAuth>} />
                <Route path="new" element={<RequireAuth><NewDepartment title="Add novo Departamento"/></RequireAuth>} />
              </Route>
              <Route path="payrolls">
                <Route index element={<RequireAuth><ListPayroll listName={"Salario"} listPath={"payrolls"}/> </RequireAuth>} />
                <Route path=":payrollId" element={<RequireAuth><Single/></RequireAuth>} />
                <Route path="new" element={<RequireAuth><NewPayroll title="Add novo Pagamento" /></RequireAuth>} />
              </Route>
              <Route path="profile">
                <Route index element={<RequireAuth><List listName={"Perfil"} listPath={"profile"}/></RequireAuth>} />
                <Route path=":profileId" element={<RequireAuth><Single/></RequireAuth>} />
                <Route path="new" element={<RequireAuth><New title="Add novo Perfil" /></RequireAuth>} />
              </Route>
              <Route path="settings">
                <Route index element={<RequireAuth><Setting/></RequireAuth>} />
              </Route>
              <Route path="login">
                <Route index element={<Login/>} />
              </Route>
            </Route>          
          </Routes> */}
        </AuthProvider>    
      </BrowserRouter>
    </div>
  );
}

export default App;
