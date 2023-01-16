import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';

import { useForm } from "react-hook-form";
import { Container } from '@material-ui/core';



export default function AdminPage() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="red"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Auction
          </Typography>
          <Button href="/application" color="inherit">Create new application</Button>
        </Toolbar>
      </AppBar>
    </Box>
          

        <Container> <Box sx={{ mt: 25}}>
        <h1>create a new user</h1>
        
        

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName", { required: true, maxLength: 20 })} />
        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        <input type="submit" />
        </form>
        </Grid>
        <Grid item xs={6}>
        <Box sx={{ bgcolor: '#cfe8fc', height: '60vh' }} >
          <div>users</div>
          </Box>
        </Grid>
        </Grid>
        </Box>
        </Container>
        </>
    );
};