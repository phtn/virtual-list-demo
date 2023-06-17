"use client";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "styled-components";
import { Card, experimentalStyled } from "@mui/material";
import { AboutCard } from "@/components/AboutCard";
import { lightBlue, pink } from "@mui/material/colors";
import { ListCard } from "@/components/ListCard";

const Body = styled.div`
  background-color: ${pink[100]};
  height: 150vh;
  margin: 0px;
  padding-top: 10vh;
`;

const Item = experimentalStyled(Paper)(({ theme }) => ({
  backgroundColor: lightBlue[100],
  textAlign: "center",
  padding: 20,
  borderRadius: 20,
  margin: 10,
  "&:hover": {
    padding: 0,
  },
  transitionProperty: "padding",
  transitionDuration: 1000,
}));
export async function fetchData() {
  const res = await fetch("https://dummyjson.com/products");
  return res.json();
}

export default async function Page() {
  const data = await fetchData();
  const allProducts = data.products;
  const selectedProducts = allProducts.slice(0, 15);
  return (
    <Body>
      <Grid container gap={0}>
        <Grid
          xs={0}
          sm={0}
          lg={2}
          xl={2}
          sx={{ display: { xs: "none", sm: "none", lg: "inline" } }}
        >
          <Item sx={{ visibility: "hidden" }}>left side bar</Item>
        </Grid>
        <Grid xs={12} sm={6} lg={3}>
          <Item elevation={4}>
            <AboutCard />
          </Item>
        </Grid>
        <Grid xs={12} sm={6} lg={5}>
          <Item elevation={4}>
            <ListCard data={selectedProducts} />
          </Item>
        </Grid>
        <Grid
          xs={0}
          sm={0}
          lg={2}
          sx={{ display: { xs: "none", sm: "none", lg: "inline" } }}
        >
          <Item sx={{ visibility: "hidden" }}>right</Item>
        </Grid>
      </Grid>
    </Body>
  );
}
