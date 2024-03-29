import { useHookstate } from "@hookstate/core";
import axios from "axios";
import { useEffect } from "react";
import Select from "react-select/dist/declarations/src/Select";
import { dummydata } from "../dummydata";

export function Table(props: {
  tableData: Flight[];
}) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Flight Code</th>
          <th>Type</th>
          <th>Arrival Date</th>
          <th>Departure Date</th>
          <th>Duration</th>
          <th>From</th>
          <th>To</th>
          <th>Airline Code</th>
        </tr>
      </thead>
      <tbody>
        {props.tableData
          .map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.flightCode}</td>
                <td>{data.flightType}</td>
                <td>{data.arrival.toLocaleString()}</td>
                <td>{data.departure.toLocaleString()}</td>
                {/* <td>{data.arrival?.toDateString()}</td> */}
                {/* <td>{data.departure?.toDateString()}</td> */}
                <td>{data.duration}</td>
                <td>{data.fromLoc}</td>
                <td>{data.toLoc}</td>
                <td>{data.airlineId}</td>


              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
//first dropdown options
const options = ["All", "Dhaka", "Chittagong", "Sylhet", "Cox\'sbazar", "Rajshahi"];

export function DropTable() {
  const value = useHookstate(options[0]);
  const value2 = useHookstate(options[0]);

  const data = useHookstate<Flight[]>(() => axios.get(`http://localhost:5000/view/flights?from=${value.get()}&to=${value2.get()}`).then((flightResponse) => {
    if (flightResponse.status >= 200 || flightResponse.status <= 300) {
      const flights = flightResponse.data as Flight[];
      console.log(flights)
      return flights;
    } else return [];
  }));

  /* useEffect(() => {
    axios.get(`http://localhost:5000/view/flights?from=${value.get()}&to=${value2.get()}`).then((flightResponse) => {
      if (flightResponse.status >= 200 || flightResponse.status <= 300) {
        const flights = flightResponse.data as flight[];
        console.log(flights)
        data.set(flights)
      }
    });
  }, []);
 */
  useEffect(() => {
    axios.get(`http://localhost:5000/view/flights?from=${value.get()}&to=${value2.get()}`).then((flightResponse) => {
      if (flightResponse.status >= 200 || flightResponse.status <= 300) {
        const flights = flightResponse.data as Flight[];
        data.set(flights)
      }
    });
  }, [value, value2])

  return (
    <div>
      <select
        onChange={(e) => {
          value.set(e.currentTarget.value);
        }}
        value={value.get()}
      >
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => {
          value2.set(e.currentTarget.value);
        }}
        value={value2.get()}
      >
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <br></br>
      {data.promised ? <></> : <Table tableData={data.get() as Flight[]} />}

    </div>
  );
}


export interface Flight {
  flightCode: string;
  flightType: string;
  arrival: Date;
  departure: Date;
  duration: string;
  fromLoc: string;
  toLoc: string;
  airlineId: string;
}
export interface Airline {
  airlineId: string;
  airlineName: string;
  
}

