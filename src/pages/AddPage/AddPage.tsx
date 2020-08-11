import React, { FC } from 'react';

import styles from './styles.module.css';
import { Paper, Box } from '@material-ui/core';
import TypeSelector from '../../components/TypeSelector';
import Keyboard from '../../components/KeyBoard';

const AddPage: FC = () => {
  return (
    <Paper className={styles.container}>
      <Box className={styles.type}>
        <TypeSelector />
      </Box>
      <Box className={styles.keyboard}>
        <Keyboard />
      </Box>
    </Paper>
  );
};

export default AddPage;
