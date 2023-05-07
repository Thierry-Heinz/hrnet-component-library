import { useEffect, useState } from "react";
import Pagination from "./Pagination";

const TableGenerator = ({ data }) => {
  console.log(data);
  const [columns] = useState(data.columns);
  const [initialData] = useState(data.nodes);
  const [dataBuffer, setDataBuffer] = useState(data.nodes);
  const [tableLength, setTableLength] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);
  const [filtered, setFiltered] = useState(false);

  /** Pagination funcs */
  const indexOfLastItem = currentPage * tableLength;
  const indexOfFirstItem = indexOfLastItem - tableLength;
  const currentItems = dataBuffer.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(initialData.length / tableLength)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSelectLength = (e) => {
    setTableLength(e.target.value);
  };

  /** Filtering table func */
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
      setFiltered(false);
    } else {
      setFiltered(true);
    }
  };

  return (
    <div id="employeeTable_wrapper">
      <div id="employeeTable_length" className="dataTables_length">
        <label htmlFor="employeeTable_selectLength">
          Show
          <select
            onChange={handleSelectLength}
            name="employeeTable_length"
            id="employeeTable_selectLength"
            value={tableLength}
          >
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
            currentItems.map((node, index) => (
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
      <Pagination
        itemsPerPage={tableLength}
        totalFilteredItems={dataBuffer.length}
        totalItems={initialData.length}
        paginate={paginate}
        previousPage={previousPage}
        nextPage={nextPage}
        currentPage={currentPage}
        filtered={filtered}
      />
    </div>
  );
};
export default TableGenerator;
