import { useState } from "react";

const TableGenerator = ({ data }) => {
  console.log(data);
  const [columns] = useState(data.columns);
  const [initialData] = useState(data.nodes);
  const [dataBuffer, setDataBuffer] = useState(data.nodes);
  const [tableLength, setTableLength] = useState(10);

  const filterTable = (objectsArray, value) => {
    return objectsArray.filter((node) => {
      for (const key in node) {
        if (node[key].toLowerCase().includes(value.toLowerCase())) {
          return node;
        }
      }
    });
  };

  const handleFilterInput = (e) => {
    console.log(e.target.value);
    const inputVal = e.target.value;
    const results = filterTable(initialData, inputVal);
    initialData.filter((data) => data.firstName === inputVal);
    console.log(results);
    setDataBuffer(results);

    if (inputVal.length === 0) {
      setDataBuffer(initialData);
    }
  };

  return (
    <div id="employeeTable_wrapper">
      <div id="employeeTable_length" className="dataTables_length">
        <label htmlFor="employeeTable_selectLength">
          Show
          <select name="employeeTable_length" id="employeeTable_selectLength">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          entries
        </label>
      </div>

      <div className="dataTables_filter" id="employeeTable_filter">
        <label htmlFor="employee_inputFilter">
          Search:
          <input
            onChange={handleFilterInput}
            type="search"
            id="employee_inputFilter"
            aria-controls="employee-table"
          />
        </label>
      </div>

      <table
        id="employee-table"
        className="display dataTable no-footer"
        aria-describedby="employee-table_info"
      >
        <thead>
          <tr className="row">
            {columns.map((column, i) => (
              <th key={`${column.key}-${i}`} id={column.key}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataBuffer.length ? (
            dataBuffer.map((node, index) => (
              <tr className="row" key={index} id={index}>
                {Object.keys(node).map((key, i) => (
                  <th key={`${index}-${i}`} id={key}>
                    {node[key]}
                  </th>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td>No matching records found</td>
            </tr>
          )}
        </tbody>
      </table>
      <div
        className="dataTables_info"
        id="employee-table_info"
        role="status"
        aria-live="polite"
      >
        Showing 1 to 10 of 12 entries
      </div>

      <div
        className="dataTables_paginate paging_simple_numbers"
        id="employee-table_paginate"
      >
        <a
          className="paginate_button previous disabled"
          aria-controls="employee-table"
          data-dt-idx="0"
          tabIndex="-1"
          id="employee-table_previous"
        >
          Previous
        </a>
        <span>
          <a
            className="paginate_button current"
            aria-controls="employee-table"
            data-dt-idx="1"
            tabIndex="0"
          >
            1
          </a>
          <a
            className="paginate_button "
            aria-controls="employee-table"
            data-dt-idx="2"
            tabIndex="0"
          >
            2
          </a>
        </span>
        <a
          className="paginate_button next"
          aria-controls="employee-table"
          data-dt-idx="3"
          tabIndex="0"
          id="employee-table_next"
        >
          Next
        </a>
      </div>
    </div>
  );
};
export default TableGenerator;
