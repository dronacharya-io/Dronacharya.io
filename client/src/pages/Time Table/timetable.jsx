import React from 'react'
import Pdf_visualiser from '../../components/pdf visualiser/pdf_visualiser'
import TimeTable from "../../components/pdf visualiser/pdfs/Time Table/timtable.pdf"
import { useUserAuth } from "../../context/AuthContext";
import LoginSignUpPopUp from "../../components/PopUps/LoginSignUpPopUp"; 

export const Timetable = () => {
    const pdf = TimeTable;
    const { user } = useUserAuth();
  return (
    <>
      {
        user ? (
          <>
            <Pdf_visualiser title={"Time Table"} file={pdf} />
          </>
        ) : (
          <LoginSignUpPopUp />
        ) 
      }
    </>
  )
}
