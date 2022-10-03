import React from "react";

export default function Link(props) {
  return (
    <a href={props.url} target="_blank" title={props.title} rel="noreferrer">
      {props.link}
    </a>
  );
}
