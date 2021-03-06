import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { GrDocumentUpdate, GrUpdate } from "react-icons/gr";
import { useContext } from "react";
import { GlobalState } from "../../../../../ContexGlobal/Global";
import ProfileUpdate from "./ProfileUpdate";

const MyProfile = () => {
  const studentUser = useSelector((state) => state.user);
  const { updateStudentModal } = useContext(GlobalState);
  // const { id } = useParams();

  const [studentDetailGet, setStudentDetailGet] = React.useState({});

  const getTeachers = async () => {
    const mainURL = "";
    const localURL = "http://localhost:2332";
    const url = `${localURL}/api/student/${studentUser._id}`;
    console.log(studentUser._id);

    await axios.get(url).then((res) => {
      setStudentDetailGet(res.data.data);
      console.log(res.data.data);
    }, []);
  };

  React.useEffect(() => {
    getTeachers();
    console.log(studentDetailGet);
  }, []);

  return (
    <>
      <ProfileUpdate />
      <Container>
        <Wrapper>
          <h4>My Profile</h4>
          <button onClick={updateStudentModal}> Update Profile</button>
          <DetailContainer>
            <DetailContainerWrapper>
              <h5>About Me</h5>
              <DetailContainerHold>
                <DetailImageContainer>
                  <img src="/teacher.jpg" alt="" />
                </DetailImageContainer>
                <DetailTextContainer>
                  <TeachersName> {studentDetailGet.fullName} </TeachersName>
                  <TeachersShortDetail>
                    {studentDetailGet.profile}
                  </TeachersShortDetail>

                  <TeacherCredentialsHold>
                    <TitleContent>
                      <Title>Name:</Title>
                      <Content>{studentDetailGet.fullName}</Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>Gender:</Title>
                      <Content> {studentDetailGet.gender} </Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>Diasplay Name:</Title>
                      <Content> {studentDetailGet.displayName} </Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>Religion:</Title>
                      <Content> {studentDetailGet.religion} </Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>E-mail:</Title>
                      <Content> {studentDetailGet.email} </Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>Subject:</Title>
                      <Content> {studentDetailGet.subject} </Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>No Of Classes:</Title>
                      {/* <Content> {teacherDetailGet.class.length} </Content> */}
                    </TitleContent>
                    <TitleContent>
                      <Title>Teacher Code:</Title>
                      <Content> {studentDetailGet.teacherCode} </Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>Home Address:</Title>
                      <Content> {studentDetailGet.address} </Content>
                    </TitleContent>
                    <TitleContent>
                      <Title>Phone Number:</Title>
                      <Content> 0{studentDetailGet.phoneNumber} </Content>
                    </TitleContent>
                  </TeacherCredentialsHold>
                </DetailTextContainer>
              </DetailContainerHold>
            </DetailContainerWrapper>
          </DetailContainer>
        </Wrapper>
      </Container>
    </>
  );
};

export default MyProfile;

const Container = styled.div`
  min-height: calc(100vh - 50px);
  margin-top: 50px;
  background-color: #f0f1f3;
  width: calc(100vw - 180px);
  margin-left: 180px;
  background-color: #f0f1f3;
  display: flex;
  justify-content: center;
  font-family: poppins;

  @media (max-width: 770px) {
    margin-left: 50px;
    width: calc(100vw - 50px);
  }
  @media (max-width: 500px) {
    margin-left: 0;
    width: 100vw;
  }
`;

const Wrapper = styled.div`
  width: 1150px;
  @media (max-width: 1150px) {
    width: 95%;
  }

  button {
    height: 30px;
    width: 150px;
    border: 0;
    outline: none;
    /* background-color: #ffa301; */
    background-color: #031e3e;
    color: #fff;
    font-family: poppins;
    font-weight: 700;
    margin: 0 8px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const DetailContainer = styled.div`
  background-color: #fff;
`;
const DetailContainerWrapper = styled.div`
  margin: 25px;
  h5 {
    padding-top: 20px;
  }
`;
const DetailContainerHold = styled.div`
  display: flex;
`;
const DetailImageContainer = styled.div`
  height: 230px;
  width: 200px;
  background-color: aqua;
  border-radius: 5px;
  margin-right: 60px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;
const DetailTextContainer = styled.div`
  width: 600px;
  /* background-color: red; */
`;
const TeachersName = styled.div`
  font-weight: 700;
  margin-bottom: 15px;
`;
const TeacherCredentialsHold = styled.div``;
const TeachersShortDetail = styled.div`
  font-size: 13px;
`;

const TitleContent = styled.div`
  display: flex;
  /* background-color: aqua; */
  font-size: 12px;
  margin: 20px 0;
`;
const Title = styled.div`
  margin-right: 3px;
  font-weight: 500;
  color: gray;
  width: 130px;
`;
const Content = styled.div``;
