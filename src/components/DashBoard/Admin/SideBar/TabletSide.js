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
import { NavLink } from "react-router-dom";

const TabletSide = () => {
  const [tabDiaplay, setTabDisplay] = useState(true);

  const tabDiaplayHandler = () => {
    setTabDisplay(!tabDiaplay);
  };

  return (
    <div>
      {" "}
      {tabDiaplay ? (
        <TabDisplayContainer>
          <TabDisplayWrapper>
            <TabBar onClick={tabDiaplayHandler}>
              <AiOutlineMenuUnfold />
            </TabBar>
            <NavIconCtrl>
              <MainIconNav to="/" style={{ backgroundColor: "#ffa301" }}>
                <IconNav style={{ color: "#fff" }}>
                  <AiFillDashboard />
                </IconNav>
              </MainIconNav>
              <MainIconNav to="/teachers">
                <IconNav>
                  <GiTeacher />
                </IconNav>
              </MainIconNav>
              <MainIconNav to="/students">
                <IconNav>
                  <IoIosPeople />
                </IconNav>
              </MainIconNav>
              <MainIconNav to="/parents">
                <IconNav>
                  <RiParentLine />
                </IconNav>
              </MainIconNav>
              <MainIconNav to="/account">
                <IconNav>
                  <MdAccountTree />
                </IconNav>
              </MainIconNav>
              <MainIconNav to="/class">
                <IconNav>
                  <SiGoogleclassroom />
                </IconNav>
              </MainIconNav>
              <MainIconNav to="/routine">
                <IconNav>
                  <VscCompassActive />
                </IconNav>
              </MainIconNav>
              <MainIconNav to="/attendance">
                <IconNav>
                  <HiPresentationChartBar />
                </IconNav>
              </MainIconNav>
              <MainIconNav to="/events">
                <IconNav>
                  <BsCalendar2EventFill />
                </IconNav>
              </MainIconNav>
              <MainIconNavOut>
                <IconNav>
                  <FaPowerOff />
                </IconNav>
              </MainIconNavOut>
            </NavIconCtrl>
          </TabDisplayWrapper>
        </TabDisplayContainer>
      ) : (
        <ContainerDisplay>
          <WrapperDiaplay>
            <Bar onClick={tabDiaplayHandler}>
              <AiOutlineMenuFold />
            </Bar>
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
              <MainNav to="/parents">
                <Nav>
                  <IconHold>
                    <RiParentLine />
                  </IconHold>
                  <span>Parents</span>
                </Nav>
              </MainNav>
              <MainNav to="/account">
                <Nav>
                  <IconHold>
                    <MdAccountTree />
                  </IconHold>
                  <span>Account</span>
                </Nav>
              </MainNav>
              <MainNav to="/class">
                <Nav>
                  <IconHold>
                    <SiGoogleclassroom />
                  </IconHold>
                  <span>Class</span>
                </Nav>
              </MainNav>
              <MainNav to="/routine">
                <Nav>
                  <IconHold>
                    <VscCompassActive />
                  </IconHold>
                  <span>Class Routine</span>
                </Nav>
              </MainNav>
              <MainNav to="/attendance">
                <Nav>
                  <IconHold>
                    <HiPresentationChartBar />
                  </IconHold>
                  <span>Expenses</span>
                </Nav>
              </MainNav>
              <MainNav to="/events">
                <Nav>
                  <IconHold>
                    <BsCalendar2EventFill />
                  </IconHold>
                  <span>Events</span>
                </Nav>
              </MainNav>
              <MainNavOut>
                <Nav>
                  <IconHold>
                    <FaPowerOff />
                  </IconHold>
                  <span>Log Out</span>
                </Nav>
              </MainNavOut>
            </NavsCtrl>
          </WrapperDiaplay>
        </ContainerDisplay>
      )}
    </div>
  );
};

export default TabletSide;

const TabDisplayContainer = styled.div`
  display: none;
  @media (max-width: 770px) {
    display: block;
    margin-top: 50px;
    min-height: calc(100vh - 50px);
    /* background-color: hotpink; */
    background-color: #031e3e;
    width: 50px;
    position: fixed;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

const TabDisplayWrapper = styled.div``;
const ContainerDisplay = styled.div`
  display: none;
  @media (max-width: 770px) {
    display: block;
    margin-top: 50px;
    min-height: calc(100vh - 50px);
    /* background-color: gold; */
    background-color: #031e3e;
    width: 180px;
    position: fixed;
    font-family: poppins;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;
const WrapperDiaplay = styled.div``;

const TabBar = styled.div`
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

const NavIconCtrl = styled.div``;
const MainIconNav = styled(NavLink)`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainIconNavOut = styled.div`
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
`;

const MainNavOut = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
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
