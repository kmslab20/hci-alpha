import * as React from 'react';
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {ViewEnums} from "../../cache/Enums";
import {NoticePostContent} from "../NoticePage/NoticePage";
import {useState} from "react";

type Props = {
  onChangeSelectedView: (viewEnum: ViewEnums) => void
  onAddPost: (newPost: NoticePostContent) => void
};

//
// const styles = makeStyles({
//   root:{
//     color: 'white'
//   }
// });

export const InquiryPageAddPost = ({onChangeSelectedView, onAddPost}: Props) => {

  // const textFieldStyle = styles

  const [titleValue, setTitleValue] = useState<string>('')
  const [contentValue, setContentValue] = useState<string>('')

  const handleAddPost = () => {
      onAddPost({
        id: -1,
        date: new Date().toISOString(),
        read: true,
        title: titleValue,
        content: contentValue,
        author: '301',
      })
  }

  const inputProps = {
    step: 900,
    color: 'white'
  };

  return (
    <div className="inquiry_add_post_view">
      <div className="inquiry_add_post_view_title_text">Title</div>
      <div className="inquiry_add_post_view_title_textField" >
        <TextField id="outlined-basic" variant="standard" inputProps={inputProps} InputLabelProps={{color: "primary"}} fullWidth={true} onBlur={(e) => setTitleValue(e.currentTarget.value)}/>
      </div>
      <div className="inquiry_add_post_view_contents_text">Contents</div>
      <div className="inquiry_add_post_view_contents_textField" >
        <TextField id="outlined-basic-contents" variant="standard" inputProps={inputProps} InputLabelProps={{color: "primary"}} fullWidth={true} rows={8} multiline={true} onBlur={(e) => setContentValue(e.currentTarget.value)}/>
      </div>
      <div className='inquiry_add_post_view_submit_button_container'>
        <Button className='inquiry_add_post_view_submit_button' variant="contained" color="success" onClick={handleAddPost}>SUBMIT INQUIRY</Button>
      </div>

    </div>
  );
};