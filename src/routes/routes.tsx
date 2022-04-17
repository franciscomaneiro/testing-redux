import { Routes as Switch, Route } from 'react-router-dom';
import { HomeView } from '../modules/home/HomeView';
import { TaskCreate } from '../modules/task/TaskCreate';
import { TaskList } from '../modules/task/TaskList';
import { Layout } from '../shared/layout/Layout';

export const Routes: React.FC = () => {
  return (
    <Layout>
      <Switch>
          <Route index element={<HomeView />} />
          <Route path="/list" element={<TaskList />} />
          <Route path="/create" element={<TaskCreate />} />
      </Switch>
    </Layout>
  );
};