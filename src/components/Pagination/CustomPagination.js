import React from 'react';
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: "dark",   // in v5, use "mode" instead of "type"
  },
});

const CustomPagination = ({ getPage, numOfPages = 10 }) => {
  const handlePageChange = (event, value) => {
    getPage(value);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
        color: "white",
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          count={numOfPages}
          onChange={handlePageChange}
          hideNextButton
          hidePrevButton
          color="primary"
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
