import * as React from 'react';
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import '../../src/styles/css/LoginPage.css'
import {useState} from "react";

type Props = {

};
export const LoginPage = ({}: Props) => {

  const [inputID, setInputID] = useState<string>('')
  const [inputPW, setInputPW] = useState<string>('')
  const [notCorrect, setNotCorrect] = useState<boolean>(false)

  const handleClickLogin = (e: any) => {
    if(inputID === 'test' && inputPW === 'test'){
      setNotCorrect(false)
    }else{
      e.preventDefault()
      setNotCorrect(true)
    }
  }

  return (
    <div className="login_page">
      <div className="login_page_title">Home4U</div>

      <div className="login_page_input_container">
        <div className="login_page_id_text">ID</div>
        <input className="login_page_id_input" onBlur={(e) => setInputID(e.currentTarget.value)}/>
      </div>

      <div className="login_page_input_container">
        <div className="login_page_id_text">PW</div>
        <input className="login_page_id_input" type="password" onBlur={(e) => setInputPW(e.currentTarget.value)}/>
      </div>

      <Button className="login_page_sign_in_button" component={Link} to="/main" variant="contained" color="error" sx={{marginLeft: 2}} onClick={(e: any) => handleClickLogin(e)}>SIGN IN</Button>

      {notCorrect ? <div className="login_page_sign_in_error">ID or PW is not correct!</div> : <></>}

    </div>
  );
};