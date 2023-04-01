import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import AboutMe from '../AboutMe/AboutMe';
import Hero from '../Hero/Hero';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
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
        <Hero
          profession={data.profession}
          avatar={data.avatar}
          social={data.social}
          technologies={data.Technologies}
        />
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
          Schools={data.Schools}
        >
        </Education>
        <Projects
          ProjectsText={data.ProjectsText}
          Projects={data.Projects}
        >
        </Projects>
      </Main>
    </React.Fragment>
  );
}

export default App;
