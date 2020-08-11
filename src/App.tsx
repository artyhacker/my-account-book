import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import AddPage from './pages/AddPage';

export default function AppContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <AddPage />
      </Container>
    </React.Fragment>
  );
}
