import { AppBar, Container, createTheme, makeStyles, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});


const Header = () => {
  const classes= useStyles();
  const history= useHistory();

  return (
    <ThemeProvider  theme={darkTheme}  > 
   <AppBar color='transparent' position='static'>
    <Container>
       <Toolbar>
        <Typography 
        onClick={()=> history.push("/")}
        variant="h6"
        className={classes.title}>
          Cryptocurrency Tracker
        </Typography>
        <Select variant="outlined"
         style={{
          width:100,
          height:40,
          marginLeft:15,
         }}        
         >
          <MenuItem value={"INR"}>INR</MenuItem>
          <MenuItem value={"USD"}>USD</MenuItem>
        </Select>
       </Toolbar>
    </Container>
   </AppBar>
  </ThemeProvider>
  )
}

export default Header