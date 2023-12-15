import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

export default function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
      );
      if (res.status === 200) {
        console.log('success');
        setProducts(res.data.products);
        setTotalPages(res.data.total / 10);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };

  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products.map((prod) => {
            return (
              <span key={prod.id} className="products__single">
                <img src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
              </span>
            );
          })}
        </div>
      )}
      {totalPages && (
        <div className="pagination">
          <span
            className={page > 1 ? '' : 'pagination__disable'}
            onClick={() => selectPageHandler(page - 1)}>
            ◀
          </span>
          {[...Array(totalPages)].map((_, i) => {
            return (
              <span
                className={page === i + 1 ? 'pagination__selected' : ''}
                onClick={() => selectPageHandler(i + 1)}
                key={i}>
                {i + 1}{' '}
              </span>
            );
          })}
          <span
            className={page < totalPages ? '' : 'pagination__disable'}
            onClick={() => selectPageHandler(page + 1)}>
            ▶
          </span>
        </div>
      )}
    </div>
  );
}
