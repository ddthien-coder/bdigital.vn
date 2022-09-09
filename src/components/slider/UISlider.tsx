import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

interface SliderProps {
  post: {
    description: string;
    image: string;
    imageText: string;
    linkText: string;
    title: string;
  };
}

export class Slider extends React.Component<SliderProps> {
  render() {
    const { post } = this.props;

    return (
      <Paper
        elevation={24}
        square={true}
        sx={{
          position: 'relative',
          flexWrap: 'wrap',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 1,
          backgroundSize: 'cover',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${post.image})`
        }}
      >
        {/* Increase the priority of the hero background image */}
        {
          <img
            style={{ display: 'none' }}
            src={post.image}
            alt={post.imageText}
          />
        }
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.3)'
          }}
        />
        <Grid container>
          <Grid item md={4}>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 0 }
              }}
            >
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                {post.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {post.description}
              </Typography>
              <Link underline="none" variant="subtitle1" href="#">
                {post.linkText}
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}
