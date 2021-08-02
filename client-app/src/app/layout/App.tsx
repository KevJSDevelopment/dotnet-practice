import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Container, Header, List } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

const App = () => {

  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then((res: any) => {
      console.log(res);
      setActivities(res.data);
    })
  }, [])

  return (
    <>
      <NavBar />
      <Container style={{marginTop: '7em'}}>
        <ActivityDashboard activities={activities} />
      </Container>
    </>
  );
}

export default App;
