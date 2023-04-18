import { 
    Box,
    Typography,
    Button,
    Divider,
} from "@mui/material";
import { themeSettings } from "../../theme";
import { attributes } from "../../pageAttributes";
import SendIcon from '@mui/icons-material/Send';
import useMediaQuery from '@mui/material/useMediaQuery';

const Contact = () => {
    const theme = themeSettings;
    const darKnavy = theme.palette.primary.darkNavy;
    const navy = theme.palette.primary.navy;
    const lightnavy = theme.palette.primary.lightNavy;
    const slate = theme.palette.primary.slate;
    const lightSlate = theme.palette.primary.lightSlate;
    const white = theme.palette.primary.white;
    const green = theme.palette.primary.green;

    const isNonMobile = useMediaQuery("(min-width: 1000px)");

    return (
        <Box id={attributes.contact} sx={{
            background: darKnavy,
            textAlign: "center",
            mt: "7rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Box>
              <Typography variant="h3" sx={{
                  fontWeight: "bolder",
                  mb: "1rem",
              }}>
                  Get In Touch.
              </Typography>
              </Box>
            <Box sx={{
                width: isNonMobile ? "50%" : null,
            }}>
              <Typography sx={{
                  pb: "1.5rem",
                  textAlign: "center",
              }}>
                  I am currently seeking an Entry-level or Apprenticeship role. Feel free to email me below.
              </Typography>
            </Box>
            <Box>
              <Button 
                variant="outlined"
                size="large"
                padding="1rem 2.5rem"
                href="mailto:Johnson.absolu@outlook.com"
                target="_new"
                sx={{
                  color: green,
                  textTransform: "none",
                  mt: "1rem",
                  fontSize: "1.1rem",
                  fontWeight: "300",
                }}>
                  Send email
                  <SendIcon sx={{
                    ml: "0.7rem",
                    p: "0.5rem  0",
                  }}/>
              </Button>
            </Box>
        </Box>
    );
};

export default Contact;