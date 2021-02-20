import React, { useEffect, useState } from "react";
import { Checkbox, IconButton } from "@material-ui/core";
import {
  ArrowDropDown,
  Redo,
  MoreVert,
  ChevronLeft,
  ChevronRight,
  KeyboardHide,
  Settings,
  Inbox,
  People,
  LocalOffer,
  Email,
} from "@material-ui/icons/";
import Section from "./Section";
import "./EmailList.css";
import EmailRow from "./EmailRow";
import { db } from "./firebase";

function EmailList() {
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon={Inbox} title="Primary" color="red" selected />
        <Section Icon={People} title="Social" color="#1A73E8" />
        <Section Icon={LocalOffer} title="Promotions" color="green" selected />
      </div>
      <div className="emailList__list">
        {emails.map(({ id, data: { to, message, timestamp, subject } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
        <EmailRow
          title="Twitch"
          subject="Whats up people"
          description="First test message"
          time="10pm"
        />
      </div>
    </div>
  );
}

export default EmailList;
