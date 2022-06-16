import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Modal, TextField, Button } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
//react fullcalendar
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useQuery } from "@apollo/client";
import "./calendarcomp.scss";
import CreateEvents from "./CreateEvents";
import { GET_EVENTS_BY_DATE } from "../../schema/events";

export default function CalendarComp() {
  const [open, setOpen] = useState(false);
  const [storageData, setStorageData] = useState([]);
  const [startData, setStartData] = useState();
  const [endData, setEndData] = useState();
  const [values, setValues] = useState({
    title: "",
    description: "",
    chairman: "",
    start: "",
    end: "",
    venue: "",
    date: "",
  });
  //   "create_By": null,
  //   "date": null,
  //   "participants": [

  const { data, error, refetch } = useQuery(GET_EVENTS_BY_DATE, {
    variables: {
      date: "2022-08-06",
    },
  });

  // console.log("data::->", data?.getEventByDate?.data);
  console.log("storageData::->", storageData);

  const eventsByDate = [];

  const handleClose = () => setOpen(false);

  const handleSelect = (info) => {
    setStartData(info.startStr);
    setEndData(info.endStr);
    setOpen(true);
  };

  const handleDelete = () => {
    handleClose();
    setStorageData({
      title: "",
      start: "",
      end: "",
    });
  };

  return (
    <div style={{ width: "100%" }}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        // dayGridWeek', 'timeGridDay', 'listWeek' .
        weekends={true}
        selectable={true}
        select={handleSelect}
        events={[storageData]}
        // events={[
        //   {
        //     title: "event3",
        //     start: "2022-08-06T08:59:00.000Z",
        //     end: "2022-08-06T08:59:00.000Z",
        //     color: "purple",
        //     allDay: false, // will make the time show
        //   },
        // ]}
        // eventBackgroundColor="orange"
        // eventColor="green"
        // eventTextColor="white"
        header={{
          left: "prev,next today",
          center: "test title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
        }}
        eventClick={console.log}
      />
      <CreateEvents
        handleDelete={handleDelete}
        setStorageData={setStorageData}
        storageData={storageData}
        setValues={setValues}
        values={values}
        open={open}
        handleClose={handleClose}
        startData={startData}
        endData={endData}
      />
    </div>
  );
}
