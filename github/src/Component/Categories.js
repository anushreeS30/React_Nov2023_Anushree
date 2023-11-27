import React from "react";
import { CategoriesList } from "../data/Data";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Layout from "../Component/Layout";

const Categories = () => {
  return (
  <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {CategoriesList.map((menu) => (
          <Card sx={{ maxWidth: "200px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "2`50px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      </Layout>
  );
};

export default Categories;