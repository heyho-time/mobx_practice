// import { Button, IconButton, Rating, Typography } from "@mui/material";
// import TextField from "@mui/material/TextField";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import React, { useState } from "react";
import { useStore } from "../stores/Context";
import { observer } from "mobx-react";

const App2 = observer(() => {
    const [isLogin, setIsLogin] = useState(false);
    
    const onLogin = () => {
        const login = userStore.loginUser(newName, newPassword);
        if (login) {
          setIsLogin(true);
        } else {
          setIsLogin(false);
        }
      };
  return (
      <div>
    {!isLogin ? (
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
    <h1>Todo 로그인</h1>
    <TextField margin="dense"
    label="이름"
    type="text"
    variant="standard"
    value={newName}
    onChange={changeName}
    ></TextField>
    <TextField></TextField>
    <Button>로그인</Button>


    
    </div>
    ): (<></>)
    </div>
  )
});

export default App2;
