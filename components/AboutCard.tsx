import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";


import { lightBlue, pink } from "@mui/material/colors";
import { Box } from "@mui/system";
import Link from "next/link";
import { styled } from "styled-components";

const Title = styled.span`
  color: ${lightBlue[50]};
  font-size: 24px;
`;
export const AboutCard = () => {
  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 5,
        '&:hover': { borderRadius: 9},
        height: 420,
        transition: "all 0.5s ease",
      }}
    >
      <CardMedia component={"img"} image="ai-god.jpg" alt="hand of an AI God" />
    </Card>
  );
};
