import React, {useState} from 'react'
import { Typography, Button, TextField, Paper } from '@material-ui/core';
import useStyles from "./styles";

import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";
import FileBase from "react-file-base64";

export default function Form() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    selectedFile: "",
    tags:"",
  })

  const handleSubmit = () => {
    dispatch(createPost(postData));
  }
  const clear = () => {
    console.log("clear")
  }
  return (
    <Paper className= {classes.paper}>
      <Typography>CREATE POST</Typography>
      <form className ={`${classes.root} ${classes.form}`} autoComplete="off" noValidate onSubmit ={handleSubmit}>
        <TextField
          className={classes.textbox}
          name="creator"
          label="Creator"
          variant="outlined"
          fullWidth
          value={postData.creator}
          onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <TextField
          className={classes.textbox}
          name="title"
          label="Title"
          variant="outlined"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField
          className={classes.textbox}
          name="message"
          label="Message"
          variant="outlined"
          fullWidth
          value={postData.message}
          onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField
          className={classes.textbox}
          name="tags"
          label="Tags"
          variant="outlined"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
        <div>
        <FileBase
          type="file"
          multiple={false}
          onDone={({base64})=>setPostData({...postData,selectedFile:base64})}
        />
      </div>
      <Button className ={classes.submitButton}  type="submit" variant = "contained" fullwidth color="primary" size="large" >Submit</Button>
      <Button variant = "contained" fullwidth color="secondary" size="small" onClick={clear}>Clear</Button>
      </form>
      
    </Paper>
  )
}

