import axios from 'axios'

const randomNum = (arr) =>{
   const randomNumber =  Math.floor(Math.random()*arr.length)
   return randomNumber
}

export const getBeer = () => dispatch => {
    dispatch({ type: "FETCH_BEER_START"})
    axios
    .get('https://api.punkapi.com/v2/beers')
    .then(res =>{
        console.log(res)
        setTimeout(() => {
            
            dispatch({ type: "FETCH_BEER_SUCCESS", payload: res.data[randomNum(res.data)]})
        }, 2000);

    })
    .catch(err =>{
        dispatch({ type: "FETCH_BEER_FAIL", payload: err})
    })
}
