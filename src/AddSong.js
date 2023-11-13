import React, { useState } from "react";
import SaveIcon from "@material-ui/icons/Save";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import HistoryIcon from "@material-ui/icons/History";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import AlbumIcon from "@material-ui/icons/Album";
import CloseIcon from "@material-ui/icons/Close";
import { Link, Prompt } from "react-router-dom";
import "./AddSong.css";
import { useFormik, FormikProvider, Form, useField } from "formik";
import * as Yup from "yup";
import { IconButton } from "@material-ui/core";

function AddSong(props) {
  const [title, setTitle] = useState("");
  const [movie, setMovie] = useState("");
  const [duration, setDuration] = useState("");
  const [artist, setArtist] = useState("");

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const TextInputLiveFeedback = ({ ...props }) => {
    const [field, meta] = useField(props);

    const [didFocus, setDidFocus] = useState(false);
    const handleFocus = () => setDidFocus(true);
    const showFeedback =
      (!!didFocus && field.value.trim().length > 2) || meta.touched;

    return (
      <div
        className={`form-control ${
          showFeedback ? (meta.error ? "invalid" : "valid") : ""
        }`}
      >
        <div className="addsong__comment">
          {props.id === "title" ? (
            <MusicNoteIcon style={{ color: "E99497" }} />
          ) : null}
          {props.id === "movie" ? (
            <AlbumIcon style={{ color: "F3C583" }} />
          ) : null}
          {props.id === "duration" ? (
            <HistoryIcon style={{ color: "E8E46E" }} />
          ) : null}
          {props.id === "artist" ? (
            <RecordVoiceOverIcon style={{ color: "B3E283" }} />
          ) : null}
          <input
            {...props}
            {...field}
            aria-describedby={`${props.id}-feedback ${props.id}-help`}
            onFocus={handleFocus}
          />
          {showFeedback ? (
            <div
              id={`${props.id}-feedback`}
              aria-live="polite"
              className="feedback text-sm"
            >
              {meta.error ? meta.error : "✓"}
            </div>
          ) : null}
        </div>
      </div>
    );
  };

  const Example = () => {
    const formik = useFormik({
      initialValues: {
        title: "",
        movie: "",
        duration: "",
        artist: "",
      },
      onSubmit: async ({ title, movie, duration, artist }) => {
        await sleep(500);
        setTitle(title);
        setMovie(movie);
        setDuration(duration);
        setArtist(artist);
        props.addSongHandler({ title, movie, duration, artist });
        setTitle("");
        setMovie("");
        setDuration("");
        setArtist("");
        props.history.push("/list");
      },
      validationSchema: Yup.object({
        title: Yup.string()
          .min(2, "Must be at least 2 characters")
          .max(200, "Must be less  than 200 characters")
          .required("* Required")
          .matches(/^[a-zA-Z0-9]+/, "Cannot contain special characters"),
        movie: Yup.string()
          .min(2, "Must be at least 2 characters")
          .max(500, "Must be less  than 500 characters")
          .required("* Required")
          .matches(/^[a-zA-Z0-9]+/, "Cannot contain special characters"),
        duration: Yup.string()
          .min(3, "Must be at least 3 characters")
          .max(5, "Must be less  than 5 characters")
          .required("* Required")
          .matches(/^[0-9]+:/, "Can only contain number"),
        artist: Yup.string()
          .min(2, "Must be at least 2 characters")
          .max(100, "Must be less  than 100 characters")
          .required("* Required")
          .matches(/^[a-zA-Z0-9]+/, "Cannot contain special characters"),
      }),
    });

    return (
      <FormikProvider value={formik}>
        <Form>
          <TextInputLiveFeedback id="title" name="title" type="text" />
          <TextInputLiveFeedback id="movie" name="movie" type="text" />
          <TextInputLiveFeedback id="duration" name="duration" type="text" />
          <TextInputLiveFeedback id="artist" name="artist" type="text" />
          <div className="addsong__buttons">
            <IconButton type="submit">
              <SaveIcon style={{ color: "89CFF0" }} />
            </IconButton>
            <Link to="/list" style={{ textDecoration: "none" }}>
              <IconButton>
                <CloseIcon style={{ color: "FF7779" }} />
              </IconButton>
            </Link>
          </div>
          <Prompt
            when={
              !!formik.values.title ||
              !!formik.values.movie ||
              !!formik.values.duration ||
              !!formik.values.artist
            }
            message="Do you want to leave without saving data?"
          />
        </Form>
      </FormikProvider>
    );
  };

  return (
    <div className="addsong">
      <div className="addsong__inputContainer">
        <h2>Add Song</h2>
        <Example />
      </div>
    </div>
  );
}

export default AddSong;
