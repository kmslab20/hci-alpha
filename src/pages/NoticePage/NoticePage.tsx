import * as React from 'react';
import {useState} from 'react';
import '../../styles/css/NoticePage.css'
import {NoticePagePosts} from "./NoticePagePosts";
import {NoticePagePostView} from "./NoticePagePostView";
import {ViewEnums} from "../../cache/Enums";
import {NoticePageAddPost} from "./NoticePageAddPost";
import {Button} from "@mui/material";
import {dummyInquiryPostContents} from "../InquiryPage/InquiryPage";

export type NoticePostData = {
  id: number,
  author: string,
  title: string,
  date: string,
  read: boolean
}

export type NoticePostContent = {
  id: number,
  author: string,
  title: string,
  date: string,
  read: boolean,
  content: string,
  solved?: boolean
}

export const dummyNoticePostContents: NoticePostContent[] = [
  {
    id: 10000,
    author: "admin",
    title: "Welcome!",
    date: '2022-04-01',
    read: false,
    content: 'Content',
  },
  {
    id: 10001,
    author: "203",
    title: "Interior fix",
    date: '2022-03-31',
    read: false,
    content: 'Content',
  },
  {
    id: 10002,
    author: "203",
    title: "Interior fix",
    date: '2022-03-31',
    read: false,
    content: 'Content',
  },
  {
    id: 10003,
    author: "203",
    title: "Interior fix Not Solved",
    date: '2022-03-31',
    read: false,
    content: 'Content',
  },
  {
    id: 10004,
    author: "102",
    title: "Interior fix Not Solved!!!",
    date: '2022-04-02',
    read: false,
    content: 'Content',
  }
]


type Props = {
  onChangeSelectedView: (viewEnum: ViewEnums) => void
  selectedView: ViewEnums
};
export const NoticePage = ({onChangeSelectedView, selectedView}: Props) => {

  const [selectedPost, setSelectedPost] = useState<NoticePostContent | undefined>(undefined)
  const [noticePostContents, setNoticePostContents] = useState<NoticePostContent[]>(dummyNoticePostContents)

  const handleClickPostItem = (data: NoticePostContent) => {
    onChangeSelectedView(ViewEnums.post)
    setSelectedPost(data)
  }

  const handleAddPostContent = (newPost: NoticePostContent) => {

    let newId: number = noticePostContents[noticePostContents.length - 1].id+1
    const newP = {...newPost, id: noticePostContents[noticePostContents.length - 1].id+1, solved: false}
    noticePostContents.push(newP)
    setNoticePostContents([...noticePostContents])


    // inquiryPostContents.push({
    //   ...newPost, id: inquiryPostContents[inquiryPostContents.length - 1].id+1, solved: false
    // })
    onChangeSelectedView(ViewEnums.bulletin)
  }

  // const viewSelector = () => {
  //   switch (selectedView) {
  //     case ViewEnums.bulletin:{
  //       return <>
  //         <div className="notice_page_title_and_button">
  //           <div className="notice_page_title">Notice</div>
  //           <Button className="notice_page_add_post_button" onClick={() => onChangeSelectedView(ViewEnums.addPost)} variant="contained">NEW NOTICE</Button>
  //         </div>
  //         <NoticePagePosts onClickPostItem={handleClickPostItem} noticePostContents={noticePostContents}/>
  //       </>
  //     }
  //     case ViewEnums.post:{
  //       return <>
  //         <NoticePagePostView data={selectedPost} onChangeSelectedView={onChangeSelectedView}/>
  //       </>
  //     }
  //     case ViewEnums.addPost:{
  //       return <>
  //       <NoticePageAddPost />
  //       </>
  //     }
  //     default:{
  //       return <>
  //         <div className="notice_page_title">Notice</div>
  //         <NoticePagePosts onClickPostItem={handleClickPostItem} noticePostContents={noticePostContents}/>
  //       </>
  //     }
  //   }
  // }

  return (
    <div className="notice_page">
      {
        selectedView === ViewEnums.bulletin ?
          <>
            <div className="notice_page_title_and_button">
              <div className="notice_page_title">Notice</div>
              <Button className="notice_page_add_post_button" onClick={() => onChangeSelectedView(ViewEnums.addPost)} variant="contained">NEW NOTICE</Button>
            </div>
            <NoticePagePosts onClickPostItem={handleClickPostItem} noticePostContents={noticePostContents}/>
          </>
          : selectedView === ViewEnums.post ?
            <>
              <NoticePagePostView data={selectedPost} onChangeSelectedView={onChangeSelectedView}/>
            </>
          : selectedView === ViewEnums.addPost ?
              <>
                <NoticePageAddPost onAddPost={handleAddPostContent} onChangeSelectedView={onChangeSelectedView}/>
              </>
            : <></>
      }
    </div>
  );
};