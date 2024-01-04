import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "@mui/material/Link";

function Logo() {
  return (
    <Box pb="14px" sx={{
      minWidth: {xs: 'auto', sm: '330px'}
    }}>
      <Typography
        variant="h1"
        color={"secondary"}
        fontFamily={'"Allison", "cursive"'}
        sx={{
          fontSize: {xs: '65px', sm: '6rem'}
        }}
      >
        <Link href="/" underline="none" color="inherit">Cats & friends</Link>
      </Typography>
    </Box>
  );
}

export default Logo;
