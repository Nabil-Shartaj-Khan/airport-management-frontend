import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from "react";
import { useNavigate } from "react-router-dom";
import { Welcome } from "../login/login";
import { DropTable } from "../userview/flightlist";

export function Home() {
    let navigate = useNavigate();
    return <div>
        <h1><b>Welcome to the Airport Management System</b></h1>
        <p>Choose and we'll show the rest</p>
        <Welcome name={'X'} />
        <button style={{fontSize:'20px'}} onClick={() => {
            navigate("/login");
        }}>Login</button>
        <br></br>
        <button style={{fontSize:'20px'}} onClick={() => {
            navigate("/admin_login");
        }}> Admin Login</button>
        <br></br>
        <DropTable/>
    </div>;
}