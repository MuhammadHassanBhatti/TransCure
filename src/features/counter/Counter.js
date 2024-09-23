import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';
import { Box, Button } from '@mui/material';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Box sx={{ marginTop: "30px" }}>
      <Button
        sx={{
          backgroundColor: "black",
          color: "white",
          marginRight: "20px",
          "&:hover": {
            backgroundColor: "gray",
            color: "black",
          },
        }}
        onClick={() => dispatch(increment())}
      >
        Increment
      </Button>
      <span>{count}</span>
      <Button
        sx={{
          backgroundColor: "black",
          color: "white",
          marginLeft: "20px",
          "&:hover": {
            backgroundColor: "gray",
            color: "black",
          },
        }}
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </Button>
    </Box>
  );
};

export default Counter;
