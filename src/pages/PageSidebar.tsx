import * as React from 'react';
import {Button} from "@mui/material";
import {PageEnums, ViewEnums} from "../cache/Enums";

type Props = {
  onChangeSelectedPage: (pageEnum: PageEnums) => void
  selectedPage: PageEnums
  // isPostView: boolean
  // onChangeIsPostView: (isPostView: boolean) => void
  selectedView: ViewEnums
  onChangeSelectedView: (viewEnum: ViewEnums) => void

};
export const PageSidebar = ({onChangeSelectedPage, selectedPage, onChangeSelectedView, selectedView}: Props) => {

  const handleClickHomePageButton = () => {
    onChangeSelectedPage(PageEnums.HomePage)
    onChangeSelectedView(ViewEnums.bulletin)
  }


  const handleClickNoticePageButton = () => {
    if (selectedPage !== PageEnums.NoticePage) {
      onChangeSelectedPage(PageEnums.NoticePage)
      onChangeSelectedView(ViewEnums.bulletin)
    }
  }

  const handleClickInquiryPageButton = () => {
    if (selectedPage !== PageEnums.InquiryPage) {
      onChangeSelectedPage(PageEnums.InquiryPage)
      onChangeSelectedView(ViewEnums.bulletin)
    }
  }

  const handleClickCommunityPageButton = () => {
    if (selectedPage !== PageEnums.CommunityPage) {
      onChangeSelectedPage(PageEnums.CommunityPage)
      onChangeSelectedView(ViewEnums.bulletin)
    }
  }

  return (
    <div className="page_sidebar">
      <Button className="page_sidebar_button" variant="contained" onClick={handleClickHomePageButton}>HOME</Button>
      <Button className="page_sidebar_button" variant="contained" onClick={handleClickNoticePageButton}>NOTICE</Button>
      <Button className="page_sidebar_button" variant="contained" onClick={handleClickInquiryPageButton}>INQUIRY</Button>
      {/*<Button className="page_sidebar_button" variant="contained" onClick={handleClickCommunityPageButton}>COMMUNITY</Button>*/}
    </div>
  );
}