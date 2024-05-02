import { Grid,Card,
    TextField,
    Button,
    Typography,
    Box,
    CardContent
  } from '@mui/material';


import { inputFormform7 } from './form7';

  

  export default function SampleForm7() {

    const margin={margin:"0 5px"}
    return (
      <div className="App">
        <Grid style ={{ padding: "80px 5px0 5px" }}>
        <Card style ={{ maxWidth: 600, margin: "0 auto" ,font:'initial'}}>
        <CardContent>
        <Typography sx={{ mt: 3 }} align='center' color='primary' variant="h5">Form7</Typography>
        <form>
          <Grid container spacing={2} columns={12} >
            {
             inputFormform7.map(input=> <Grid xs={input.xs} sm={input.sm} item>
                              <TextField {...input}  InputLabelProps={{shrink:true}}/>
              </Grid>)
            }
             <Grid container spacing={1}>
             <Grid item xs={12} align="right">
              <Button type="reset" variant="contained" color="primary"style={{paddingRight:'3'}} >Reset</Button>
            <Button  type="submit" variant="contained" color="primary">Submit</Button>
              </Grid>
            </Grid>
           
          </Grid>
        </form>
        </CardContent>
        </Card>
        </Grid>
      </div>
    );
  }
  
 