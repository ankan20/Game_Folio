import React, { useEffect, useState } from 'react'
import GenreList from '../Components/GenreList'
import GlobalApi from '../Services/GlobalApi'
import Banner from '../Components/Banner'
import TrendingGames from '../Components/trendingGames'
import GamesByGenreId from '../Components/GamesByGenreId'
import Footer from '../Components/Footer'

function Home() {
    const [allGameList,setAllGameList] =useState();
    const [gameListByGenres,setgameListByGenres] = useState([]);
    const [selectedGenresName,setSelectedGenresName] =useState('Action');
    const [random_number,setRandom_Number] = useState(Math.floor(Math.random() * 19));
    useEffect(()=>{
        getAllGamesList();
        getGameListByGenresId(4);
        const intervalId = setInterval(() => {
            setRandom_Number(Math.floor(Math.random() * 19));
        }, 3000);

        return () => {
            // Clear the interval when the component unmounts
            clearInterval(intervalId);
        };
    },[])
    const getAllGamesList =()=>{
        GlobalApi.getAllGames.then((resp)=>{
            setAllGameList(resp.data.results)
            
        })
    }
    const getGameListByGenresId =(id)=>{
        GlobalApi.getGameListByGenreId(id).then((resp)=>{
            
            setgameListByGenres(resp.data.results)
    })
    }
   
  return (
    <>
        <div className='grid grid-cols-4 px-8'>
            <div className='h-full hidden md:block'><GenreList setGenresId={(setGenresId)=>getGameListByGenresId(setGenresId)}
            selectedGenresName={(name)=>setSelectedGenresName(name)}/></div>

            <div className='col-span-4 md:col-span-3'>
                {allGameList?.length>0 && gameListByGenres.length>0?
                <div>
                <Banner gameBanner={allGameList[random_number]}/>
                <TrendingGames gameList={allGameList}/>
                <GamesByGenreId gameList={gameListByGenres}
                selectedGenresName={selectedGenresName}/>
                </div>
                :null}
                </div>
        </div>
        <Footer/>
    
    </>
  )
}

export default Home
