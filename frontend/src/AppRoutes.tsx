// import { Route, Routes } from "react-router-dom"
import { Navigate,  Route, Routes } from "react-router-dom"
import Layout from "./layouts/layouts";


const AppRoutes =()=>{
    return(
        <Routes>
            <Route path="/" element= {<Layout> HOME PAGE</Layout>}/>
            <Route path="/usesprofile" element= {<span>USER PROFILE PAGE</span>}/>
            <Route path="*" element= {<Navigate to="/" />}/>
        </Routes>
    );
}; 

export default AppRoutes;   