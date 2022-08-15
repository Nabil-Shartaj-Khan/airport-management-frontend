import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from "react";
import { useNavigate } from "react-router-dom";
import { Welcome } from "../login/login";

export function Home() {
    let navigate = useNavigate();
    return <div>
        <h1>Home Page</h1>
        <p>Home page stuff</p>
        <Welcome name={'X'} />
        <button style={{fontSize:'20px'}} onClick={() => {
            navigate("/login");
        }}>Login</button>
        <br></br> <button style={{fontSize:'20px'}} onClick={() => {
            navigate("/admin_login");
        }}> Admin Login</button>
    </div>;
}