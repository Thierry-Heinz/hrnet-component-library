const Pagination = ({
  itemsPerPage,
  totalItems,
  totalFilteredItems,
  paginate,
  previousPage,
  nextPage,
  currentPage,
  filtered,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalFilteredItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(currentPage);

  const firstItemOnPage =
    currentPage === 1 ? 1 : (currentPage - 1) * itemsPerPage + 1;
  const lastItemOnPage =
    pageNumbers.length === currentPage
      ? totalFilteredItems
      : currentPage * itemsPerPage;

  return (
    <>
      <div
        className="dataTables_info"
        id="employee-table_info"
        role="status"
        aria-live="polite"
      >
        <span>
          Showing {firstItemOnPage} to {lastItemOnPage} of {totalFilteredItems}{" "}
          entries
        </span>
        {filtered && <span>(filtered from {totalItems} total entries)</span>}
      </div>

      <div
        className="dataTables_paginate paging_simple_numbers"
        id="employee-table_paginate"
      >
        <button
          className="paginate_button previous disabled"
          aria-controls="employee-table"
          tabIndex="-1"
          id="employee-table_previous"
          onClick={previousPage}
        >
          Previous
        </button>
        <span>
          {pageNumbers.map((number) => (
            <button
              key={number}
              className="paginate_button current"
              aria-controls="employee-table"
              tabIndex="0"
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          ))}
        </span>

        {lastItemOnPage === totalFilteredItems || (
          <button
            className="paginate_button next"
            aria-controls="employee-table"
            onClick={nextPage}
            tabIndex="0"
            id="employee-table_next"
          >
            Next
          </button>
        )}
      </div>
    </>
  );
};
export default Pagination;
