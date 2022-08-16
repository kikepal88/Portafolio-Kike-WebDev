import React from 'react';
import getData from '../utils/getData';
import Header from '../Components/Header';
import Main from '../Components/Main';
import AboutMe from '../Components/AboutMe';
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
      <Main>
        <AboutMe
          profession={data.profession}
          avatar={data.avatar}
          ProfileText={data.ProfileText}
          social={data.social}
          hobbies={data.hobbies}
        >
        </AboutMe>
      </Main>
    </React.Fragment>
  );
}

export default App;
