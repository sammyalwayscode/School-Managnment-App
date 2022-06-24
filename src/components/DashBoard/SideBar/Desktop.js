import React, { useState } from "react";
import styled from "styled-components";
import {
  AiFillDashboard,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { RiParentLine } from "react-icons/ri";
import { MdAccountTree, MdSubject } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { VscCompassActive } from "react-icons/vsc";
import { HiPresentationChartBar } from "react-icons/hi";
import { BsCalendar2EventFill } from "react-icons/bs";
import { FaPowerOff } from "react-icons/fa";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../ReduxGlobal/Global";

const Desktop = () => {
  const [tabChange, setTabChange] = useState(false);

  const tabChangeHandler = () => {
    setTabChange(!tabChange);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      {tabChange ? (
        <TabContainer>
          <TabWrapper>
            <TabBar onClick={tabChangeHandler}>
              <AiOutlineMenuUnfold />
            </TabBar>
            <NavIconCtrl>
              <MainIconNav style={{ backgroundColor: "#ffa301" }}>
                <IconNav style={{ color: "#fff" }}>
                  <AiFillDashboard />
                </IconNav>
              </MainIconNav>
              <MainIconNav>
                <IconNav>
                  <GiTeacher />
                </IconNav>
              </MainIconNav>
              <MainIconNav>
                <IconNav>
                  <IoIosPeople />
                </IconNav>
              </MainIconNav>
              <MainIconNav>
                <IconNav>
                  <RiParentLine />
                </IconNav>
              </MainIconNav>
              <MainIconNav>
                <IconNav>
                  <MdAccountTree />
                </IconNav>
              </MainIconNav>
              <MainIconNav>
                <IconNav>
                  <SiGoogleclassroom />
                </IconNav>
              </MainIconNav>
              <MainIconNav>
                <IconNav>
                  <MdSubject />
                </IconNav>
              </MainIconNav>
              <MainIconNav>
                <IconNav>
                  <VscCompassActive />
                </IconNav>
              </MainIconNav>
              <MainIconNav>
                <IconNav>
                  <HiPresentationChartBar />
                </IconNav>
              </MainIconNav>
              <MainIconNav>
                <IconNav>
                  <BsCalendar2EventFill />
                </IconNav>
              </MainIconNav>
              <MainIconNav>
                <IconNav>
                  <FaPowerOff />
                </IconNav>
              </MainIconNav>
            </NavIconCtrl>
          </TabWrapper>
        </TabContainer>
      ) : (
        <Container>
          <Wrapper>
            {/* <Bar onClick={tabChangeHandler}>
              <AiOutlineMenuFold />
            </Bar> */}
            <NavsCtrl>
              <MainNav to="/" style={{ backgroundColor: " #ffa301" }}>
                <Nav>
                  <IconHold style={{ color: "#fff" }}>
                    <AiFillDashboard />
                  </IconHold>
                  <span>Dashboard</span>
                </Nav>
              </MainNav>
              <MainNav to="/teachers">
                <Nav>
                  <IconHold>
                    <GiTeacher />
                  </IconHold>
                  <span>Teachers</span>
                </Nav>
              </MainNav>
              <MainNav to="/students">
                <Nav>
                  <IconHold>
                    <IoIosPeople />
                  </IconHold>
                  <span>Students</span>
                </Nav>
              </MainNav>
              <MainNav to="parents">
                <Nav>
                  <IconHold>
                    <RiParentLine />
                  </IconHold>
                  <span>Parents</span>
                </Nav>
              </MainNav>
              <MainNav to="account">
                <Nav>
                  <IconHold>
                    <MdAccountTree />
                  </IconHold>
                  <span>Account</span>
                </Nav>
              </MainNav>
              <MainNav to="class">
                <Nav>
                  <IconHold>
                    <SiGoogleclassroom />
                  </IconHold>
                  <span>Class</span>
                </Nav>
              </MainNav>
              <MainNav to="subject">
                <Nav>
                  <IconHold>
                    <MdSubject />
                  </IconHold>
                  <span>Subjects</span>
                </Nav>
              </MainNav>
              <MainNav to="routine">
                <Nav>
                  <IconHold>
                    <VscCompassActive />
                  </IconHold>
                  <span>Class Routine</span>
                </Nav>
              </MainNav>
              <MainNav to="attendance">
                <Nav>
                  <IconHold>
                    <HiPresentationChartBar />
                  </IconHold>
                  <span>Attendance</span>
                </Nav>
              </MainNav>
              <MainNav to="events">
                <Nav>
                  <IconHold>
                    <BsCalendar2EventFill />
                  </IconHold>
                  <span>Events</span>
                </Nav>
              </MainNav>
              <MainNav to="/">
                <Nav
                // onClick={() => {
                //   dispatch(logOut());
                //   // navigate("/home");
                // }}
                >
                  <IconHold>
                    <FaPowerOff />
                  </IconHold>
                  <span>Log Out</span>
                </Nav>
              </MainNav>
            </NavsCtrl>
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default Desktop;

const Container = styled.div`
  margin-top: 50px;
  min-height: calc(100vh - 50px);
  background-color: #031e3e;
  width: 180px;
  font-family: poppins;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Wrapper = styled.div``;

const TabContainer = styled.div`
  margin-top: 50px;
  min-height: calc(100vh - 50px);
  background-color: #031e3e;
  width: 50px;
  @media (max-width: 770px) {
    display: none;
  }
`;
const TabWrapper = styled.div``;

const TabBar = styled.div`
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

const NavIconCtrl = styled.div``;
const MainIconNav = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconNav = styled.div`
  font-size: 20px;
  color: #ffa301;
`;

const Bar = styled.div`
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
`;

const NavsCtrl = styled.div``;
const MainNav = styled(NavLink)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  /* border-top: 1px solid gray; */
  /* border-bottom: 1px solid gray; */
  cursor: pointer;

  /* &.active{
    background-color: #ffa301;
  } */
`;

const IconHold = styled.section`
  color: #ffa301;
`;

const Nav = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  span {
    font-size: x-small;
    font-weight: 400;
    margin-left: 5px;
    color: #fff;
  }
`;
