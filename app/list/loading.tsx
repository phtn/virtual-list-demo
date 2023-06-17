"use client";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

export default function Loading() {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <Skeleton animation="wave" variant="circular" width={40} height={40} />
      <Skeleton animation="wave" variant="rounded" width={500} height={30} />
    </Box>
  );
}
