import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProfileImg from './ProfileImg';
import TabStyled from './styled/TabStyled';
import { Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import Profile from './Profile';
import TabConent from './TabConent';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs({name}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "224px",justifyContent:"space-around" }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{height:"370px",width:"270px",backgroundColor:"#F2F2F2",borderRadius:"15px",alignItems:"start !important"}}
      >
        <TabStyled icon={<ProfileImg src={'./static/avatar.jpg'}/>} label={name} {...a11yProps(0)} /> 
        <TabStyled  label="My Orders" {...a11yProps(1)} />
        <TabStyled  label="Wishlist" {...a11yProps(2)} />
        <TabStyled  label="Notifcations" {...a11yProps(3)} />
        <TabStyled  label="Settings" {...a11yProps(4)} />
        <Divider/>
        <Link to="/LogIn">
         <Typography variant='body2'sx={{padding:"15px"}}>LogOut</Typography>
        </Link>
      </Tabs>

      <TabPanel value={value} index={0}>
       <Profile/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TabConent/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <TabConent/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <TabConent/>   
      </TabPanel>
      <TabPanel value={value} index={4}>
      <TabConent/>
      </TabPanel>
    </Box>
  );
}
