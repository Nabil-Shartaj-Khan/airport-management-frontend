import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, FormEvent } from "react";

export function Signup() {
    return <div>
        <h1>Registration page</h1>
        <form onSubmit={handleSignup}>
            <label>Name: <input name={"name"} type={"text"}></input></label>
            <br></br>
            <label>Passport Id: <input name={"passport_id"} type={"text"}></input></label>
            <br></br>
            <label>Phone No: <input name={"phone_no"} type={"tel"}></input></label>
            <br></br>
            <input type={"submit"} value={"Submit"}></input>
            <br></br>
        </form>
    </div>;
}

function handleSignup(e:FormEvent) {
    const target = e.target as typeof e.target & {
        name: { value: string };
        passport_id: { value: string };
        phone_no: {value: string};
      };
      const name = target.name.value; // typechecks!
      const passport_id = target.passport_id.value; // typechecks!
      const phone_no = target.phone_no.value; // typechecks!
      console.log(`${name} ${passport_id} ${phone_no}`);
      
    e.preventDefault();
    
}