import React from 'react';
import {Box, Typography, Stack, IconButton} from '@mui/material';
import './viewsupplies.scss';
import ClearIcon from '@mui/icons-material/Clear';


function ViewSupplies({handleCloseView}) {

  return (
    <Box className='view-supplies'>
        <Stack direction="row" spacing={5}>           
            <Typography className='header-title' variant="h6" >
                ព័ត៌មានលម្អិតអំពីអ្នកផ្គត់ផ្គង់ 
            </Typography>            
            <Box sx={{flexGrow:1}}></Box>
            <IconButton onClick={handleCloseView}>
                <ClearIcon sx={{color:"#2AEA00"}}/>
            </IconButton>    
        </Stack>   

        <Stack direction="row" spacing={5} width="100%">
            <Typography className='header-title'>
                ការផ្គត់ផ្គង់: ក
            </Typography>            
        </Stack>         

        <Stack direction="row" spacing={8} width="100%" sx={{mt:2}}>
            <Stack direction="column" spacing={1} >
                <Typography className='header-title'>
                    ឈ្មោះ :
                </Typography>
                <Typography variant='p' className="body-text">
                    ធៀង​ រតនា
                </Typography>     
            </Stack>        
            <Stack direction="column" spacing={1}>
                <Typography className='header-title'>
                    លេខទូរស័ព្ទ:
                </Typography>
                <Typography variant='p' className="body-text-english">
                    0968500029
                </Typography>     
            </Stack>   
                
        </Stack>
        <Stack direction="column" spacing={1} sx={{mt:2}}>
            <Typography className='header-title'>
                ទីតាំង:
            </Typography>
            <Typography variant='p' className="body-text">
                ភូមិថ្មី សង្កាត់ស្វាយដង្គុំ ខេត្តសៀមរាប
            </Typography>     
        </Stack> 

        
    </Box>

  )
}

export default ViewSupplies