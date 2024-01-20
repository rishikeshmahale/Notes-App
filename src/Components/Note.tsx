import React from "react";
import { NoteObject } from "../models/note";
import {
  Card,
  CardContent,
  Box,
  Typography,
  Button,
  styled,
} from "@mui/material";

const StyledCard = styled(Card)`
  width: 400px;
  margin: 20px;
`;
const Wrapper = styled(Box)`
  & > button {
    border: 1px solid #000;
    background-color: #fff;
    margin-top: 5px;
  }
`;

interface INoteProps {
  note: NoteObject;
  deleteNote: (id: number) => void;
}

const Note: React.FC<INoteProps> = ({
  note: { title, details, color, date, id },
  deleteNote
}) => {
  return (
    <>
      <StyledCard style={{ backgroundColor: color }}>
        <CardContent>
          <Wrapper>
            <Typography>{title}</Typography>
            <Typography>{details}</Typography>
            <Typography>{date}</Typography>
            <Button variant={"outlined"} onClick={() => deleteNote(id)}>Delete</Button>
          </Wrapper>
        </CardContent>
      </StyledCard>
    </> 
  );
};

export default Note;
