import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Card, CardActionArea } from "@mui/material";
const Card1 = ({ title, body }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345, height: "300px" }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h7" component="div">
              {title}
            </Typography>
            <Typography>
             <img src={body} className="img_gy"/>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Card1;
