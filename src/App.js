import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import tableData from "./dataShort.json";

function App() {
  // Hooks - check useState API docs
  const [records, setRecords] = useState(tableData);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleAdd = () => {
    const newRecord = {
      name: "Enter name",
      position: "Enter position",
      office: "474-9934 Eget St.",
      age: 666,
      startDate: "Jul 28, 2020",
      salary: "831952536-00009"
    };
    const recTemp = [newRecord, ...records];
    setRecords(recTemp);
  };

  const handleEdit = () => {
    // TODO - implement edit

    console.log("edit");
  };

  const handleDelete = (rowIndex) => {
    console.log("You want to delete: ", rowIndex);
    const newRecords = records.filter((rec, index) => index !== rowIndex)
    setRecords(newRecords)
  };

  const handleSelectRow = rowData => {
    if (selectedRow && rowData.name === selectedRow.name) {
      return setSelectedRow(null);
    }
    setSelectedRow(rowData);
    console.log("You clicked on : ", rowData.name);
  };

  const renderToolbar = (
    <div className="table-toolbar center">
      <p>1 row selected</p>
      <div>
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={handleEdit}
        >
          Edit
        </button>
      </div>
    </div>
  );

  const renderHead = (
    <tr>
      <th>Name</th>
      <th>Position</th>
      <th>Office</th>
      <th>Age</th>
      <th>Start date</th>
      <th>Salary</th>
      <th>Actions</th>
    </tr>
  );

  const renderBody = records.map((rowData, index) => {
    const isRowSelected = selectedRow && rowData.name === selectedRow.name;
    return (
      <tr
        key={index}
        onClick={() => handleSelectRow(rowData)}
        className={isRowSelected ? "tr-color-selected" : ""}
      >
        <td>{rowData.name}</td>
        <td>{rowData.position}</td>
        <td>{rowData.office}</td>
        <td>{rowData.age}</td>
        <td>{rowData.startDate}</td>
        <td>{rowData.salary}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger m-2"
            onClick={(event) => {
              event.stopPropagation()
              handleDelete(index)
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="App">
      {renderToolbar}
      <table className="table">
        <thead>{renderHead}</thead>
        <tbody>{renderBody}</tbody>
      </table>
    </div>
  );
}

export default App;
