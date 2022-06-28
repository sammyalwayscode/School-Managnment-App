import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Account from "../TeachersComp/Account/Account";
import AddClass from "../TeachersComp/AddClass/AddClass";
import Attendance from "../TeachersComp/Attendance/Attendance";
import Class from "../TeachersComp/Class/Class";
import EachClass from "../TeachersComp/Class/EachClass";
import Events from "../TeachersComp/Events/Events";
import Overview from "../TeachersComp/Overview/Overview";
import Parents from "../TeachersComp/Parents/Parents";
import Routine from "../TeachersComp/Routine/Routine";
import Students from "../TeachersComp/Students/Students";
import Subject from "../TeachersComp/Subject/Subject";
import Teachers from "../TeachersComp/Teahers/Teachers";
import TeachersHold from "../TeachersHold/TeachersHold";

const BoardRoute = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      {user?.status === "teacher" ? (
        <Container>
          <TeachersHold />
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/students" element={<Students />} />
            <Route path="/parents" element={<Parents />} />
            <Route path="/account" element={<Account />} />
            <Route path="/allclass" element={<Class />} />
            <Route path="/classadd" element={<AddClass />} />
            <Route path="/subject" element={<Subject />} />
            <Route path="/routine" element={<Routine />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/events" element={<Events />} />
            <Route path="/allclass/:classID" element={<EachClass />} />
          </Routes>
        </Container>
      ) : null}
    </>
  );
};

export default BoardRoute;

const Container = styled.div`
  display: flex;
  /* background-color: red; */
`;
