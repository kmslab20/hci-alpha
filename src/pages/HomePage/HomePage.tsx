import * as React from 'react';
import '../../styles/css/HomePage.css'
import {Button} from "@mui/material";
import {PageEnums} from "../../cache/Enums";

type Props = {
  onChangeSelectedPage: (pageEnum: PageEnums) => void
};
export const HomePage = ({
  onChangeSelectedPage
                         }: Props) => {

  const handleClickNoticePageButton = () => {
    onChangeSelectedPage(PageEnums.NoticePage)
  }

  const handleClickInquiryPageButton = () => {
    onChangeSelectedPage(PageEnums.InquiryPage)
  }

  const handleClickCommunityPageButton = () => {
    onChangeSelectedPage(PageEnums.CommunityPage)
  }

  return (
    <div className="home_page">
      <div className="home_page_buttons">
        <Button className="home_page_button" variant="contained" onClick={handleClickNoticePageButton}>NOTICE</Button>
        <Button className="home_page_button" variant="contained" onClick={handleClickInquiryPageButton}>INQUIRY</Button>
        {/*<Button className="home_page_button" variant="contained" onClick={handleClickCommunityPageButton}>COMMUNITY</Button>*/}
      </div>
      <div className="home_page_bulletin"></div>
    </div>
  );
};