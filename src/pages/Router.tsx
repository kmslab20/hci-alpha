import React from 'react'
import {BrowserRouter, Route, Routes, } from 'react-router-dom'
import {MainFrame} from "./MainFrame/MainFrame";
import {LoginPage} from "./LoginPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainFrame />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router