import React from "react";
import { ThemeProvider } from "styled-components";

import Title from "./Title";

import GlobalStyles from "./styles/globalStyles";
import theme from "./styles/theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Title size="small">Set up React</Title>
      </ThemeProvider>
    </>
  );
};

export default App;
