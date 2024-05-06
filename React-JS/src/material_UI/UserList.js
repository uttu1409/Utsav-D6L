// UserList.js
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const UserList = () => {
    // User data defined inside the component
    const users = [
      { name: 'John Doe', username: 'johndoe123', email: 'john@example.com' },
      { name: 'Jane Smith', username: 'janesmith456', email: 'jane@example.com' },
      { name: 'Alice Johnson', username: 'alicej', email: 'alice@example.com' },
    ];
  
    return (
      <div style={{ maxWidth: '300px', margin: '20px auto' }}>
        <Typography variant="h5" gutterBottom>
          User List
        </Typography>
        <List>
          {users.map((user, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={user.name}
                secondary={`${user.username} | ${user.email}`}
              />
            </ListItem>
          ))}
        </List>
      </div>
    );
  };
  
  export default UserList;