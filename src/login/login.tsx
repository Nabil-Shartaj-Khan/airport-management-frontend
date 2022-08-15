import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export function Welcome(props: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) {
    return <h1>Hello, {props.name}</h1>;
}

export function Login() {
    let navigate = useNavigate();
    return <div>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
            <label>Email: <input name={"email"} type={"email"}></input></label>
            <br></br>
            <label>Password: <input name={"password"} type={"password"}></input></label>
            <br></br>
            <input type={"submit"} value={"Submit"}></input>
            <br></br>
        </form>
        <button style={{fontSize:'20px'}} onClick={() => {
            navigate("/Signup");
        }}> New user? Click here to register</button>
    </div>;
}
export function AdminLogin() {
    return <div> <h1> Admin Login </h1> 
     <form onSubmit={handleAdminLogin}> <label style={{fontSize:"25px"}}> Unique ID:  <input style={{fontSize:"25px"}} name={"Id"} type={"number"}></input></label><br></br><input type={"submit"} value={"Login"}></input></form></div>;
}
function handleSubmit(e:FormEvent) {
    const target = e.target as typeof e.target & {
        email: { value: string };
        password: { value: string };
      };
      const email = target.email.value; // typechecks!
      const password = target.password.value; // typechecks!
      console.log(`${email} ${password}`);
      
    e.preventDefault();
    
}

function handleAdminLogin(e:FormEvent) {
    const target = e.target as typeof e.target & {
        Id: { value: number };
        
      };
      const Id = target.Id.value; // typechecks!
      console.log(`${Id}`);
      
    e.preventDefault(); }
