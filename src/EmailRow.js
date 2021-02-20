import React from "react";
import { LabelImportantOutlined, StarBorderOutlined } from "@material-ui/icons";
import { Checkbox, Button } from "@material-ui/core";
import "./EmailRow.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";

function EmailRow({ title, id, subject, description, time }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const openMail = () => {
    dispatch(selectMail({ id, title, subject, description, time }));

    history.push("/mail");
  };
  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <Button>
          <StarBorderOutlined />
        </Button>
        <Checkbox />
        <Button>
          <LabelImportantOutlined />
        </Button>
      </div>
      <div className="emailRow__title">{title}</div>
      <div className="emailRow__message">
        <h4>
          {subject}{" "}
          <span className="emailRow__description">- {description}</span>
        </h4>
      </div>
      <p className="emailRow__time">{time}</p>
    </div>
  );
}

export default EmailRow;
