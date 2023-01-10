import Banner from './Banner'
import Nav from './Nav'
import './HomeScreen.css' 
import Row from './Row'
import requests from './Request'

const HomeScreen = () => {

    return (
        <main className='homescreen'>
            <Nav />
            <Banner />

            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending Now" fetchUrl={requests.fetchtrending}/>
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row  title="Action Movies"fetchUrl={requests.fetchActionMovies}/>
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
            <Row  title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
            <Row  title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
            
        </main>
    )
}

export default HomeScreen