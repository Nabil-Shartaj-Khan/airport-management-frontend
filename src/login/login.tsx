import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, FormEvent } from "react";

export function Welcome(props: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) {
    return <h1>Hello, {props.name}</h1>;
}

export function Login() {
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
    </div>;
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
