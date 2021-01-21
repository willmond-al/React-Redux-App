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
    return (
        <div>

    <h2>{beer}</h2>
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