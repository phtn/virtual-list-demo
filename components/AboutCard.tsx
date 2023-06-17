import { CardContent, CardMedia, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { lightBlue, pink } from "@mui/material/colors";
import { Box } from "@mui/system";
import Link from "next/link";
import { styled } from "styled-components";

const Title = styled.span`
  color: ${lightBlue[50]};
  font-family: "Poppins-Bold";
  font-size: 24px;
`;
export const AboutCard = () => {
  return (
    <Card elevation={3} sx={{ borderRadius: 5 }}>
      <CardMedia component={"img"} image="ai-god.jpg" alt="hand of an AI God" />
      <CardContent
        sx={{
          backgroundColor: pink[200],
        }}
      >
        <Link href="/about" style={{ textDecoration: "none" }}>
          <Title>About</Title>
        </Link>
      </CardContent>
    </Card>
  );
};
