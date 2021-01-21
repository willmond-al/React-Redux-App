import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getBeer } from '../actions/index'

 const Beer = ({getBeer, beer, isFetching, error}) =>{

    // useEffect(()=>{
    //     getBeer();
    // }, [])

    const handleClick = () =>{
        getBeer()
    }

    if (error) {
        return <h2>We got an error: {error}</h2>;
      }
    
      if (isFetching) {
        return <h2>selecting your beer..</h2>;
      }

    return (
        <div className='beer-card'>
        <img src={beer.image_url}/>
        <h2>{beer.name}</h2>
     <button onClick={handleClick}>find out which beer to drink!</button>
        </div>
    )

}

const mapStateToProps = state => {
    return {
      beer: state.beer,
      isFetching: state.isFetching,
      error: state.error
    };
  };

export default connect(mapStateToProps, {getBeer})(Beer)