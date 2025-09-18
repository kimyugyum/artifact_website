// src/components/ImageSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules"; // 👈 Autoplay 제거
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import styled from "styled-components";

export default function ImageSlider({ images = [] }) {
  return (
    <SliderWrapper>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        loop={false} // 끝나면 다시 처음으로
        modules={[EffectCoverflow, Pagination]} // 👈 Autoplay 제거
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <PosterBox>
              <img src={img} alt={`slide-${index}`} />
            </PosterBox>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderWrapper>
  );
}

const SliderWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 0;
  background: #fff;

  .swiper {
    width: 100%;
    height: 100%;
    padding-bottom: 50px; /* 아래 공간 확보 */
  }

  .swiper-slide {
    width: 280px;
    height: 420px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-pagination {
    bottom: 0;
    top: auto;
  }

  .swiper-pagination-bullet {
    background: #555;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: #555;
    width: 24px;
    border-radius: 8px;
  }
`;

const PosterBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;

    filter: grayscale(100%);
    transition: filter 0.6s ease;
  }

  /* 가운데(active) + hover일 때만 컬러 */
  .swiper-slide-active &:hover img {
    filter: grayscale(0%);
  }
`;
