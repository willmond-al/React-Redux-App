const initialState = {
    beer: '',
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) =>{
    switch(action.type){
        case("FETCH_BEER_START"):
        return({
            ...state, 
            beer: '',
    isFetching: true,
    error: ''
        })
        case("FETCH_BEER_SUCCESS"):
            return({
                ...state,
                beer: action.payload,
                isFetching: false
            })
            case("FETCH_BEER_FAIL"):
            return({
                beer: '',
    isFetching: false,
    error: action.payload
            })
        default:
            return state
    }
}