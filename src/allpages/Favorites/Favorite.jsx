import React from 'react'
import { useContext } from 'react';
// import TestSideBar from '../../components/cards/Foodcard/Foodcard';
import FavoritesContext from '../../store/favorites-context';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardsResturants from '../../components/cards/CardsResturants';
import  { TestSideBar } from '../../components/cards/Foodcard/Foodcard';



function Favorite() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const favoritesCtx = useContext(FavoritesContext);

 let content;
 if (favoritesCtx.totalFavorites===0){
  content = <p>You got no  Favorites yet. Start Adding Some ?</p>
 }
 else {
  content = <TestSideBar 
   items= {favoritesCtx.favorites}
   />
 }
  return (
    <section>
      <h2 className='text-center mt-5 '>
        My Favorites
      </h2>
      
    
    <Box className='mx-5 mt-5 text-center' sx={{ bgcolor: 'background.paper', width: 1000, }}>
      <AppBar position="static">
        <Tabs
       style={{backgroundColor:'#c60021',textAlign:'center',}}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Favorite Dishes"   {...a11yProps(0)} />
          
          <Tab label="Favorite Restaurants" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {content}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
         <CardsResturants />
        </TabPanel>
      </SwipeableViews>
    </Box>
    </section>
    
  )
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default Favorite
