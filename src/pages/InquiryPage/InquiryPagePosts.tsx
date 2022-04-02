import * as React from 'react';
import {InquiryPagePostsItem} from "./InquiryPagePostsItem";
import {NoticePostContent, NoticePostData} from "../NoticePage/NoticePage";
import {useEffect, useState} from "react";

type Props = {
  onClickPostItem: (data: NoticePostContent) => void
  inquiryPostContents: NoticePostContent[]
};

export const InquiryPagePosts = ({onClickPostItem, inquiryPostContents}: Props) => {

  // const [reversedArray, setReversedArray] = useState<NoticePostContent[]>([])


  const reversedArray = Array.from(inquiryPostContents).sort((a, b) => b.id - a.id)

    // [...inquiryPostContents.sort((a, b) => b.id - a.id)]
  // reversedArray.sort((a, b) => b.id - a.id)

  // useEffect(() => {
  //   console.log(reversedArray)
  // })

  return (
    <div className="inquiry_page_body">
      {
        reversedArray.map((item) => {
          return <InquiryPagePostsItem key={`${item.id}__${item.title}`} data={item} onClickPostItem={onClickPostItem}/>
        })
      }
    </div>
  );
};