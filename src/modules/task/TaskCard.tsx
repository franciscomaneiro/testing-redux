import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { MoreVertOutlined, Edit } from '@mui/icons-material';
import { Menu, MenuItem } from '@mui/material';
import { TaskType } from '../../features/task/taskSlice';

export const ActionsButton: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        disableFocusRipple
        disableRipple
        aria-controls="delete-subperiod-menu"
        aria-haspopup="true"
        onClick={handleClick}>
        <MoreVertOutlined />
      </IconButton>
      <Menu
        id="delete-subperiod-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem onClick={() => console.log('test')} color="primary">
          <Edit /> Edit Task
        </MenuItem>
        <MenuItem
          onClick={() => console.log('archived')}
          color="primary">
          <Edit /> Status
        </MenuItem>
      </Menu>
    </>
  );
};

export const TaskCard: React.FC<{ taskData: TaskType }> = ({ taskData }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <ActionsButton />
        }
        title={taskData.name}
        subheader={taskData.status}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {taskData.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
