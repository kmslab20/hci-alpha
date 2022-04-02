import * as React from 'react';
import {useEffect, useState} from 'react';
import {InquiryPagePostView} from "./InquiryPagePostView";
import {InquiryPagePosts} from "./InquiryPagePosts";
import '../../styles/css/InquiryPage.css'
import {ViewEnums} from "../../cache/Enums";
import {Button} from "@mui/material";
import {InquiryPageAddPost} from "./InquiryPageAddPost";
import {NoticePostContent, NoticePostData} from "../NoticePage/NoticePage";

type Props = {
  onChangeSelectedView: (viewEnum: ViewEnums) => void
  selectedView: ViewEnums
};

export const dummyInquiryPosts: NoticePostData[] = [
  {
    id: 10002,
    author: "admin",
    title: "Welcome!",
    date: '2022-04-01',
    read: false
  },
  {
    id: 10001,
    author: "203",
    title: "Interior fix",
    date: '2022-03-31',
    read: false
  },
  {
    id: 10000,
    author: "203",
    title: "Interior fix",
    date: '2022-03-31',
    read: false
  },
  {
    id: 9999,
    author: "203",
    title: "Interior fix",
    date: '2022-03-31',
    read: false
  }
]

export const dummyInquiryPostContents: NoticePostContent[] = [
  {
    id: 10000,
    author: "admin",
    title: "Welcome!",
    date: '2022-04-01',
    read: false,
    content: 'Content',
    solved: true
  },
  {
    id: 10001,
    author: "203",
    title: "Interior fix",
    date: '2022-03-31',
    read: false,
    content: 'Content',
    solved: true
  },
  {
    id: 10002,
    author: "203",
    title: "Interior fix",
    date: '2022-03-31',
    read: false,
    content: 'Content',
    solved: true
  },
  {
    id: 10003,
    author: "203",
    title: "Interior fix Not Solved",
    date: '2022-03-31',
    read: false,
    content: 'Content',
    solved: false
  }
]

export const InquiryPage = ({onChangeSelectedView, selectedView}: Props) => {

  const [selectedPost, setSelectedPost] = useState<NoticePostContent | undefined>(undefined)
  // const [inquiryPosts, setInquiryPosts] = useState<NoticePostData[]>(dummyInquiryPosts)
  const [inquiryPostContents, setInquiryPostContents] = useState<NoticePostContent[]>(dummyInquiryPostContents)


  const handleClickPostItem = (data: NoticePostContent) => {
    onChangeSelectedView(ViewEnums.post)
    setSelectedPost(data)
  }

  const handleAddPostContent = (newPost: NoticePostContent) => {

    let newId: number = inquiryPostContents[inquiryPostContents.length - 1].id+1
    const newP = {...newPost, id: inquiryPostContents[inquiryPostContents.length - 1].id+1, solved: false}
    inquiryPostContents.push(newP)
    setInquiryPostContents([...inquiryPostContents])


      // inquiryPostContents.push({
      //   ...newPost, id: inquiryPostContents[inquiryPostContents.length - 1].id+1, solved: false
      // })
    onChangeSelectedView(ViewEnums.bulletin)
  }

  useEffect(() => {
    console.log(inquiryPostContents)
  }, [inquiryPostContents])

  return (
    <div className="inquiry_page">
      {
        selectedView === ViewEnums.bulletin ?
          <>
            <div className="inquiry_page_title_and_button">
              <div className="inquiry_page_title">Notice</div>
              <Button className="inquiry_page_add_post_button" onClick={() => onChangeSelectedView(ViewEnums.addPost)} variant="contained">NEW INQUIRY</Button>
            </div>
            <InquiryPagePosts onClickPostItem={handleClickPostItem} inquiryPostContents={inquiryPostContents} />
          </>
          : selectedView === ViewEnums.post ?
            <>
              <InquiryPagePostView data={selectedPost} onChangeSelectedView={onChangeSelectedView}/>
            </>
            : selectedView === ViewEnums.addPost ?
              <>
                <InquiryPageAddPost onAddPost={handleAddPostContent} onChangeSelectedView={onChangeSelectedView}/>
              </>
              : <></>
      }
    </div>
  );
};