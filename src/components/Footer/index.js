import {Typography, Grid, Box, ListItemText, List} from "@mui/material";
import Link from '@mui/material/Link';
import React from "react";
import { Colors } from "../../styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FooterTitle } from "./styledComponents";

function Footer() {
  return (
    <Box
      display={"flex"}
      padding={3}
      margin={3}
      bgcolor={Colors.shaft}
      color={Colors.dove_gray}
    >
      <Grid
        container
        spacing={2}
        justifyContent="space-evenly"
        alignSelf={"center"}
      >
        <Grid item xs={12} lg={6}>
          <FooterTitle variant="body1" mt={0}>
            About us
          </FooterTitle>
          <Typography variant="caption2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <Box
            sx={{
              mt: 4,
              color: Colors.dove_gray,
            }}
          >
            <Link href="#" underline="none" color="inherit">
              <FacebookIcon sx={{ mr: 1 }} />
            </Link>
            <Link href="#" underline="none" color="inherit">
              <TwitterIcon sx={{ mr: 1 }} />
            </Link>
            <Link href="#" underline="none" color="inherit">
              <InstagramIcon />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <FooterTitle variant="body1">Information</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                <Link href="#" underline="none" color="inherit">Lorem ipsum</Link>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                <Link href="#" underline="none" color="inherit">Privacy &amp; Policy</Link>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                <Link href="#" underline="none" color="inherit">Terms &amp; Conditions</Link>
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <FooterTitle variant="body1">My account</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                <Link href="#" underline="none" color="inherit">Initiatives and projects</Link>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                <Link href="#" underline="none" color="inherit">Favorite animals</Link>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                <Link href="#" underline="none" color="inherit">My Account</Link>
              </Typography>
            </ListItemText>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
