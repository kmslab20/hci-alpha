import * as React from 'react';
import {NoticePagePostsItem} from "./NoticePagePostsItem";
import {NoticePostContent, NoticePostData} from "./NoticePage";

type Props = {
  onClickPostItem: (data: NoticePostContent) => void
  noticePostContents: NoticePostContent[]
};

export const NoticePagePosts = ({onClickPostItem, noticePostContents}: Props) => {

  const reversedArray = Array.from(noticePostContents).sort((a, b) => b.id - a.id)

  return (
    <div className="notice_page_body">
      {
        reversedArray.map((item) => {
          return <NoticePagePostsItem data={item} onClickPostItem={onClickPostItem}/>
        })
      }
    </div>
  );
};