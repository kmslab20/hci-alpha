import * as React from 'react';
import {NoticePostContent, NoticePostData} from "../NoticePage/NoticePage";

type Props = {
  data: NoticePostContent
  onClickPostItem: (data: NoticePostContent) => void
};
export const InquiryPagePostsItem = ({data, onClickPostItem}: Props) => {

  const solved: boolean = false

  const handleClickPostItem = () => {
      onClickPostItem(data)
  }

  return (
    <div className="inquiry_post_preview_item" onClick={handleClickPostItem}>
      <div className="title">{data.title}</div>
      <div className="photo">
        <img className="img" alt="iPhone_01" src="img/tempimg1.png" />
      </div>
      <div className="bottom">
        {data.solved && data.solved === true ? <div className="solved">{"Solved"}</div> : <div className="waiting">{"Waiting to be Solved..."}</div>}

        <div className="date">{data.date}</div>
      </div>
    </div>
  );
};