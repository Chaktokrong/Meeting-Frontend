import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Modal,
  TextField,
  Button,
  TableContainer,
  Table,
  Autocomplete,
  Switch,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useMutation } from "@apollo/client";
import { useAutocomplete } from "@mui/base/AutocompleteUnstyled";
import "./createevents.scss";
import ListTopic from "./ListTopic";
import { CREATE_EVENTS } from "../../schema/events";
import SelectUsers from "./SelectUsers";

export default function CreateEvents({
  handleDelete,
  values,
  open,
  handleClose,
  setStorageData,
  setValues,
  storageData,
  startData,
  endData,
}) {
  const [allDay, setAllDay] = useState(false);
  const [asignPeople, setAsignPeople] = useState([]);

  const [createEvent, { data, error, loading, refetch }] = useMutation(
    CREATE_EVENTS,
    {
      onCompleted: ({ updateUser }) => {
        console.log(updateUser, "update users");
        // if (updateUser?.success === true) {
        //   setOpenSuccess(true);
        //   setSuccesstMessage(updateUser?.message);
        //   handleClose();
        //   setLoading(true);
        // } else {
        //   setOpenError(true);
        //   setErrorMessage(updateUser?.message);
        // }
      },

      onError: (error) => {
        console.log(error.message, "error message");
      },
    }
  );

  const handleTitle = (e) => {
    setValues({ ...values, title: e.target.value });
  };

  const handleDescription = (e) => {
    setValues({ ...values, description: e.target.value });
  };

  const handleChairman = (e) => {
    setValues({ ...values, chairman: e });
  };

  const handleStart = (e) => {
    setValues({ ...values, start: startData + "T" + e + ":00" });
  };

  const handleEnd = (e) => {
    setValues({ ...values, end: startData + "T" + e + ":00" });
  };

  const handleCheckDay = (e) => {
    setAllDay(e.target.checked);
    setValues({ ...values, allDay: allDay });
  };

  const handleLocation = (e) => {
    setValues({ ...values, venue: e });
  };

  // console.log("values::->", values);

  const handleSubmit = (values) => {
    let removeTitleObj = asignPeople?.map(function (item) {
      delete item.title;
      return item;
    });
    // console.log("asignPeople::->", removeTitleObj);
    createEvent({
      variables: {
        ...values,
        participants: removeTitleObj,
        color: "purple",
      },
    });
    // console.log("values::->", values);
    // setStorageData({
    //   ...values,
    //   color: "purple",
    // });
    handleClose();
  };

  // Buy product
  const [currentItem, setCurrentItem] = useState({
    text: "",
    qty: 0,
    supplies: "",
    key: "",
  });
  const [item, setItem] = useState([]);

  const handleAddMaterail = () => {
    setCurrentItem({
      text: "default",
      qty: 1,
      supplies: "ជ្រើសរើស",
      key: Date.now(),
    });
  };

  React.useMemo(async () => {
    await handleAddMaterail();
    await addItem();
  }, []);

  const addItem = () => {
    const newItem = currentItem;
    if (newItem.text !== "") {
      const items = [...item, newItem];
      setItem([...items]);
      setCurrentItem({ text: "", qty: 0, supplies: "", key: "" });
    }
  };

  React.useEffect(() => {
    if (currentItem?.text !== "") {
      addItem();
    }
  }, [currentItem]);

  const deleteItem = (key) => {
    const filteredItems = item?.filter((t) => t.key !== key);
    setItem(filteredItems);
  };

  const setUpdateText = (text, key) => {
    const items = item;
    items.map((i) => {
      if (i.key === key) {
        console.log(i.key + "  " + key);
        i.text = text;
      }
    });
    setItem([...items]);
  };

  const setUpdateQty = (qty, key) => {
    const items = item;
    items.map((i) => {
      if (i.key === key) {
        console.log(i.key + "  " + key);
        i.qty = qty;
      }
    });
    setItem([...items]);
  };

  const setUpdateSupplies = (supplies, key) => {
    const items = item;
    items.map((i) => {
      if (i.key === key) {
        console.log(i.key + "  " + key);
        i.supplies = supplies;
      }
    });
    setItem([...items]);
  };
  // End Buy product

  const chairmanData = [
    { label: "Lok Lundy" },
    { label: "Vet Sreymoa" },
    { label: "Khlok Thavan" },
    { label: "Meach Manut" },
    { label: "Theang Rathana" },
  ];

  const locationData = [
    { label: "A04" },
    { label: "A05" },
    { label: "A06" },
    { label: "A07" },
    { label: "A08" },
    { label: "A09" },
    { label: "A10" },
  ];

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ flexGrow: 1 }} className="style-modal-add-event">
        <Grid container spacing={2}>
          <Grid
            item
            xs={
              values.start === storageData.start &&
              values.end === storageData.end
                ? 11.5
                : 12
            }
          >
            <Typography className="modal-title-add-events">
              Create Events
            </Typography>
          </Grid>
          <Grid item xs={1.5}>
            <Button
              onClick={handleDelete}
              sx={{
                color: "red",
                display:
                  values.start === storageData.start &&
                  values.end === storageData.end
                    ? "block"
                    : "none",
              }}
            >
              <DeleteForeverIcon />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography>Event name</Typography>
            <TextField
              fullWidth
              size="small"
              placeholder="event name"
              value={
                values.start === storageData.start &&
                values.end === storageData.end
                  ? storageData.title
                  : null
              }
              onChange={(e) => handleTitle(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>Description</Typography>
            <TextField
              fullWidth
              size="small"
              multiline
              rows={3}
              placeholder="Description"
              onChange={(e) => handleDescription(e)}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography>Request to</Typography>
            <Autocomplete
              disablePortal
              onChange={(e, value) => handleChairman(value.label)}
              options={chairmanData}
              renderInput={(params) => <TextField {...params} size="small" />}
            />
          </Grid>

          <Grid item container xs={6}>
            <SelectUsers setAsignPeople={setAsignPeople} />
          </Grid>

          <Grid item xs={3}>
            <Typography>Start time</Typography>
            <TextField
              fullWidth
              size="small"
              placeholder="start time"
              onChange={(e) => handleStart(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <Typography>Due time</Typography>
            <TextField
              fullWidth
              size="small"
              placeholder="due time"
              onChange={(e) => handleEnd(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <Typography>All day?</Typography>
            <Switch
              checked={allDay}
              onChange={handleCheckDay}
              inputProps={{ "aria-label": "controlled" }}
            />
          </Grid>
          <Grid item xs={3}>
            <Typography>Location</Typography>
            <Autocomplete
              // disablePortal
              onChange={(e, value) => handleLocation(value.label)}
              options={locationData}
              renderInput={(params) => <TextField {...params} size="small" />}
            />
          </Grid>
          <Grid item xs={12}>
            <Box className="container">
              <TableContainer>
                <Table className="table" aria-label="simple table">
                  <ListTopic
                    items={item}
                    deleteItem={deleteItem}
                    setUpdateText={setUpdateText}
                    setUpdateQty={setUpdateQty}
                    setUpdateSupplies={setUpdateSupplies}
                  />
                </Table>
              </TableContainer>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Button
              className="add-item"
              color="primary"
              variant="contained"
              onClick={handleAddMaterail}
              fullWidth
            >
              Add topic
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Button
              className="add-item"
              color="primary"
              variant="contained"
              onClick={() => handleSubmit(values)}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}
