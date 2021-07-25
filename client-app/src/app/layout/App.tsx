import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
import { Activity } from '../models/activity';

function App() {

  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then((res: any) => {
      console.log(res);
      setActivities(res.data);
    })
  }, [])
  return (
    <div className="App">
      <Header as="h2" icon='users' content='Reactivities' />
        <List>
          {activities.map( (activity: any) => 
            <List.Item key={activity.id}> 
              {activity.title} 
            </List.Item>)}
        </List>
    </div>
  );
}

export default App;