// src/pages/Home.jsx
import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import vase from "../assets/banner.png"; // 도자기 이미지

import ImageSlider from "../components/ImageSlider";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

import ExhibitionText from "../components/ExhibitionText";

import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header /> {/* 항상 최상단에 고정 */}
      <Hero>
        <Background>
          <img src={vase} alt="ceramic vase" />
        </Background>
        <Title>Unveiling and<br/>Breathing<br/>Resonance</Title>
      </Hero>

      <ImageSlider images={[img1, img2, img3]} />

      <ExhibitionText />
      <Footer />

    </>
  );
}

const Hero = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding-top: 60px;
`;

const Background = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0; /* 배경은 맨 뒤 */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;   /* 화면 비율 유지 + 꽉 채우기 */
    object-position: center;
  }
`;

const Title = styled.h1`
  position: absolute;
  bottom: clamp(20px, 8vw, 80px); /* 하단 여백 */
  left: clamp(20px, 8vw, 80px);   /* 좌측 여백 */
  font-size: clamp(32px, 6vw, 96px);
  font-weight: 800;
  color: white;
  line-height: 1.1;
  margin: 0;
  z-index: 1; /* 배경 위에 표시 */
`;
