import './App.css';
import Banner from './components/banner/banner';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Row from './components/row';
import requests from './requests';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Row title="New Movies" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
     <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow />    
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow />
     {/* <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow /> */}
     <Footer/>
    </div>
  );
}

export default App;
