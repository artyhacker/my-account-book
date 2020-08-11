import React, { useMemo } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import AddPage from './pages/AddPage';
import styles from './App.module.css';
import { Paper, Box } from '@material-ui/core';
import Nav from './components/BottomNav';

export default function AppContainer() {
  const vh = useMemo(() => window.innerHeight, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Paper className={styles.container} style={{ height: vh }}>
          <Box className={styles.page}>
            <AddPage />
          </Box>
          <Nav />
        </Paper>
      </Container>
    </React.Fragment>
  );
}
