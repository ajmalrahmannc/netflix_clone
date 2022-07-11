import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {originals,action,trending,ComedyMovies,HorrorMovies,RomanceMovies,Documentaries} from './urls'

function App() {
  return (
    <div >
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action Movies' isSmall/>
      <RowPost url={trending} title='Trending Movies' isSmall/>
      <RowPost url={ComedyMovies} title='Comedy Movies' isSmall/>
      <RowPost url={HorrorMovies} title='Horror Movies' isSmall/>
      <RowPost url={RomanceMovies} title='Romantic Movies' isSmall/>
      <RowPost url={Documentaries} title='Documentaries' isSmall/>
    </div>
  );
}

export default App;
