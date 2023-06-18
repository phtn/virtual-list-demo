"use client";
import Link from "next/link";
import Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "styled-components";
import { experimentalStyled } from "@mui/material";
import { AboutCard } from "@/components/AboutCard";
import { blue, blueGrey, lightBlue, pink } from "@mui/material/colors";
import { ListCard } from "@/components/ListCard";
import "./globals.css";

const Body = styled.div`
  height: 200vh;
  margin: 0px;
  padding-top: 10vh;
  background-color: ${blueGrey[600]};
`;

const Item = experimentalStyled(Paper)(() => ({
  backgroundColor: 'transparent',
  textAlign: "center",
  padding: 15,
  borderRadius: 35,
  margin: 0,
  "&:hover": {
    padding: 0,
  },
  transitionProperty: "padding",
  transitionDuration: 1000,
  transition: "all 0.5s ease",
}));

const Title = styled.span`
  color: ${lightBlue[300]};
  font-size: 2em;
`;

async function fetchData() {
  const res = await fetch("https://dummyjson.com/products", {
    next: { revalidate: 120 },
  });
  return res.json();
}
const Base = () => {
  return (
        <Box sx={{position: 'relative', top: -380, left: 70, zIndex: 5}}>

        <Link href="/about" style={{ textDecoration: "none" }}>
          <Title>ⲁⲃⲑⲙⲧ ⲭ</Title>
        </Link>
        </Box> 
  );
};
export default async function Page() {
  const data = await fetchData();
  const allProducts = data.products;
  const selectedProducts = allProducts.slice(0, 15);

  return (
    <Body>
      <Grid container>
        <Grid
          xs={0}
          sm={0}
          lg={1}
          xl={1}
          sx={{ display: { xs: "none", sm: "none", lg: "inline" } }}
        >
          <Item sx={{ visibility: "hidden" }}>left side bar</Item>
        </Grid>
        <Grid xs={12} sm={5} lg={4}>
          <Item elevation={0}>
            <AboutCard />
            <Base/>
          </Item>
        </Grid>
        <Grid xs={12} sm={7} lg={6}>
          <Item elevation={0}>
            <ListCard data={selectedProducts} />
          </Item>
        </Grid>
        <Grid
          xs={0}
          sm={0}
          lg={1}
          xl={1}
          sx={{ display: { xs: "none", sm: "none", lg: "inline" } }}
        >
          <Item sx={{ visibility: "hidden" }}>right</Item>
        </Grid>
      </Grid>
    </Body>
  );
}
