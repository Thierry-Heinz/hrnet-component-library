import React from "react";
import FakeData from "./example.json";
import TableGenerator from "../lib/components/TableGenerator/TableGenerator";

const App = () => {
  console.log(FakeData);

  const tableNodes = {
    columns: [
      {
        key: "firstName",
        label: "First Name",
      },
      {
        key: "lastName",
        label: "Last Name",
      },
      {
        key: "dateOfBirth",
        label: "Date of Birth",
      },
      {
        key: "startDate",
        label: "Start Date",
      },
      {
        key: "department",
        label: "Department",
      },
      {
        key: "street",
        label: "Street",
      },
      {
        key: "city",
        label: "City",
      },
      {
        key: "state",
        label: "State",
      },
      {
        key: "zipCode",
        label: "Zip Code",
      },
    ],
    nodes: FakeData,
  };

  return (
    <div style={{ width: 1200, margin: "15px auto" }}>
      <h1>Hello React</h1>
      <TableGenerator data={tableNodes} />
    </div>
  );
};

export default App;
