const Pagination = ({ itemsPerPage, totalItems, currentPage, setCurrentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  
  return (
    
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number, index) => {
          if (index < 5 || index === pageNumbers.length - 1 || (index > currentPage - 3 && index < currentPage + 2)) {
            return (
              <li key={number} className={`page-item${currentPage === number ? " active" : ""}`}>
                <a
                  href={`#!/page=${number}`}
                  className="page-link"
                  onClick={() => setCurrentPage(number)}
                >
                  {number}
                </a>
                
              </li>
            );
          } else if (index === 5 || index === currentPage - 3) {
            return (
              <li key={`ellipsis-${index}`} className="page-item disabled">
                <span className="page-link">...</span>
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
