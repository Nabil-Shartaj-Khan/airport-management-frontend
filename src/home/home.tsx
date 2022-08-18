import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from "react";
import { useNavigate } from "react-router-dom";
import { Welcome } from "../login/login";
import { DropTable } from "../userview/flightlist";

export function Home() {
    let navigate = useNavigate();
    return <div>
        <h1><b>Welcome to the Airport Management System</b></h1>
        <h2><b>Choose and we'll show the rest</b></h2>
        <Welcome name={'User,Please Login with the credentials'} />
        <button style={{fontSize:'20px'}} onClick={() => {
            navigate("/login");
        }}>Login</button>
        <br></br>
        <button style={{fontSize:'20px'}} onClick={() => {
            navigate("/admin_login");
        }}> Admin Login</button>
        <br></br>
    </div>;
}