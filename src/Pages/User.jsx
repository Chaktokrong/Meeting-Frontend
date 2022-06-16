import {
  Box,
  Button,
  Modal,
  Stack,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  TablePagination,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import "./user.scss";
//component
import ModalUserAdd from "../Component/User/ModalUserAdd";
import ViewUser from "../Component/User/ViewUser";
import SearchIcon from "@mui/icons-material/Search";
import UserAction from "../Component/User/UserAction";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Profile from "../Component/Menu/Profile";
import { useQuery } from "@apollo/client";

// use for get
import { GET_USERS_WITH_PAGINATION } from "../schema/users";

function createData(pro, name, calories, fat, carbs, protein) {
  return { pro, name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "https://netstorage-kami.akamaized.net/images/d59ebba90022b7f8.jpg",
    "ធៀង​ រតនា",
    "ប្រុស",
    "អ្នកគ្រប់គ្រងការិយាល័យព័ត៌មានវិទ្យា និង ទីផ្សារ",
    "rathana@gmail.com"
  ),
  createData(
    "https://channel-korea.com/wp-content/uploads/2017/09/song-joong-ki3.png",
    "​ភន់ ប្រុស​ភឹម",
    "ប្រុស",
    "អ្នកអភិវឌ្ឍកម្មវិធី",
    "poem@gmail.com"
  ),
  createData(
    "https://images.saymedia-content.com/.image/t_share/MTc2MjQ0MTY2ODcwMzEyMzYx/top-10-cutest-korean-drama-actresses-ever.jpg",
    "មៀច ភារម្យ",
    "ស្រី",
    "អ្នកអភិវឌ្ឍកម្មវិធី",
    "phearom@gmail.com"
  ),
  createData(
    "https://image.kpopmap.com/2020/07/Yoo-JungWoo-js-pictures.jpg",
    "ឆើញ ស៊ីប៉ូ",
    "ប្រុស",
    "អ្នកអភិវឌ្ឍកម្មវិធី",
    "sipou@gmail.com"
  ),
];

export default function User() {
  // open btn create Member
  const [open, setOpen] = React.useState(false);

  // Open Function
  const handleOpen = () => setOpen(true);

  // Button close
  const handleClose = () => setOpen(false);

  //view
  // const [openView, setOpenView] = React.useState(false);
  // const handleOpenView = () => setOpenView(true);
  // const handleCloseView = () => setOpenView(false);

  // state default
  const [page, setPage] = useState(0);
  const [keyword, setKeyword] = useState("");

  // arrow page
  const [rowsPerPage, setRowsPerPage] = useState(5);
  // functions arrow btn
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(+event.target.value));
    setPage(0);
  };

  // for get value to display in UI feild
  // rows store one bt one of value
  const [rows, setRows] = useState([]);

  function createData(
    _id,
    user_name,
    image_name,
    image_src,
    mail,
    position,
    status
  ) {
    return { _id, user_name, image_name, image_src, mail, position, status };
  }

  // create functoin which get from { users.js }
  // GET_USERS_WITH_PAGINATION we get this name from user.js file
  const { data, loading, refetch } = useQuery(GET_USERS_WITH_PAGINATION, {
    // get data from gql
    variables: {
      page: page, // "page" get from state default
      limit: rowsPerPage,
      keyword: keyword,
    },
  });

  // create for send value to UI field
  useEffect(() => {
    if (data) {
      let rows = [];
      data?.getUsersWithPagination?.users?.map((element) => {
        let allRow = createData(
          element?._id,
          element?.user_name,
          element?.image_name,
          element?.image_src,
          element?.mail,
          element?.position,
          element?.status
        );
        rows.push(allRow); // all row will get value from rows
        setRows([...rows]); // ..rows will give value to setRows
      });
    }
  }, [data]); // [data] is dependentcies

  return (
    <div className="user-page">
      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <Stack direction="column" justifyContent="center">
          <Box className="slash" />
        </Stack>
        <Stack direction="column" justifyContent="center">
          <Typography className="color"> Users Controll </Typography>
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
              placeholder="Search memeber"
              size="small"
              // variant="standard"
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
        {/* Button create  */}
        <Stack
          direction="row"
          className="stack-btn"
          justifyContent="right"
          spacing={1}
        >
          <Button
            onClick={handleOpen}
            startIcon={<PersonAddAltIcon />}
            className="btn-add"
          >
            <Typography className="btn-taext"> Create Member </Typography>
          </Button>
          <Modal open={open}>
            {/* onClose={handleClose} */}
            <ModalUserAdd handleClose={handleClose} setRefetch={refetch} />
          </Modal>
        </Stack>
      </Stack>

      <Box className="container">
        <TableContainer>
          <Table className="table" aria-label="simple table">
            <TableHead>
              <TableRow className="header-row">
                <TableCell className="header-title" colSpan={2}>
                  User Name
                </TableCell>
                <TableCell className="header-title">Gender</TableCell>
                <TableCell className="header-title">position</TableCell>
                <TableCell className="header-title">Email</TableCell>
              </TableRow>
            </TableHead>

            {rows
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                // row = all data
                return (
                  <>
                    <TableBody
                      component={Paper}
                      className={index % 2 === 0 ? "body" : "body-odd"}
                    >
                      <TableRow
                        className="body-row"
                        sx={{ borderRadius: "20px" }}
                      >
                        <TableCell
                          // onClick={handleOpenView}
                          className="body-title"
                          component="th"
                          scope="row"
                          width="3%"
                          sx={{ borderRadius: "10px 0px 0px 10px" }}
                        >
                          {<Avatar alt="U" src={row?.image_src} />}
                        </TableCell>

                        <TableCell
                          // onClick={handleOpenView}
                          className="body-title"
                          component="th"
                          scope="row"
                          width="25%"
                        >
                          {row?.user_name}
                        </TableCell>
                        <TableCell
                          // onClick={handleOpenView}
                          className="body-title"
                          width="15%"
                        >
                          {row.image_name}
                        </TableCell>
                        <TableCell
                          // onClick={handleOpenView}
                          className="body-title"
                          width="30%"
                        >
                          {row.position}
                        </TableCell>
                        <TableCell
                          // onClick={handleOpenView}
                          className="body-english"
                          width="30%"
                        >
                          {row.mail}
                        </TableCell>
                        <TableCell
                          className="body-title"
                          align="right"
                          sx={{ borderRadius: "0px 10px  10px 0px" }}
                        >
                          <UserAction row={row} setRefetch={refetch} />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </>
                );
              })}
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>

      {/* <Modal open={openView}>
        <ViewUser handleCloseView={handleCloseView} />
      </Modal> */}
    </div>
  );
}
