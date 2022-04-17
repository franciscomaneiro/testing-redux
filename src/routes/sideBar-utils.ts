import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import HomeIcon from '@mui/icons-material/Home';

export const ROUTES = [
  {
    name: 'Home',
    path: '/',
    icon: HomeIcon,
  },
  {
    name: 'Task List',
    path: '/list',
    icon: AssignmentIcon,
  },
  {
    name: 'Task Create',
    path: '/create',
    icon: AssignmentTurnedInIcon,
  }
];