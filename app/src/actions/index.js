import axios from 'axios'

export const getBeer = () => dispatch => {
    dispatch({ type: "FETCH_BEER_START"})
    axios
    .get('https://api.punkapi.com/v2/beers')
    .then(res =>{
        console.log(res)

    })
    .catch(err =>{
        dispatch({ type: "FETCH_BEER_FAIL", payload: err})
    })
}
