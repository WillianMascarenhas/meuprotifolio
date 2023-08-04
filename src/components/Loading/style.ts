import { changeBackGroundColorAnimation } from "@/pages/home/style";
import { styled, keyframes } from "@stitches/react";

export const MainContainer = styled('main', {
  display: 'flex',
  flexDirection:"column",
  alignItems: 'center',
  justifyContent: 'center',
  height: "100vh"
})

const circleAnimation = keyframes({
  '0%': {
    top: '60px',
    height: '5px',
    borderRadius: '50px 50px 25px 25px',
    transform: 'scaleX(1.7)',
    backgroundColor: "$brand2",
  },
  '40%': {
    height: '20px',
    borderRadius: '50%',
    transform: 'scaleX(1)',
    backgroundColor: "#7528e0",
  },
  '100%': {
    top: '0%',
    backgroundColor: "$brand1",
  },
});

const shadowAnimation = keyframes({
  '0%': {
    transform: 'scaleX(1.5)',
  },
  '40%': {
    transform: 'scaleX(1)',
    opacity: 0.7,
  },
  '100%': {
    transform: 'scaleX(0.2)',
    opacity: 0.4,
  },
});

export const Wrapper = styled('div', {
  width: '200px',
  height: '60px',
  position: 'relative',
  zIndex: '1',
});

export const Circle = styled('div', {
  width: '20px',
  height: '20px',
  position: 'absolute',
  borderRadius: '50%',
  backgroundColor: '#fff',
  transformOrigin: '50%',
  animation: `${circleAnimation} 0.5s alternate infinite ease`,
});

export const Shadow = styled('div', {
  width: '20px',
  height: '4px',
  borderRadius: '50%',
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  position: 'absolute',
  top: '62px',
  transformOrigin: '50%',
  zIndex: '-1',
  filter: 'blur(1px)',
  animation: `${shadowAnimation} 0.5s alternate infinite ease`,
});
