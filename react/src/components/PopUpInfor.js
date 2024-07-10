import React from "react";
import { Box, Card, ImageListItem, ImageListItemBar } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay, Lazy } from "swiper";
// import Swiper from 'swiper';
//import SwiperCore, { Autoplay, Pagination, Lazy } from "swiper";
import { path } from "../ultils/path";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate, useLocation } from "react-router-dom";

// import "swiper/swiper-bundle.min.css";
// import "swiper/components/pagination/pagination.min.css";
// import "swiper/css/lazy";
const PopUpInfor = ({ cluster }) => {
  const navigate = useNavigate();
  const useLocate = useLocation();
  console.log("cluster", cluster);

  function handleNavigate(idPost) {
    if (useLocate.pathname.includes("system")) {
      navigate(`/system/${path.DETAIL}/${idPost}`);
    } else {
      //   navigate(`/${path.DETAIL}/${idPost}`);
      window.open(`/${path.DETAIL}/${idPost}`, "_blank");
    }
  }

  return (
    <>
      <Card sx={{ maxWidth: 400 }}>
        <ImageListItem sx={{ display: "block" }}>
          <ImageListItemBar
            sx={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.7)0%, rgba(0,0,0,0.3)70%,  rgba(0,0,0,0)100% )",
              zIndex: 2,
            }}
            title={`${cluster?.price} tr/tháng`}
            subtitle={`loại: ${cluster?.typeRoom}`}
            position="top"
          />

          <ImageListItemBar
            title={cluster?.title.substr(0, 50) + "..."}
            subtitle={cluster?.phone}
            sx={{ zIndex: 2 }}
          />
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            style={{
              "--swiper-pagination-color": "rgba(255,255,255,0.8)",
              "--swiper-pagination-bullet-inactive-opacity": 0.5,
              "--swiper-pagination-bullet-inactive-color": "#fff",
            }}
          >
            {cluster.images &&
              cluster.images.map((photo) => (
                <SwiperSlide key={photo}>
                  <Box
                    component="img"
                    src={photo}
                    alt="Phòng"
                    sx={{
                      height: 255,
                      display: "block",
                      overflow: "hidden",
                      cursor: "pointer",
                      objectFit: "cover",
                    }}
                    onClick={() => handleNavigate(cluster.id)}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </ImageListItem>
      </Card>
    </>
  );
};

export default PopUpInfor;
