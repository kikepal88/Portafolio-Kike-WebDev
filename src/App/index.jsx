import React from 'react';
import getData from '../utils/getData';
import Header from '../Header/index';
import './App.css';

function App() {
  const api = 'http://localhost:3000/data';

  const [data, setData] = React.useState({});

  React.useEffect(() => {
    getData(api)
      .then(response => setData(response))
      .catch(error => console.error(error));
  }, []);

  return (
    <React.Fragment>
      <Header
        logo={data.logo}
      >
      </Header>
    </React.Fragment>
  );
}

export default App;
