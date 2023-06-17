import {
  Avatar,
  CardContent,
  CardHeader,
  CardMedia,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import { blueGrey, lightBlue, pink } from "@mui/material/colors";
import Link from "next/link";
import { styled } from "styled-components";
import AutoAwesomeMotion from "@mui/icons-material/AutoAwesomeMotion";
import IconButton from "@mui/material/IconButton";
import { FixedSizeList } from "react-window";
import type { Props } from "../app/types";

const Initials = styled.span`
  font-family: "Poppins-Bold";
  font-size: 20px;
`;
const Title = styled.span`
  font-size: 24px;
  font-family: "Poppins-Bold";
  color: ${lightBlue[50]};
`;
const Subheader = styled.span`
  color: ${pink[50]};
  font-family: "Poppins-Thin";
  font-size: 8;
  letter-spacing: 2px;
`;

export const ListCard = ({ data }: Props) => {
  return (
    <Card elevation={3} sx={{ borderRadius: 5 }}>
      <CardHeader
        sx={{ bgcolor: pink[200] }}
        avatar={
          <Avatar sx={{ bgcolor: lightBlue[100] }}>
            <Initials>VL</Initials>
          </Avatar>
        }
        title={<Title>Virtualized List</Title>}
        subheader={<Subheader>PREVIEW</Subheader>}
        action={
          <IconButton aria-label="list">
            <AutoAwesomeMotion
              sx={{ color: lightBlue[50], height: 35, width: 35 }}
            />
          </IconButton>
        }
      />
      <CardContent
        sx={{
          backgroundColor: pink[50],
        }}
      >
        <FixedSizeList
          itemData={data}
          itemCount={data.length}
          itemSize={50}
          height={537}
          width={560}
        >
          {({ data, index, style }) => (
            <ListItem key={data[index].id} style={style}>
              <ListItemAvatar>
                <Avatar src={data[index].thumbnail} />
              </ListItemAvatar>
              <ListItemText>{data[index].title}</ListItemText>
            </ListItem>
          )}
        </FixedSizeList>
      </CardContent>
    </Card>
  );
};
