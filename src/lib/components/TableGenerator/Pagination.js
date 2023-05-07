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
<<<<<<< HEAD
          className="paginate_button previous"
=======
          className="paginate_button previous disabled"
>>>>>>> 1c3de6946e3f35174ca8c64986ed1f60d9423d58
          aria-controls="employee-table"
          tabIndex="-1"
          id="employee-table_previous"
          onClick={previousPage}
<<<<<<< HEAD
          disabled={currentPage === 1}
=======
>>>>>>> 1c3de6946e3f35174ca8c64986ed1f60d9423d58
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

<<<<<<< HEAD
        <button
          className="paginate_button next"
          aria-controls="employee-table"
          onClick={nextPage}
          tabIndex="0"
          id="employee-table_next"
          disabled={lastItemOnPage === totalFilteredItems}
        >
          Next
        </button>
=======
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
>>>>>>> 1c3de6946e3f35174ca8c64986ed1f60d9423d58
      </div>
    </>
  );
};
export default Pagination;
