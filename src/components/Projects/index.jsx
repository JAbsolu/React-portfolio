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
          alignItems: "end",
          gap: "5px",
          mb: "2rem",
        }}
      >
        <Typography
          variant="h4"
          id={attributes.projects}
          sx={{
            fontWeight: "bold",
            pt: "1rem",
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
          flexWrap: "wrap",
          justifyContent: isMobile ? "center" : null,
          alignItems: "center",
        }}
      >
        {/* CARD 1 */}
        <ProjectCards />
      </Box>
    </Box>
  );
};

export default Projects;
