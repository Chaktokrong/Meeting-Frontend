import React from "react";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import {
  Typography,
  Paper,
  TableBody,
  TableCell,
  TableRow,
  TextField,
} from "@mui/material";
import "./listtopic.scss";

function ListTopic(props) {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <TableBody
        key={item.key}
        component={Paper}
        className="body-list-materiales"
      >
        <TableRow className="body-row">
          <TableCell
            className="body-title"
            component="th"
            scope="row"
            width="100%"
          >
            <Typography>Add topic</Typography>
            <TextField fullWidth placeholder="add topic" size="small" />
          </TableCell>
          <TableCell className="body-title">
            <DeleteRoundedIcon
              onClick={() => {
                props.deleteItem(item.key);
              }}
              sx={{ color: "red", marginBottom: "-20px", cursor: "pointer" }}
            />
          </TableCell>
        </TableRow>
      </TableBody>
    );
  });
  return listItems;
}

export default ListTopic;
