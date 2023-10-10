import axios from "axios";

const key = "748cbbaa0e454e09ab5ccf0d4175c4d2";
const axiosCreate = axios.create({
    baseURL : "https://api.rawg.io/api",
})

const getGenreList =axiosCreate.get('/genres?key=' +key);
const getAllGames =axiosCreate.get('/games?key=' +key);
const getGameListByGenreId=(id=>axiosCreate.get('/games?key=' +key +'&genres='+id))
export default{
    getGenreList,
    getAllGames,
    getGameListByGenreId
}