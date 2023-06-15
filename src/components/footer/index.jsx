import { 
    Box
} from "@mui/material";
import Link from '@mui/material/Link';
import { user } from "../../assets";
import { themeSettings } from "../../theme";


const Footer = () => {
    const firstName = user.firstName;
    const lastName = user.lastName;
    const green = themeSettings.palette.primary.green;
    const white = themeSettings.palette.primary.white;

    const handleClick = () => {

    }

    return (
        <Box sx={{
            textAlign: "center",
            padding: "2rem 0",
            marginTop: "0.5rem"
        }}>
            <Link
                variant="a"
                href="https://github.com/JAbsolu/React-portfolio"
                color={white} 
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                sx={{
                fontSize: "0.85rem",
                fontWeight: "200",
                "&:hover" : {
                    color: green,
                    cursor: "pointer",
                },
               }}
            >
                Copyright 2023 - Built by {`${firstName} ${lastName}`}
            </Link>
        </Box>
    );
};

export default Footer;