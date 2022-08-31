import { Typography, AppBar, Grid, Grow, Container } from "@material-ui/core";
import { useEffect } from "react";

import Posts from "./Components/Posts/Posts";
import Form from "./Components/Form/Form";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])
  
  const classes = useStyles();
  return (
    <Container maxidth="lg">
      <AppBar className = {classes.appBar} position="static" color="inherit">
        <Typography className ={classes.Heading} align="center" varinat="h5">Farmers zone</Typography>
        <img className={classes.image} src= "https://image.shutterstock.com/image-photo/modern-technology-agriculture-green-seedling-260nw-1726482340.jpg" alt ="image" height="60" width= "60"/>
      </AppBar>
      <Grow  in>
        <Container>
          <Grid className={classes.Grid}  container justify="space-between"  align = "stretch" spacing ={3}>
            <Grid className ={classes.InnerGrid1} item lg = {12} >
              <Posts />
            </Grid>
            <Grid className ={classes.InnerGrid2} item lg = {12} >
              <Form />
              </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
 
  );
}

export default App;
