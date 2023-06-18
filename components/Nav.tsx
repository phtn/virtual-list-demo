"use client";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import { blueGrey, lightBlue } from "@mui/material/colors";
import { Container } from "@mui/system";
import { Toolbar } from "@mui/material";
import { styled } from "styled-components";

const Title = styled.span`
  font-size: 1.25em;
  color: ${blueGrey[50]};
`;
export const Nav = () => {
  return (
    <>
      <AppBar
        position="fixed"
        elevation={2}
        sx={{
          px: 5,
          margin: 0,
          bgcolor: "rgba(244,143,177,0.9)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar>
            <Avatar
              alt="logo"
              src="sticky-note.png"
              variant="square"
              sx={{ mr: 3 }}
            />
            <Link href="/" style={{ textDecoration: "none" }}>
              <Title> Virtualized List</Title>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
