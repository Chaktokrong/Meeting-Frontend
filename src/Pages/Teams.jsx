import * as React from "react";
import {
  Box,
  Paper,
  Button,
  Stack,
  IconButton,
  Typography,
  Modal,
  InputAdornment,
  TextField,
} from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "./teams.scss";
import TeamsAction from "../Component/Teams/TeamsAction";
import TeamsAdd from "../Component/Teams/TeamsAdd";
// import ViewSupplies from "../Component/Teams/ViewSupplies";
import SearchIcon from "@mui/icons-material/Search";
//import TruckLoading from "../Assets/truck-loading-gray.svg";
import Profile from "../Component/Menu/Profile";
import Avatar from "@mui/material/Avatar";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { GET_TEAM } from "../schema/team";
import { useQuery } from "@apollo/client";

function createData(pic, name, calories, fat, Email, protein) {
  return { pic, name, calories, fat, Email, protein };
}

const rows = [
  createData(
    "https://dap-news.com/wp-content/uploads/2020/04/312.png",
    "ក្រសួងសុខាភិបាល",
    "លោក​ អ៊ុំ​ ប្រុស",
    "096885599",
    "doungchandara12@gmail.com"
  ),
  createData(
    "https://i.pinimg.com/736x/5b/e3/db/5be3dbfbc1dca5180a8683e150a77f8e.jpg",
    "​អប់រំ យុវជននិង​ ​កីឡា",
    "លោក អ៊ុំ ប្រុស",
    "096885599",
    "doungchandara12@gmail.com"
  ),
  createData(
    "https://www.mpwt.gov.kh/public/uploads/website/image/1534386384.jpg",
    "សាធារណការ​ និងដឹកជញ្ជូន",
    "លោក អ៊ុំ ប្រុស",
    "096885599",
    "doungchandara12@gmail.com"
  ),
];

export default function Supplies() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //view
  const [openView, setOpenView] = React.useState(false);
  const handleOpenView = () => setOpenView(true);
  const handleCloseView = () => setOpenView(false);

  const { data } = useQuery(GET_TEAM, {
    variables: {
      keyword: "",
    },
  });
  console.log(data?.getTeams?.data, "is data");

  return (
    <div className="supplies-page">
      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <Stack direction="column" justifyContent="center">
          <Box className="slash" />
        </Stack>
        <Stack direction="column" justifyContent="center">
          <Typography className="color">TEAM</Typography>
        </Stack>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Profile />
      </Stack>

      <Stack direction="row" spacing={2}>
        <Stack direction="row" spacing={2} className="btn-search">
          <Box className="btn-text-field">
            <TextField
              className="text-field"
              fullWidth
              id="input-with-sx"
              placeholder="Search"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Stack>
        <Box sx={{ flexGrow: 1 }} />
        <Stack
          direction="row"
          className="stack-btn"
          justifyContent="right"
          spacing={1}
        >
          <Button
            onClick={handleOpen}
            //startIcon={<img src={TruckLoading} width="80%" />}
            className="btn-add"
          >
            <Typography className="btn-text">
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <PersonAddAltIcon />
                Create Team
              </Box>
            </Typography>
          </Button>
          <Modal open={open}>
            <TeamsAdd handleClose={handleClose} />
          </Modal>
        </Stack>
      </Stack>

      <Box className="container">
        <TableContainer>
          <Table className="table" aria-label="simple table">
            <TableHead>
              <TableRow className="header-row">
                <TableCell className="header-title">Team</TableCell>
                <TableCell className="header-title"></TableCell>
                <TableCell className="header-title">Leader</TableCell>
                <TableCell className="header-title">Phone Number</TableCell>
                <TableCell className="header-title"> Email</TableCell>
              </TableRow>
            </TableHead>
            {data?.getTeams?.data.map((row, index) => (
              <TableBody
                component={Paper}
                className={index % 2 === 0 ? "body" : "body-odd"}
              >
                <TableRow className="body-row">
                  {/* <TableCell onClick={handleOpenView} className="body-title" component="th" scope="row" width="3%" ></TableCell> */}

                  <TableCell
                    onClick={handleOpenView}
                    className="body-title"
                    component="th"
                    sx={{ borderRadius: "10px 0px 0px 10px" }}
                    scope="row"
                    width="5%"
                  >
                    <Stack direction="row" spacing={2}>
                      <Avatar alt="healty" src={row.pic} />
                    </Stack>
                  </TableCell>

                  <TableCell
                    onClick={handleOpenView}
                    className="body-title"
                    component="th"
                    scope="row"
                    width="25%"
                  >
                    {row.title}
                  </TableCell>
                  <TableCell
                    onClick={handleOpenView}
                    className="body-title"
                    width="25%"
                  >
                    {row.description}
                  </TableCell>
                  <TableCell
                    onClick={handleOpenView}
                    className="body-title"
                    width="25%"
                  >
                    {row.fat}
                  </TableCell>
                  <TableCell
                    onClick={handleOpenView}
                    className="body-title"
                    width="25%"
                  >
                    {row.Email}
                  </TableCell>

                  <TableCell
                    className="body-title"
                    align="right"
                    sx={{ borderRadius: "0px 10px 10px 0px" }}
                  >
                    <TeamsAction />
                  </TableCell>
                </TableRow>
              </TableBody>
            ))}
          </Table>
        </TableContainer>
      </Box>

      {/* <Modal open={openView}>
        <ViewSupplies handleCloseView={handleCloseView} />
      </Modal> */}
    </div>
  );
}
