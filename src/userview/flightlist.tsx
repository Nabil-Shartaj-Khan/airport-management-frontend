import { useState } from "@hookstate/core";
import Select from "react-select/dist/declarations/src/Select";
import { dummydata } from "../dummydata";

export function Table(props: {
  fromLoc: string;
  toLoc: string;
  tableData: {
    airline_name: string;
    flight_type: string;
    fromLoc: string;
    toLoc: string;
    arrival_date: Date | null;
    departure_date: Date | null;
    duration: string;
    availability: boolean;
  }[];
}) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Airline Name</th>
          <th>Type</th>
          <th>Arrival Date</th>
          <th>Departure Date</th>
          <th>Duration</th>
          <th>Availability</th>
        </tr>
      </thead>
      <tbody>
        {props.tableData
          .filter(
            (value) =>
              {
                console.log(`vfl ${value.fromLoc} pfl ${props.fromLoc}`);
                console.log(`vtl ${value.toLoc} ptl ${props.toLoc}`);
                console.log(`test ${value.fromLoc == props.fromLoc && value.toLoc == props.toLoc}`);
                
                return value.fromLoc == props.fromLoc && value.toLoc == props.toLoc
              }
          )
          .map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.airline_name}</td>
                <td>{data.flight_type}</td>
                <td>{data.arrival_date?.toDateString()}</td>
                <td>{data.departure_date?.toDateString()}</td>
                <td>{data.duration}</td>
                
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
//first dropdown options
const options = ["Dhaka", "Chittagong", "Khulna"];

export function DropTable() {
  const value = useState(options[0]);
  const value2 = useState(options[0]);
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
      <Table toLoc={value.get()} fromLoc={value2.get()} tableData={dummydata} />
    </div>
  );
}
