import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import "./calendar.scss";
import CalendarComp from "../Component/Calendar/CalendarComp";

export default function Calendar() {
  return (
    <div className="calendar-page">
      <Stack direction="row" spacing={2}>
        <Box className="slash" />
        <Stack direction="column" justifyContent="center">
          <Typography className="color">Calendar</Typography>
        </Stack>
        <Box sx={{ flexGrow: 1 }} />
      </Stack>
      <Box sx={{ bgcolor: "#fff" }}>
        <CalendarComp />
      </Box>
    </div>
  );
}
