import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
const StyledButton = withStyles({
  root: {
    background: "rgba(25,157,116,1)",
    borderRadius: 3,
    border: 0,
    color: "black",
    height: 40,
    padding: "0 30px"
  },
  label: {
    textTransform: "capitalize"
  }
})(Button);
/**
 * Gives you the standardlayout of PidVid buttons
 * @param onClick Has onClick for the onClick function of the buttons
 * @param text Has text which is used to render the text onto the button.
 */
export function NormalButton(props) {
  return <StyledButton onClick={props.onClick}>{props.text}</StyledButton>;
}
const X = withStyles({
  root: {
    background: "rgba(25,157,116,0)",
    borderRadius: 3,
    border: 0,
    color: "rgba(25,157,116,1)",
    height: 40,
    padding: "0 30px"
  },
  label: {
    textTransform: "capitalize"
  }
})(Button);
/**
 * Gives you the standardlayout of PidVid exit buttons
 * @param onClick Has onClick for the onClick exit function
 */
export function ExitButton(props) {
  return (
    <X variant="outlined" onClick={props.onClick}>
      x
    </X>
  );
}
