import React, { useState } from "react";
import { InputBase, Box, Button, styled, Typography } from "@mui/material";
import { NoteObject } from "../models/note";
import { v4 as uuid } from "uuid";
import { DETAILS_LIMIT, TITLE_LIMIT } from "../Constants/Constants";

const Container = styled(Box)`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 10px 10px;
  padding: 10px 10px;

  & > div > input[type="text"] {
    border-bottom: 1px solid #111111;
    opacity: 0.4;
    width: 300px;
  }

  & > div > input[type="color"] {
    width: 40px;
    height: 30px;
  }

  & > span {
    font-size: 15px;
    position: relative;
    top: 0;
    right: 40px;
  }
`;

const Error = styled(Typography)`
  background-color: red;
  color: white;
  padding: 10px;
  width: 50%;
`;

const defaultObj = {
  id: 0,
  title: "",
  details: "",
  color: "",
  date: new Date().toLocaleString().toString(),
};

// props interface
interface ICreateNoteProps {
  addNotes: (note: NoteObject) => void;
}

const CreateNote: React.FC<ICreateNoteProps> = ({ addNotes }) => {
  const [note, setNote] = useState<NoteObject>(defaultObj);
  const [error, setError] = useState<string>("");

  const onValueChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setError("");
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const onCreateNote = () => {
    console.log("created");
    if (!note.title && !note.details) {
      console.log("Error");
      setError("All Fields are Mandatory");
    }
    addNotes({ ...note, id: uuid });
    setNote(defaultObj);
  };

  return (
    <>
      <Container>
        <InputBase
          type="text"
          placeholder="title"
          onChange={(e) => onValueChange(e)}
          name="title"
          value={note.title}
          inputProps={{
            maxLength : TITLE_LIMIT
          }}
        />

        <Box component="span">{note.title.length}/{TITLE_LIMIT }</Box>
 
        <InputBase
          type="text"
          placeholder="Details"
          onChange={(e) => onValueChange(e)}
          name="details"
          value={note.details}
          inputProps={{
            maxLength : DETAILS_LIMIT
          }}
        />

        <Box component="span">{note.details.length}/{DETAILS_LIMIT }</Box>

        <InputBase
          type="color"
          placeholder="Choose Color"
          defaultValue={"#f5f5f5"}
          onChange={(e) => onValueChange(e)}
          name="color"
        />

        <Button variant="outlined" onClick={() => onCreateNote()}>
          Create
        </Button>
      </Container>
      {error && <Error>{error}</Error>}
    </>
  );
};

export default CreateNote;
