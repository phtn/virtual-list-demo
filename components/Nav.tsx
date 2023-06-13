"use client";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import styled from "styled-components";

export const Nav = () => {
  return (
    <main>
      <AppBar position="static" color="primary" sx={{ padding: 2 }}>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Avatar alt="logo" src="vr.png" sx={{ mr: 3 }} />
          <Typography variant="h6">Virtualized List</Typography>
        </Box>
        <Box sx={{ pt: 3 }}>Heoyo</Box>
      </AppBar>
    </main>
  );
};
