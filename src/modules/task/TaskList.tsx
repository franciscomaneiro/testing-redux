import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectTasks } from '../../features/task/taskSlice';
import { Button, Grid } from '@mui/material';
import { TaskCard } from './TaskCard';

export const TaskList: React.FC = () => {
  const tasks = useAppSelector(selectTasks);
  return (
    <Box>
      <Box 
        display='flex'
        alignItems='center'
        justifyContent='space-around' 
        paddingBottom="10px">
        <Typography variant="h6">TaskList</Typography>
        <Button variant='contained'>Create</Button>
      </Box>
      <Grid container spacing={3}>
        {tasks && tasks.tasks.map((task) => (
          <Grid item>
            <TaskCard taskData={task} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};