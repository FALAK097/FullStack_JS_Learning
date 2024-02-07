import { useEffect, useState } from 'react';

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      );
      const newData = await response.json();
      setData((prevData) => [...prevData, ...newData]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 1 && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]); // Fetch data whenever page changes

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Add event listener when component mounts

  return (
    <div>
      <h3 className="heading">Infinite Scroll</h3>
      {data.map((item) => (
        <div key={item.id}>
          <h4>Title: {item.title}</h4>
          <p>Body: {item.body}</p>
        </div>
      ))}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScroll;
