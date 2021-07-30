import React from 'react';
import Routes from './routes/routes';
import theme from './constants/themes'
import { ThemeProvider } from '@material-ui/styles';

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
  );
}

export default App;
