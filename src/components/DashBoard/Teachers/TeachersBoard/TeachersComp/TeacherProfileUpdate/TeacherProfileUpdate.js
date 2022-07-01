import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { GrDocumentUpdate, GrUpdate } from "react-icons/gr";

const TeacherProfileUpdate = () => {
  const adminUser = useSelector((state) => state.user);

  const [teacherDetail, setTeacherDetail] = React.useState([]);

  const getTeachers = async () => {
    const mainURL = "";
    const localURL = "http://localhost:2332";
    const url = `${localURL}/api/admin/${adminUser._id}/teachers/get`;

    await axios.get(url).then((res) => {
      setTeacherDetail(res.data.data.teacher);
      console.log(res.data.data.teacher);
    }, []);
  };

  React.useEffect(() => {
    getTeachers();
    console.log(teacherDetail);
  }, []);
  return (
    <Container>
      <Wrapper>
        <h4>TeacherDetail</h4>
        <button> Update Profile</button>
        <DetailContainer>
          <DetailContainerWrapper>
            <h5>About Me</h5>
            <DetailContainerHold>
              <DetailImageContainer>
                <img src="/teacher.jpg" alt="" />
              </DetailImageContainer>
              <DetailTextContainer>
                <TeachersName>Steven Johnson</TeachersName>
                <TeachersShortDetail>
                  Aliquam erat volutpat. Curabiene natis massa sedde lacu
                  stiquen sodale word moun taiery.Aliquam erat volutpaturabiene
                  natis massa sedde sodale word moun taiery.
                </TeachersShortDetail>

                <TeacherCredentialsHold>
                  <TitleContent>
                    <Title>Name:</Title>
                    <Content>Steven Johnson</Content>
                  </TitleContent>
                  <TitleContent>
                    <Title>Gender:</Title>
                    <Content>Steven Johnson</Content>
                  </TitleContent>
                  <TitleContent>
                    <Title>Diasplay Name:</Title>
                    <Content>Steven Johnson</Content>
                  </TitleContent>
                  <TitleContent>
                    <Title>Father's Name:</Title>
                    <Content>Steven Johnson</Content>
                  </TitleContent>
                  <TitleContent>
                    <Title>Mother's Name:</Title>
                    <Content>Steven Johnson</Content>
                  </TitleContent>
                  <TitleContent>
                    <Title>Religion:</Title>
                    <Content>Steven Johnson</Content>
                  </TitleContent>
                  <TitleContent>
                    <Title>E-mail:</Title>
                    <Content>Steven Johnson</Content>
                  </TitleContent>
                  <TitleContent>
                    <Title>Subject:</Title>
                    <Content>Steven Johnson</Content>
                  </TitleContent>
                  <TitleContent>
                    <Title>No Of Classes:</Title>
                    <Content>Steven Johnson</Content>
                  </TitleContent>
                  <TitleContent>
                    <Title>Teacher Code:</Title>
                    <Content>Steven Johnson</Content>
                  </TitleContent>
                  <TitleContent>
                    <Title>Home Address:</Title>
                    <Content>Steven Johnson</Content>
                  </TitleContent>
                  <TitleContent>
                    <Title>Phone Number:</Title>
                    <Content>Steven Johnson</Content>
                  </TitleContent>
                </TeacherCredentialsHold>
              </DetailTextContainer>
            </DetailContainerHold>
          </DetailContainerWrapper>
        </DetailContainer>
      </Wrapper>
    </Container>
  );
};

export default TeacherProfileUpdate;

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
