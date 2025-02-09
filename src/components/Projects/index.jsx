import { Box, Typography, useMediaQuery, Link } from "@mui/material";
import { themeSettings } from "../../theme";
import { attributes } from "../../pageAttributes";
import ProjectCards from "./projects";

const Projects = () => {
  const green = themeSettings.palette.primary.green;

  const isMobile = useMediaQuery("(max-width: 700px)");

  return (
    <Box sx={{ mt: "5rem", textAlign: "left" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: isMobile ? "space-between" : "start",
          alignItems: "end",
          gap: isMobile ? "" : "0.8rem",
          padding: isMobile ? "0 0.85rem" : "" ,
          mb: "1rem",
        }}
      >
        <Typography
          variant={ isMobile ? "h6" : "h5" }
          id={attributes.projects}
          sx={{
            fontWeight: "500",
            pt: "0.5rem",
          }}
        >
          My Projects
        </Typography>
        <Link
          variant="a"
          href="https://github.com/JAbsolu"
          color={green}
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          sx={{
            fontSize: "0.75rem",
            fontWeight: "200",
            padding: "0",
            margin: "0",
            "&:hover": {
              color: green,
              cursor: "pointer",
              textDecoration: "underline",
            },
          }}
        >
          View more on Github
        </Link>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          pb: "2rem",
          // flexWrap: "wrap",
          overflow: "auto",
          justifyContent: isMobile ? "center" : null,
          alignItems: "center",
        }}
      >
        {/* CARDs */}
        <ProjectCards />
      </Box>
      <Typography sx={{ textAlign: "start", fontSize: "0.8rem", pl: "0.5rem", mt:"-1.4rem", color: green}}>Scroll right</Typography>
    </Box>
  );
};

export default Projects;
