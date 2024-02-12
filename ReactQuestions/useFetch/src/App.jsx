import { useFetch } from './useFetch';

const App = () => {
  const { data, error, loading, refetch } = useFetch(
    'https://v2.jokeapi.dev/joke/Any'
  );

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error: {error.message}</h1>}
      {data && (
        <div>
          <h1>
            Joke: {data.setup} : {data.delivery}
          </h1>
          <button onClick={refetch}>Next Joke</button>
        </div>
      )}
    </div>
  );
};

export default App;
