import React from "react";

const search = props => (
  <p>
    <a href={props.url} target="_BLANK">
      {props.title}
    </a>
    <span class="date ng-binding">
      {props.points} points | {props.author} | {props.comments} comments
    </span>
  </p>
);

export default search;
