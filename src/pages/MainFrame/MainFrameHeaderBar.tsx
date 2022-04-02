import * as React from 'react';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";

type Props = {

};
export const MainFrameHeaderBar = ({}: Props) => {
  return (
    <div className="main_frame_headerBar">
      <div className="main_frame_headerBar_title">{"Hanyang Apartment"}</div>
      <div className="main_frame_headerBar_buttons">
        <Button variant="contained" color="info">SETTINGS</Button>
        <Button component={Link} to="/" variant="contained" color="error" sx={{marginLeft: 2}}>SIGN OUT</Button>
      </div>

    </div>
  );
};