import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import AboutMe from '../AboutMe/AboutMe';
import Hero from '../Hero/Hero';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import myData from '../data/data.json';
import Footer from '../Footer/Footer';

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
          ProfileText={data.ProfileText}
        >
        </AboutMe>
        <Projects
          ProjectsText={data.ProjectsText}
          Projects={data.Projects}
        >
        </Projects>
        <Education
          EducationText={data.EducationText}
          Henry={data.Henry}
          Schools={data.Schools}
        >
        </Education>
      </Main>
      <Footer
        logo={data.logo}
        social={data.social}
      />
    </React.Fragment>
  );
}

export default App;
