import { useHookstate } from "@hookstate/core";
import axios from "axios";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, FormEvent } from "react";
import { auth } from "../App";
import { Airline, Flight } from "../userview/flightlist";

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

    const updated = useHookstate(false);
    const token = useHookstate(auth);

    async function addOrUpdateFlight(flight: Flight) {
        const response = await axios.post("http://localhost:5000/admindata/flight", flight, {headers:{
            'Authorization': `Bearer ${token.get()}` 
          }});
        console.log(response.data);
        console.log(response.status);
        if (response.status >= 200 || response.status <= 300) {
            updated.set(true)
        }
    }

    function handleAddFlight(e: FormEvent) {
        const target = e.target as typeof e.target & {
            airlines: { value: string };
            flight_id: { value: string };
            aircraft_type: { value: string };
            arrival: { value: Date };
            departure: { value: Date };
            duration: { value: string };
            fromLoc: { value: string };
            toLoc: { value: string }
        };
        const flight: Flight = {
            flightCode: target.flight_id.value,
            flightType: target.aircraft_type.value,
            arrival: target.arrival.value,
            departure: target.arrival.value,
            duration: target.duration.value,
            fromLoc: target.fromLoc.value,
            toLoc: target.toLoc.value,
            airlineId: target.airlines.value
        }
        // typechecks!
        console.log(`${flight}`);
        addOrUpdateFlight(flight);
        e.preventDefault();
    }

    return <div>
        <h1><b>Add Flights<u></u></b></h1>
        {updated.get() ? <text>Updated!</text> : <div>
            <h2>Add informations regarding the flights and airlines</h2>
            <form onSubmit={handleAddFlight}>
                <label>Airlines: <input name={"airlines"} type={"text"}></input></label>
                <label>Flight Id: <input name={"flight_id"} type={"text"}></input></label>
                <label>Aircraft type: <input name={"aircraft_type"} type={"text"}></input></label>
                <label>Arrival: <input name={"arrival"} type={"date"}></input></label>
                <label>Departure: <input name={"departure"} type={"date"}></input></label>
                <label>Duration: <input name={"duration"} type={"text"}></input></label>
                <label>From: <input name={"fromLoc"} type={"text"}></input></label>
                <label>To: <input name={"toLoc"} type={"text"}></input></label>

                <br></br>
                <input type={"submit"} value={"Submit"}></input>
                <br></br>
            </form>
        </div>}
    </div>;
}

export function AddPilot() {
    return <div>
        <h1><b>Add pilots<u></u></b></h1>
        <h2>Add informations regarding the pilots of the aircraft</h2>
        <form>
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

export function AddAirlines(){
    const updated = useHookstate(false);
    const token = useHookstate(auth);
    async function addOrUpdateAirline(airline: Airline) {
        const response = await axios.post("http://localhost:5000/admindata/airline", airline, {headers:{
            'Authorization': `Bearer ${token.get()}` 
          }});
        console.log(response.data);
        console.log(response.status);
        if (response.status >= 200 || response.status <= 300) {
            updated.set(true)
        }
    }
    function handleAddAirline(e: FormEvent) {
        const target = e.target as typeof e.target & {
            airline_id: { value: string };
            airline_name: { value: string };
            
        };
        const airline: Airline = {
            airlineName: target.airline_name.value,
            airlineId: target.airline_id.value,
            
        }
        // typechecks!
        console.log(`${airline}`);
        addOrUpdateAirline(airline);
        e.preventDefault();
    }

    return <div>
        <h1><b>Add Airlines<u></u></b></h1>
        <h2>Add informations regarding the Airlines</h2>
        <form>
            <label>Add Airline Id: <input name={"airline_id"} type={"text"}></input></label>
            <label>Add Airline name: <input name={"airline_name"} type={"text"}></input></label>
            <br></br>
            <input type={"submit"} value={"Submit"}></input>
            <br></br>
        </form>
    </div>;
    
}
