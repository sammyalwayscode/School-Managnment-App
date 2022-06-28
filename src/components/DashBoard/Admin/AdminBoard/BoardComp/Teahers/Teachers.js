import * as React from "react";
import styledComponents from "styled-components";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useContext } from "react";
import { GlobalState } from "../../../../../ContexGlobal/Global";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Teacher = () => {
  const { stuModalSwitch } = useContext(GlobalState);
  const { classID } = useParams();

  const [allTeachers, setAllTeachers] = React.useState([]);
  // const user = useSelector((state) => state.user);

  console.log(classID);

  const getTeachers = async () => {
    const mainURL = "";
    const localURL = "http://localhost:2332";
    const url = `${localURL}/api/teacher`;

    await axios.get(url).then((res) => {
      setAllTeachers(res.data.data);
      console.log(res.data.data);
    }, []);
  };

  React.useEffect(() => {
    getTeachers();
    // console.log(students);
  }, []);

  return (
    <>
      <Container>
        <Wrapper>
          <h3>All Teachers</h3>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Teacher Name</StyledTableCell>
                  <StyledTableCell align="right">Teacher Code</StyledTableCell>
                  <StyledTableCell align="right">Email</StyledTableCell>
                  <StyledTableCell align="right">Classes</StyledTableCell>
                  <StyledTableCell align="right">Phone Number</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allTeachers.map((row) => (
                  <StyledTableRow key={row._id}>
                    <StyledTableCell component="th" scope="row">
                      {row.fullName}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.teacherCode}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.email}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.class.length}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      0{row.phoneNumber}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Wrapper>
      </Container>
    </>
  );
};

export default Teacher;

const Container = styledComponents.div`
  min-height: calc(100vh - 50px);
  margin-top: 50px;
  background-color: #f0f1f3;
  width: calc(100vw - 180px);
  margin-left: 180px;
  background-color: #f0f1f3;
  display: flex;
  justify-content: center;
  font-family: poppins;
  position: absolute;
  z-index: 200;

  @media (max-width: 770px) {
    margin-left: 50px;
    width: calc(100vw - 50px);
  }
  @media (max-width: 500px) {
    margin-left: 0;
    width: 100vw;
  }
`;
const Wrapper = styledComponents.div`
width: 1150px;
@media (max-width: 1150px) {
  width: 95%;
}
`;

const DisplayBtnHold = styledComponents.div`
display: flex;
justify-content: space-between;
align-items: center;

button{
  height: 30px;
  width: 110px;
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
}
`;
