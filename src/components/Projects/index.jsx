import {
    Box,
    Typography,
    useMediaQuery,
  } from "@mui/material";
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import LaunchIcon from '@mui/icons-material/Launch';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FlexBetween from "../flexBetween";
import { themeSettings } from "../../theme";
import { projects } from "../../user";


const Projects = () => {
    const green = themeSettings.palette.primary.green;
    const navy = themeSettings.palette.primary.navy;
    const lightSlate = themeSettings.palette.primary.lightSlate;
  
    const isNonMobile = useMediaQuery("(min-width: 1000px)");
    const isMobile = useMediaQuery("(max-width: 700px)");

    return (
        <Box sx={{
            display: isMobile ? "block" : "flex",
            gap: "1rem",
            pb: "5rem",
          }}>
            {/* CARD 1 */}
            <Card sx={{
              minWidth: '18rem',
              maxWidth: "25rem",
              background: navy,
              borderRadius: "5px",
              mt: "1rem",
            }}>
              <CardContent sx={{
                p: "2rem",
              }}>
                <FlexBetween>
                  <FolderOpenIcon sx={{
                    color: lightSlate,
                    fontSize: "1.8rem",
                    "&:hover": {
                      color: green,
                      cursor: "pointer",
                    },
                  }}/>
                  <LaunchIcon sx={{
                    color: lightSlate,
                    fontSize: "1.8rem",
                    "&:hover": {
                      color: green,
                      cursor: "pointer",
                    }
                  }}/>
                </FlexBetween>
  
                <Typography variant="h6" sx={{
                  color: green,
                  pt: "2rem",
                  pd: "0.5rem",
                }}>
                  {projects.todo.name}
                </Typography>
  
                <Typography sx={{
                  color: lightSlate,
                  lineHeight: "1.5",
                  fontSize: "0.95rem",
                  fontWeight: "100",
                  pt: "0.5rem",
                  pb: "3rem",
                }}>
                  {projects.todo.description}
                </Typography>
  
                <FlexBetween sx={{
                  pb: "0",
                }}>
                  {projects.todo.technology.map((value) => (
                    <Typography sx={{
                      color: lightSlate,
                      fontWeight: "200",
                      fontSize: "0.85rem",
                    }}>
                      {value}
                    </Typography>
                  ))}
                </FlexBetween>
              </CardContent>
            </Card>
            {/* CARD 2 */}
            <Card sx={{
              minWidth: '20rem',
              maxWidth: "25rem",
              background: navy,
              borderRadius: "5px",
              mt: "1rem",
            }}>
              <CardContent sx={{
                p: "2rem",
              }}>
                <FlexBetween>
                  <FolderOpenIcon sx={{
                    color: lightSlate,
                    fontSize: "1.8rem",
                    "&:hover": {
                      color: green,
                      cursor: 'pointer',
                    },
                  }}/>
                  <LaunchIcon sx={{
                    color: lightSlate,
                    fontSize: "1.8rem",
                    "&:hover": {
                      color: green,
                      cursor: "pointer",
                    }
                  }}/>
                </FlexBetween>
  
                <Typography variant="h6" sx={{
                  color: green,
                  pt: "2rem",
                  pd: "0.5rem",
                }}>
                  {projects.ecommerceApp.name}
                </Typography>
  
                <Typography sx={{
                  color: lightSlate,
                  lineHeight: "1.5",
                  fontSize: "0.95rem",
                  fontWeight: "100",
                  pt: "0.5rem",
                  pb: "3rem",
                }}>
                  {projects.ecommerceApp.description}
                </Typography>
  
                <FlexBetween sx={{
                  pb: "0",
                }}>
                  {projects.ecommerceApp.technology.map((value) => (
                    <Typography sx={{
                      color: lightSlate,
                      fontWeight: "200",
                      fontSize: "0.85rem",
                    }}>
                      {value}
                    </Typography>
                  ))}
                </FlexBetween>
              </CardContent>
            </Card>
            {/* CARD 3 */}
            <Card sx={{
              minWidth: '20rem',
              maxWidth: "25rem",
              background: navy,
              borderRadius: "5px",
              mt: "1rem",
            }}>
              <CardContent sx={{
                p: "2rem",
              }}>
                <FlexBetween>
                  <FolderOpenIcon sx={{
                    color: lightSlate,
                    fontSize: "1.8rem",
                    "&:hover": {
                      color: green,
                      cursor: 'pointer',
                    },
                  }}/>
                  <LaunchIcon sx={{
                    color: lightSlate,
                    fontSize: "1.8rem",
                    "&:hover": {
                      color: green,
                      cursor: "pointer",
                    }
                  }}/>
                </FlexBetween>
  
                <Typography variant="h6" sx={{
                  color: green,
                  pt: "2rem",
                  pd: "0.5rem",
                }}>
                  {projects.ErApp.name}
                </Typography>
  
                <Typography sx={{
                  color: lightSlate,
                  lineHeight: "1.5",
                  fontSize: "0.95rem",
                  fontWeight: "100",
                  pt: "0.5rem",
                  pb: "3rem",
                }}>
                  {projects.ErApp.description}
                </Typography>
  
                <FlexBetween sx={{
                  pb: "0",
                }}>
                  {projects.ErApp.technology.map((value) => (
                    <Typography sx={{
                      color: lightSlate,
                      fontWeight: "200",
                      fontSize: "0.85rem",
                    }}>
                      {value}
                    </Typography>
                  ))}
                </FlexBetween>
              </CardContent>
            </Card>
          </Box>
    )
};

export default Projects;