import { Navigate, Route, RouteProps, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext";


export default function RouterAuth({children, isPrivate = false}) {
  const { user } = useAuth();
  const location = useLocation();

  //  return user ? (<Navigate to="/dashboard" state={{ from: location }} replace />) : (children) 

  // if(user) {
  //   return <Navigate to='/dashboard' state={{ from: location }} replace />;
  // } else {
  //   return children;
  // }


  // return (
  //   <Route {...rest} element={
  //     isPrivate  === !!user ? (
  //       <Component />
  //     ) : (
  //       isPrivate ? <Navigate to='/' replace/> : <Dashboard />
  //     )
  //   }
  //   />
  // )

  return (
    // isPrivate  === !!user ? (
    //   children
    // ) : (
    //   isPrivate ? <Navigate to='/login' state={{ from: location }} replace/> : 
    //     <Navigate to='/' state={{ from: location }} replace/>
    // )
      !!user ? (
        children
      ) : (
        <Navigate to='/login' state={{ from: location }} replace/> 
      )
  )
}