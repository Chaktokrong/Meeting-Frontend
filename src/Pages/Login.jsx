import * as React from "react";
import { Box , Typography , Stack, TextField, Avatar, Button, InputAdornment } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import './login.scss'; 
import logiImage from "../Assets/logoLogin.svg";
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';


export default function Login() {

  const navigate = useNavigate(); 
  
  return (
    <>      
      <Box className="login-page" >
          <Box className="background-image" />
          <Box className="container">
              <Box className="login-container">
                  <Box className="login">
                      <Box className="box-logo">
                          <Avatar sx={{ width: 100, height: 100 }} variant="square" alt="logo" src={logiImage} /> 
                      </Box>
                      <Box className="box-text" sx={{ mt:1 }} >
                          <Stack direction="column" justifyContent="center" spacing={1}>
                              <Typography className="title" variant="h6" align="center">
                                ប្រព័ន្ធគ្រប់គ្រងសម្ភារៈ
                              </Typography>
                              <Typography className="title" variant="h6" align="center">
                                ហ្គោគ្លូប៊លម៉ាត
                              </Typography>                          
                          </Stack>
                      </Box>  

                      <Box className="box-login" sx={{ mt:3 }} >
                          <Stack direction="column" justifyContent="center" spacing={2}>      
                              <Box className="field-email">
                                <TextField 
                                    placeholder="បញ្ចូលអ៉ីម៉េលរបស់អ្នក"
                                    className="text-field"
                                    size="small"
                                    fullWidth
                                    InputProps={{
                                      startAdornment: (
                                        <InputAdornment position="start">
                                            <EmailIcon className="icon"/>
                                        </InputAdornment>
                                      ),                            
                                    }}
                                /> 
                              </Box>              
                              <Box className="field-email">           
                                <TextField 
                                    placeholder="បញ្ចូលពាក្យសម្ងាត់របស់អ្នក"
                                    className="text-field"                                  
                                    type="password"
                                    size="small"
                                    InputProps={{
                                      startAdornment: (
                                        <InputAdornment position="start">
                                            <VisibilityIcon className="icon"/>
                                        </InputAdornment>
                                      ),                            
                                    }}
                                />  
                              </Box>                       
                              <Button className="btb-sign-in" onClick={() => navigate("/")} sx={{":hover": { backgroundColor:"#fff" }}}>
                                      ចូលប្រព័ន្ធ
                              </Button>          
                              <Link to="" style={{textDecorationColor:"#fff"}}>  
                                  <Typography className="forgot-password" variant="subtitle2" align="center" >
                                      ភ្លេចពាក្យសម្ងាត់
                                  </Typography>
                              </Link> 
                          </Stack>
                      </Box>     
                  </Box> 
              </Box>       
          </Box>
          <Typography className="footer" variant="body2" align="center" color="#fff" sx={{ mb:3 , letterSpacing:'2px'}}>
                @រក្សាសិទ្ធិដោយហ្គោគ្លូប៊លម៉ាត ខេត្តសៀមរាប
          </Typography>
      </Box>     
    </>
    
  );
}
