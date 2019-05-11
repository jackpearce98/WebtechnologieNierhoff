import React from "react";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";

const styles = {
  root: {
    flexGrow: 1
  },
  MuiAppBar: {
    "background-color": "rgba(25,157,116,1)"
  },
  grow: {
    flexGrow: 1,
    background: "rgba(25,157,116,1)"
  },
  menuButton: {
    marginLeft: -12,
    background: "rgba(25,157,116,1)",
    marginRight: 20
  }
};
export class Search extends React.Component {
  state = {
    search: ""
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    return (
      <div id="search">
        <FormControl fullWidth="true" margin="none">
          <Input
            placeholder="  Search..."
            onChange={this.updateSearch}
            fullWidth="true"
          />
        </FormControl>
      </div>
    );
  }
}
