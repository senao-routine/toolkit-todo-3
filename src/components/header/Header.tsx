import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Button } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import styles from "./Header.module.scss";
import * as H from "history";
import { auth } from "../../firebase";

interface PropTypes {
  history: H.History;
}

const Header: React.FC<PropTypes> = ({ history }) => {
  const handleSignOut = async () => {
    try {
      await auth.signOut();
      history.push("user-auth");
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div className={styles.root}>
      <AppBar position="static" className={styles.app_bar}>
        <Toolbar className={styles.tool_bar}>
          <Typography variant="h6" className={styles.title}>
            Redux Toolkit Todo
          </Typography>
          <Button onClick={handleSignOut}>ログアウト</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
