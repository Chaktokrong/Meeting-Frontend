import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './tableuser.scss';
import Pagination from '@mui/material/Pagination';
import {Stack, Avatar, Typography, Box,  Modal} from '@mui/material';

//Components
import UserAction from './UserAction';
import ViewUser from './ViewUser';

function createData(name, gender, birth, email,  action) {
    return { name, gender, birth, email, action };
}
function TableUser() {
  const [openView, setOpenView] = React.useState(false);
  const handleOpenView = () => setOpenView(true);
  const handleCloseView = () => setOpenView(false);


const rows = [
            createData(1, "Male", "19/May/1998", "david12@gmail.com" ),
            createData(2, "Male", "19/May/1998", "david12@gmail.com" ),
            createData(3, "Male", "19/May/1998", "david12@gmail.com" ),
            ];

    return (
      <>
        <TableContainer className="container-users">
          <Table sx={{ minWidth: 450 }} aria-label="table" className='table-head'>
            <TableHead className='header-row'>
              <TableRow>
                <TableCell className="header-title" width="30%">
                  Name
                </TableCell>
                <TableCell className="header-title" width="10%">
                  Gender
                </TableCell>
                <TableCell className="header-title" width="10%">
                  Date Of Birth
                </TableCell>
                <TableCell className="header-title" width="30%">
                  Email
                </TableCell>
                <TableCell className="header-title" width="5%"></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={row.name}>
                  <TableCell onClick={handleOpenView} component="th" width="5%" >
                     <Stack
                      direction="row"
                      justifyContent="left"
                      spacing={2}
                    > {index+1}- 
                      <Box sx={{flexShrink:1}}/>
                      <Avatar src="static/images/avatar/2.jpg"  />
                      <Typography>David Jonhson</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell onClick={handleOpenView} width="20%">{row.gender}</TableCell>
                  <TableCell onClick={handleOpenView} width="20%">{row.birth}</TableCell>
                  <TableCell onClick={handleOpenView} width="30%">{row.email}</TableCell>

                  <TableCell>
                    <UserAction />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Stack
            direction="row"
            justifyContent="right"
            alignItems="right"
            spacing={2}
            padding={5}
          >
            <Pagination
              component="div"
              count={rows.length}
              variant="outlined"
              shape="rounded"
            />
          </Stack>
        </TableContainer>

        <Modal open={openView} >
            <ViewUser handleCloseView={handleCloseView}/>
        </Modal>
      </>
    );
}

export default TableUser;

