import {
    Box,
    Typography,
    useMediaQuery,
    Link,
    Divider,
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
    const isIpad = useMediaQuery("(max-width: 850px)");
    const isMobile = useMediaQuery("(max-width: 700px)");

    return (
        <Box sx={{
          mt: "5rem",
        }}>
          <Typography variant="h4" sx={{
            fontWeight: "bold",
            pt: "1rem",
            pb: "0",
          }}>
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
                "&:hover" : {
                    color: green,
                    cursor: "pointer",
                    textDecoration: "underline",
                },
               }}
            >
                View more on Github  
            </Link>
          <Box sx={{
              display: isIpad ? "block" : "flex",
              gap: "1rem",
              pb: "1rem",
              overflowX: "scroll",
            }}>
              {/* CARD 1 */}
              <Card sx={{
                minWidth: '22rem',
                maxWidth: "24rem",
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
                minWidth: '22rem',
                maxWidth: "24rem",
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
                minWidth: '22rem',
                maxWidth: "24rem",
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
            {/* ROW 2 */}
            <Box sx={{
              display: isIpad ? "block" : "flex",
              gap: "1rem",
              pb: "4rem",
              overflowX: "scroll",
            }}>
            
            {/* CARD 1 */}
            <Card sx={{
              minWidth: '22rem',
              maxWidth: "24rem",
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
                  {projects.leasePaymentCal.name}
                </Typography>
              
                <Typography sx={{
                  color: lightSlate,
                  lineHeight: "1.5",
                  fontSize: "0.95rem",
                  fontWeight: "100",
                  pt: "0.5rem",
                  pb: "3rem",
                }}>
                  {projects.leasePaymentCal.description}
                </Typography>
              
                <FlexBetween sx={{
                  pb: "0",
                }}>
                  {projects.leasePaymentCal.technology.map((value) => (
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
              minWidth: '22rem',
              maxWidth: "24rem",
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
                  {projects.calculator.name}
                </Typography>
              
                <Typography sx={{
                  color: lightSlate,
                  lineHeight: "1.5",
                  fontSize: "0.95rem",
                  fontWeight: "100",
                  pt: "0.5rem",
                  pb: "3rem",
                }}>
                  {projects.calculator.description}
                </Typography>
              
                <FlexBetween sx={{
                  pb: "0",
                }}>
                  {projects.calculator.technology.map((value) => (
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
              minWidth: '22rem',
              maxWidth: "24rem",
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
                  {projects.socialMediaApp.name}
                </Typography>
              
                <Typography sx={{
                  color: lightSlate,
                  lineHeight: "1.5",
                  fontSize: "0.95rem",
                  fontWeight: "100",
                  pt: "0.5rem",
                  pb: "3rem",
                }}>
                  {projects.socialMediaApp.description}
                </Typography>
              
                <FlexBetween sx={{
                  pb: "0",
                }}>
                  {projects.socialMediaApp.technology.map((value) => (
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
          </Box>
    );
};

export default Projects;