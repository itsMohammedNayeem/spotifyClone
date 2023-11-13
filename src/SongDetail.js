import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Avatar, IconButton } from "@material-ui/core";
import AlbumIcon from "@material-ui/icons/Album";
import HistoryIcon from "@material-ui/icons/History";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./SongDetail.css";

const SongDetail = (props) => {
  const { title, movie, duration, artist } = props.location.state;

  return (
    <div className="songdetail">
      <div className="songdetail__inputContainer">
        {/* <Avatar src="https://www.intelli-tunes.com/ui/kvd/image/Pink360_SongArt.png" /> */}
        <Avatar src="https://image.shutterstock.com/image-vector/vector-vinyl-record-music-icon-260nw-1256215087.jpg" />
        <h3>{title}</h3>
        <div className="songdetail_list">
          <AlbumIcon style={{ color: "F3C583" }} />
          {movie}
          <HistoryIcon style={{ color: "E8E46E" }} />
          {duration}
          <RecordVoiceOverIcon style={{ color: "B3E283" }} />
          {artist}
        </div>
      </div>
      <div className="songdetail__back">
        <Link to="/list" style={{ textDecoration: "none" }}>
          <IconButton>
            <ArrowBackIosIcon />
          </IconButton>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(SongDetail);
