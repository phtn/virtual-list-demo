"use client";
import { useCallback, useState } from "react";
import { FixedSizeList, VariableSizeList } from "react-window";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";
import { Skeleton } from "@mui/material";

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
interface DataProps {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const Row = ({ data, index, style }: any) => (
  <ListItem style={style}>
    <ListItemText>
      {data[index].title} {index}
    </ListItemText>
  </ListItem>
);
export default async function Page() {
  const data = await fetchData();
  return (
    <FixedSizeList
      itemData={data}
      innerElementType="ul"
      itemCount={data.length}
      itemSize={50}
      height={800}
      width={1000}
    >
      {({ data, index, style }) => {
        return (
          <ListItem style={style}>
            <ListItemAvatar>
              <Avatar src={data[index].thumbnailUrl} />
            </ListItemAvatar>
            <ListItemText>{data[index].title}</ListItemText>
          </ListItem>
        );
      }}
    </FixedSizeList>
  );
}
