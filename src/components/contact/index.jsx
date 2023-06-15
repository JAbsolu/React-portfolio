import { 
    Box,
    Typography,
    Button,
} from "@mui/material";
import { themeSettings } from "../../theme";
import { attributes } from "../../pageAttributes";
import SendIcon from '@mui/icons-material/Send';
import useMediaQuery from '@mui/material/useMediaQuery';
import { WebsiteTexts } from "../../assets";

const Contact = () => {
    const theme = themeSettings;
    const darKnavy = theme.palette.primary.darkNavy;
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
                  fontWeight: "200",
              }}>
                  {/* CONTACT MESSAGE */}
                  {WebsiteTexts.Status_not_searching}
              </Typography>
            </Box>
            <Box id={attributes.contact}>
              <Button 
                variant="outlined"
                size="large"
                href="mailto:Johnson.absolu@outlook.com"
                target="_new"
                sx={{
                  color: green,
                  textTransform: "none",
                  mt: "1rem",
                  fontWeight: "200",
                }}>
                  Send email
                  <SendIcon sx={{
                    ml: "0.7rem",
                  }}/>
              </Button>
            </Box>
        </Box>
    );
};

export default Contact;