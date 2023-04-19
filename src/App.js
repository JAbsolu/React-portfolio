import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box } from '@mui/material';
import Home from './views/home';
import Nav from './components/nav';
import { themeSettings } from './theme';

function App() {
  const darkNavy = themeSettings.palette.primary.darkNavy;
  const lightSlate = themeSettings.palette.primary.lightSlate;
  const themeFont = themeSettings.typography.fontFamily;
  return (
    <Box 
      className="app" 
      sx={{ 
        background: darkNavy,
        fontFamily: themeFont,
        color: lightSlate,
        lineHeight: "2",
      }}
    >
        <Home />
    </Box>
  );
}

export default App;
