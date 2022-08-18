import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, FormEvent } from "react";

export function AddEmployee() {
    return <div>
        <h1><b>Add Employee<u></u></b></h1>
        <h2>Add informations regarding the employee</h2>
        <form >
            <label>Name: <input name={"name"} type={"text"}></input></label>
            <label>Id: <input name={"name"} type={"text"}></input></label>
            <label>Age: <input name={"name"} type={"text"}></input></label>
            <label>Jobtype: <input name={"name"} type={"text"}></input></label>
            <br></br>
            <input type={"submit"} value={"Submit"}></input>
            <br></br>
        </form>
    </div>;
}

export function AddFlight() {
    return <div>
        <h1><b>Add Flights<u></u></b></h1>
        <h2>Add informations regarding the flights and airlines</h2>
        <form >
            <label>Airlines: <input name={"name"} type={"text"}></input></label>
            <label>Flight Id: <input name={"name"} type={"text"}></input></label>
            <label>Aircraft type: <input name={"name"} type={"text"}></input></label>
            <label>Arrival: <input name={"name"} type={"text"}></input></label>
            <label>Departure: <input name={"name"} type={"text"}></input></label>
            <label>Duration: <input name={"name"} type={"text"}></input></label>
            <br></br>
            <input type={"submit"} value={"Submit"}></input>
            <br></br>
        </form>
    </div>;
}
export function AddPilot() {
    return <div>
        <h1><b>Add pilots<u></u></b></h1>
        <h2>Add informations regarding the pilots of the aircraft</h2>
        <form >
            <label>Captain's Name: <input name={"name"} type={"text"}></input></label>
            <label>Captain's Id: <input name={"name"} type={"text"}></input></label>
            <label>Co-Pilot's Name: <input name={"name"} type={"text"}></input></label>
            <label>Co-Pilot's Id: <input name={"name"} type={"text"}></input></label>
            <br></br>
            <input type={"submit"} value={"Submit"}></input>
            <br></br>
        </form>
    </div>;
}