import { useState } from 'react';
import Pagination from './components/Pagination';

const App = () => {
  const itemsPerPage = 5;
  const totalItems = 20;
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const renderItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const items = [];

    for (let i = startIndex; i < endIndex && i < totalItems; i++) {
      items.push(<div key={i}>{`Item ${i + 1}`}</div>);
    }

    return items;
  };

  return (
    <div>
      <h1>Items</h1>
      {renderItems()}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(totalItems / itemsPerPage)}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default App;
