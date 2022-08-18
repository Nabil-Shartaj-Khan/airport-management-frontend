import { useState } from "react";
import Select from "react-select/dist/declarations/src/Select";

export function Table(fromLoc: string, toLoc: string, tableData: {
    airline_name: string,
    flight_type: string,
    fromLoc: string,
    toLoc: string,
    arrival_date: Date,
    departure_date: Date,
    duration: string
}[]) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Airline Name</th>
                    <th>Type</th>
                    <th>Arrival Date</th>
                    <th>Departure Date</th>
                    <th>Duration</th>
                </tr>
            </thead>
            <tbody>
                {
                    tableData.filter((value) => value.fromLoc == fromLoc && value.toLoc == toLoc).map((data, index) => {
                        return (
                            <tr key={index}>
                                <td>{data.airline_name}</td>
                                <td>{data.flight_type}</td>
                                <td>{data.arrival_date.toDateString()}</td>
                                <td>{data.departure_date.toDateString()}</td>
                                <td>{data.duration}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )

} 
//first dropdown options
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];


export function DropTable(){
    const fromSelect = useState(null);
    return <div> 
        <h1> Where do you wanna go? </h1>
        <Select
        defaultValue={fromSelect[0]}
        onChange={fromSelect[1]}
        options={options}
      /> 
      </div>
}
