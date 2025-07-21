import { Typography, Link, Box } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FlexBetween from "../flexBetween";
import { themeSettings } from "../../theme";
import { projects } from "../../resources";

const ProjectCards = () => {
  const green = themeSettings.palette.primary.green;
  const navy = themeSettings.palette.primary.navy;
  const lightSlate = themeSettings.palette.primary.lightSlate;
  
  return (
    <Box sx={{ display: "flex", gap: "1rem", }}>
      {projects.length > 0  && projects.map((project) => {
        const name = project.name;
        const frontend = project.frontendView;
        const github = project.github;
        const technologies = project.technology;
        const description = project.description;

        return (
          <Link href={frontend} underline="none" target="_new">
          <Card
            sx={{
              minWidth: "28rem",
              minHeight: "16rem",
              maxHeight: "17rem",
              background: navy,
              borderRadius: "5px",
              mt: "5px",
            }}
          >
            <CardContent
              sx={{
                p: "2rem",
              }}
            >
              <FlexBetween>
                <Link href={github} target="_new">
                  <GitHubIcon
                    sx={{
                      color: lightSlate,
                      fontSize: "2rem",
                      "&:hover": {
                        color: green,
                        cursor: "pointer",
                      },
                    }}
                  />
                </Link>
                <LaunchIcon
                  sx={{
                    color: lightSlate,
                    fontSize: "2rem",
                    "&:hover": {
                      color: green,
                      cursor: "pointer",
                    },
                  }}
                />
              </FlexBetween>

              <Typography
                variant="h7"
                sx={{
                  color: green,
                  pt: "2rem",
                  pd: "0.5rem",
                }}
              >
                {name}
              </Typography>

              <Typography
                sx={{
                  color: lightSlate,
                  lineHeight: "1.5",
                  fontSize: "0.9rem",
                  fontWeight: "100",
                  pt: "0.5rem",
                  pb: "2rem",
                }}
              >
                {description}
              </Typography>

              <FlexBetween sx={{ pb: "0" }} >
                {technologies.map((value) => (
                  <Typography key={value} sx={{
                      color: lightSlate,
                      fontWeight: "200",
                      fontSize: "0.85rem",
                    }}
                  >
                    {value}
                  </Typography>
                ))}
              </FlexBetween>
            </CardContent>
          </Card>
        </Link>
        )
      })}
    </Box>
  )
};

export default ProjectCards;
