import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import { Controller, useForm } from 'react-hook-form';
import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { addTask } from '../../features/task/taskSlice';

export const TaskCreate: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const initialValues = {
    name: '',
    description: '',
    status: 'todo',
  }
  const {
    handleSubmit,
    control,
    reset,
    // formState: { errors },
  } = useForm({
    defaultValues: initialValues,
  });
  const onSubmitForm = (data: any) => {
    console.log(data);
    dispatch(addTask(data));
    navigate('/list');
    reset(initialValues);
  };
  return (
    <Box>
      <Typography variant="h3">TaskCreate</Typography>
      <form id="testForm" onSubmit={handleSubmit(onSubmitForm)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({
                field: { onChange, value },
              }) => (
                <>
                  <FormLabel>{'Name'}</FormLabel>
                  <TextField
                    onChange={onChange}
                    value={value}
                    fullWidth
                    variant="outlined"
                  />
                </>
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="description"
              control={control}
              render={({
                field: { onChange, value },
              }) => (
                <>
                  <FormLabel>{'Description'}</FormLabel>
                  <TextField
                    fullWidth
                    value={value}
                    onChange={onChange}
                    variant="outlined"
                    multiline
                    rows={4}
                    InputLabelProps={{ shrink: true }}
                  />
                </>
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};