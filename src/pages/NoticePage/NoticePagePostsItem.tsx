import * as React from 'react';
import {NoticePostContent, NoticePostData} from "./NoticePage";

type Props = {
  data: NoticePostContent
  onClickPostItem: (data: NoticePostContent) => void
};
export const NoticePagePostsItem = ({data, onClickPostItem}: Props) => {

  const handleClickPostItem = () => {
      onClickPostItem(data)
  }

  return (
    <div className="notice_post_preview_item" onClick={handleClickPostItem}>
      <div className="author">{data.author}</div>
      <div className="title">{data.title}</div>
      <div className="date">{data.date}</div>
    </div>
  );
};