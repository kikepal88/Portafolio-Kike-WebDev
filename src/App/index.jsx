import React from 'react';
import '../Styles/App.css';
import Header from '../Components/Header';
import Main from '../Components/Main';
import AboutMe from '../Components/AboutMe';
import Education from '../Components/Education';
import myData from '../data/data.json';

function App() {

  const [data, setData] = React.useState({});

  React.useEffect(() => {
    setData(myData.data);
  }, [data]);

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
        <Education
          EducationText={data.EducationText}
          certificates={data.certificates}
          Schools={data.Schools}
        >
        </Education>
      </Main>
    </React.Fragment>
  );
}

export default App;
