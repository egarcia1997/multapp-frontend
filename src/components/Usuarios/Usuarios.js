// import React, { Component } from "react";
// import { Container, Tabs, Tab } from "@material-ui/core";
// import {TabPanel} from "@material-ui/lab";

// class Usuarios extends Component {
//     state = {
//         value: 0,
//     }

//     tabChangeHandler = (event, newValue) => {
//         this.setState({value: newValue});
//     }
    
//     render() {
//         return (
//             <Container maxWidth="lg">
//                 <Tabs value={this.state.value} centered={true} onChange={this.tabChangeHandler} indicatorColor="primary" textColor="primary">
//                     <Tab label="Inspectores" />
//                     <Tab label="Supervisores" />
//                     <Tab label="Administradores" />
//                     <Tab label="Multados" />
//                 </Tabs>
//                 <TabPanel value={this.state.value} index={0}>
//                     Coso de inspectores
//                 </TabPanel>
//                 <TabPanel value={this.state.value} index={1}>
//                     Coso de supervisores
//                 </TabPanel>
//                 <TabPanel value={this.state.value} index={2}>
//                     Coso de administradores
//                 </TabPanel>
//                 <TabPanel value={this.state.value} index={3}>
//                     Coso de multados
//                 </TabPanel>
//             </Container>
//         );
//     }
// }

// export default Usuarios;

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Usuarios() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
        <Tabs indicatorColor="primary" textColor="primary" value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}
