import React, { useState } from 'react';
import './inc_dec.css';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/CounterSlice';

const IncDec = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const Increment = () => {
        dispatch(actions.increment());
    }

    const Decrement = () => {
        dispatch(actions.decrement());
    }

    const addBy = () => {
        dispatch(actions.addBy(10));
    }

  return (
    <>
        <div className="main_div">
            <div className="center_div">
                <h1>{counter}</h1>
                <div className="btn_div">
                    <button onClick={Increment}>Increment</button>
                    <button onClick={Decrement}>Decrement</button>
                    <button onClick={addBy}>Add by 10</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default IncDec