import { FixedSizeList } from "react-window";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { Skeleton } from "@mui/material";

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

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
      {({ data, index, style }) => (
        <ListItem style={style}>
          <ListItemAvatar>
            <Avatar src={data[index].thumbnailUrl} />
          </ListItemAvatar>
          <ListItemText>{data[index].title}</ListItemText>
        </ListItem>
      )}
    </FixedSizeList>
  );
}
