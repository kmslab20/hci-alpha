import * as React from 'react';
import {useState} from 'react';
import '../../styles/css/MainFrame.css'
import {MainFrameHeaderBar} from "./MainFrameHeaderBar";
import {HomePage} from "../HomePage/HomePage";
import {PageEnums, ViewEnums} from "../../cache/Enums";
import {NoticePage} from "../NoticePage/NoticePage";
import {SubPageFrame} from "../SubPageFrame";
import {InquiryPage} from "../InquiryPage/InquiryPage";

type Props = {
};
export const MainFrame = ({
}: Props) => {

  const [selectedPage, setSelectedPage] = useState<PageEnums>(PageEnums.HomePage)

  const [selectedView, setSelectedView] = useState<ViewEnums>(ViewEnums.bulletin)

  const handleClickLogin = () => {

  }

  const handleChangeSelectedPage = (pageEnum: PageEnums) => {
      setSelectedPage(pageEnum)
  }

  const handleChangeSelectedView = (viewEnum: ViewEnums) => {
      setSelectedView(viewEnum)
  }

  const pageSelector = (pageEnum: PageEnums) => {
      switch (pageEnum) {
        case PageEnums.HomePage:{
          return <HomePage onChangeSelectedPage={handleChangeSelectedPage}/>

        }
        case PageEnums.NoticePage:{
          return <SubPageFrame
            children={<NoticePage onChangeSelectedView={handleChangeSelectedView} selectedView={selectedView}/>}
            onChangeSelectedPage={handleChangeSelectedPage}
            selectedPage={selectedPage}
            selectedView={selectedView}
            onChangeSelectedView={handleChangeSelectedView}/>

        }
        case PageEnums.InquiryPage:{
          return <SubPageFrame
            children={<InquiryPage  onChangeSelectedView={handleChangeSelectedView} selectedView={selectedView}/>}
            onChangeSelectedPage={handleChangeSelectedPage}
            selectedPage={selectedPage}
            selectedView={selectedView}
            onChangeSelectedView={handleChangeSelectedView}
            />

        }
        default: {
          return <></>
        }
      }
  }

  return (
    <div className="main_frame">
      <MainFrameHeaderBar />
      <div className="main_frame_body">
        {pageSelector(selectedPage)}
      </div>
    </div>
  );
};