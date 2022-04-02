import * as React from 'react';
import {PageSidebar} from "./PageSidebar";
import '../styles/css/SubPageFrame.css'
import {PageEnums, ViewEnums} from "../cache/Enums";

type Props = {
  children: JSX.Element
  onChangeSelectedPage: (pageEnum: PageEnums) => void
  selectedPage: PageEnums
  selectedView: ViewEnums
  onChangeSelectedView: (viewEnum: ViewEnums) => void
};
export const SubPageFrame = ({children, onChangeSelectedPage, selectedPage, selectedView, onChangeSelectedView}: Props) => {
  return (
    <div className="sub_page_frame">
      <PageSidebar onChangeSelectedPage={onChangeSelectedPage} selectedPage={selectedPage} selectedView={selectedView} onChangeSelectedView={onChangeSelectedView}/>
      <div className="sub_page_frame_body">{children}</div>
    </div>
  );
};