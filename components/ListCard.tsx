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
import { Suspense } from "react";

const Initials = styled.span`
  font-size: 20px;
  color: ${pink[50]};
`;
const Title = styled.span`
  font-size: 20px;
  color: ${blueGrey[100]};
`;
const Subheader = styled.span`
  color: ${blueGrey[700]};
  font-size: 8;
  letter-spacing: 2px;
`;

const LazyFallBack = () => <span>Lazy loading</span>;
export const ListCard = ({ data }: Props) => {
  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 5,
        "&:hover": { borderRadius: 9 },
        transition: "all 0.5s ease",
      }}
    >
      <CardHeader
        sx={{ bgcolor: pink[300] }}
        avatar={
          <Avatar sx={{ bgcolor: pink[200] }} variant="rounded">
            <Initials>VL</Initials>
          </Avatar>
        }
        title={<Title>Products List</Title>}
        subheader={<Subheader>PREVIEW</Subheader>}
        action={
          <IconButton aria-label="list">
            <AutoAwesomeMotion
              sx={{
                color: pink[100],
                "&:hover": { color: pink[50] },
                transition: "color 0.5s ease",
                height: 35,
                width: 35,
              }}
            />
          </IconButton>
        }
      />
      <CardContent
        sx={{
          bgcolor: pink[100],
          margin: 0
        }}
      >
        <Suspense fallback={<LazyFallBack />}>
          <FixedSizeList
            itemData={data}
            itemCount={data.length}
            itemSize={70}
            height={550}
            width={560}
          >
            {({ data, index, style }) => (
              <ListItem
                key={data[index].id}
                style={style}
                sx={{
                  "&:hover": {
                    backgroundColor: lightBlue[100],
                    borderRadius: 5,

                  },
                  transition: "all 0.5s ease",
                }}
              >
                <ListItemAvatar>
                  <Avatar src={data[index].thumbnail} variant="rounded" />
                </ListItemAvatar>
                <ListItemText sx={{fontSize: '1em', '&:hover': {marginLeft: 1}, transition: 'all 0.4s ease'}}>{data[index].title}</ListItemText>
              </ListItem>
            )}
          </FixedSizeList>
        </Suspense>
      </CardContent>
    </Card>
  );
};
