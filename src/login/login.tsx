import { useState } from "@hookstate/core";
import axios from "axios";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../App";

export function Welcome(props: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) {
    return <h1>Hello, {props.name}</h1>;
}

export function Login() {
    let navigate = useNavigate();
    return <div>
        <h1><b>Welcome to the login page</b></h1>
        <form onSubmit={handleSubmit}>
            <label><b>Email:</b> <input name={"email"} type={"email"}></input></label>
            <br></br>
            <label><b>Password:</b> <input name={"password"} type={"password"}></input></label>
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
    let navigate = useNavigate();

    const token= useState(auth);

    async function login(id: string) {
        const response = await axios.post("http://localhost:5000/auth/login", {
          username: "Admin",
          password: "4321",
        });
        console.log(response.data);
        console.log(response.status);
        if (response.status >= 200 || response.status<=300) {
          const data = response.data;
          console.log(data["access_token"]);
          
          token.set(data["access_token"]);

          /* const userResponse=await axios.get("http://localhost:5000/profile", {headers:{
            'Authorization': `Bearer ${data["access_token"]}` 
          }});
          console.log(userResponse.data) */

          navigate("/dashboard");
        }
      }
    
      function handleAdminLogin(e: FormEvent) {
        const target = e.target as typeof e.target & {
          Id: { value: number };
        };
        const Id = target.Id.value; // typechecks!
        console.log(`${Id}`);
        login(Id.toString());
        e.preventDefault();
      }


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
