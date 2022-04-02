import * as React from 'react';
import {Button, Typography} from "@mui/material";
import {ViewEnums} from "../../cache/Enums";
import {NoticePostContent, NoticePostData} from "../NoticePage/NoticePage";

type Props = {
  data?: NoticePostContent
  onChangeSelectedView: (viewEnum: ViewEnums) => void
};
export const InquiryPagePostView = ({data, onChangeSelectedView}: Props) => {

  const dummyString: string = "AAAAAAA\nAAAAAAAAAAAAAAA\nAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
  const dummyString2: string = "As soon as possible. As soon as possible. As soon as possible. " +
    "As soon as possible. As soon as possible. As soon as possible. As soon as possible. " +
    "As soon as possible. As soon as possible. As soon as possible. As soon as possible. " +
    "As soon as possible. As soon as possible. As soon as possible. "

  return (
    <div className="inquiry_post_view">
      <div className="inquiry_post_view_back_and_title">
        <div className="inquiry_post_view_title">{data?.title}</div>
        <Button className="inquiry_post_view_back_button" onClick={() => onChangeSelectedView(ViewEnums.bulletin)} variant="contained">BACK TO LIST</Button>
      </div>
      <div className="inquiry_post_view_title_sub">
        <div className="author">{data?.author}</div>
        <div className="date">{data?.date}</div>
      </div>
      <div className="inquiry_post_view_content">
        <img alt="iPhone_01" src="img/tempimg1.png"/>
        <Typography align="left" variant="body1" gutterBottom style={{marginTop: 20}}>{data?.content}</Typography>
      </div>

    </div>
  );
};