import {useState} from 'react';
import { Box, Stack ,createTheme,ThemeProvider} from '@mui/material';
import Feed from './components/Feed';
import RightBar from './components/RightBar';
import SideBar from './components/SideBar';
import Add from "./components/Add";
import NavBar from './components/NavBar';
function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <NavBar color={"text.primary"}/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
    <SideBar setMode={setMode} mode={mode}/>
    <Feed/>
    <RightBar/>
    </Stack>
    </Box>
    <Add />
    </ThemeProvider>
  );
}

export default App;
// import Sidebar from "./components/Sidebar";
// import Feed from "./components/Feed";
// import Rightbar from "./components/Rightbar";
// import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
// import Navbar from "./components/Navbar";
// import Add from "./components/Add";
// import { useState } from "react";

// function App() {
//   const [mode, setMode] = useState("light");

//   const darkTheme = createTheme({
//     palette: {
//       mode: mode,
//     },
//   });
//   return (
//     <ThemeProvider theme={darkTheme}>
//       <Box bgcolor={"background.default"} color={"text.primary"}>
//         <Navbar />
//         <Stack direction="row" spacing={2} justifyContent="space-between">
//         <Sidebar setMode={setMode} mode={mode}/>
//           <Feed />
//           <Rightbar />
//         </Stack>
//         
//       </Box>
//     </ThemeProvider>
//   );
// }

// export default App;