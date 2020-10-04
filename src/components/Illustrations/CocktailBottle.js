import React from 'react';
import styled from 'styled-components';
import Svg, { Path } from 'react-native-svg';

const StyledSvg = styled(Svg)``;

const CocktailBottle = ({ size, ...props }) => (
  <StyledSvg width={size} height={size} viewBox="0 0 23 53" {...props}>
    <Path
      d="M15.9 14.2714V6.18333C16.1343 6.18333 16.359 6.09027 16.5246 5.92461C16.6903 5.75895 16.7833 5.53427 16.7833 5.3V0.883333C16.7833 0.649059 16.6903 0.424379 16.5246 0.258722C16.359 0.0930652 16.1343 0 15.9 0H7.06667C6.83239 0 6.60771 0.0930652 6.44206 0.258722C6.2764 0.424379 6.18333 0.649059 6.18333 0.883333V5.3C6.18333 5.53427 6.2764 5.75895 6.44206 5.92461C6.60771 6.09027 6.83239 6.18333 7.06667 6.18333V14.2714C5.06578 14.7021 3.27296 15.8056 1.98705 17.3979C0.701135 18.9902 -0.000181342 20.9752 3.51724e-08 23.0219V50.35C0.000789109 51.0526 0.280238 51.7262 0.777039 52.223C1.27384 52.7198 1.94742 52.9992 2.65 53H20.3167C21.0192 52.9992 21.6928 52.7198 22.1896 52.223C22.6864 51.7262 22.9659 51.0526 22.9667 50.35V23.0219C22.9636 20.976 22.2611 18.9927 20.9757 17.401C19.6904 15.8094 17.8994 14.7051 15.9 14.2714ZM7.95 1.76667H15.0167V4.41667H7.95V1.76667ZM14.1333 6.18333V8.83333H8.83333V6.18333H14.1333ZM21.2 50.35C21.1997 50.5842 21.1066 50.8087 20.941 50.9743C20.7754 51.1399 20.5509 51.2331 20.3167 51.2333H2.65C2.41581 51.2331 2.19128 51.1399 2.02568 50.9743C1.86008 50.8087 1.76693 50.5842 1.76667 50.35V23.0219C1.76667 22.8028 1.77657 22.585 1.79637 22.3683C1.94527 20.7366 2.64755 19.2048 3.7867 18.027C4.92586 16.8492 6.43342 16.0963 8.05931 15.8932C8.27299 15.8665 8.46958 15.7627 8.61211 15.6013C8.75465 15.4399 8.83332 15.232 8.83333 15.0167V10.6H14.1333V14.1333H10.6V15.9H14.9527C16.6817 16.1251 18.2695 16.9723 19.4192 18.283C20.569 19.5937 21.202 21.2783 21.2 23.0219V50.35Z"
      fill="#de285e"
    />
    <Path
      d="M6.21433 20.6052C6.36738 20.432 6.53644 20.2737 6.71926 20.1322L5.63917 18.7343C5.08698 19.1609 4.62241 19.6901 4.271 20.2929L5.7974 21.1827C5.91733 20.9772 6.05697 20.7838 6.21433 20.6052Z"
      fill="#de285e"
    />
    <Path
      d="M5.29963 23.0214C5.29968 22.8594 5.31041 22.6975 5.33176 22.537L3.58066 22.3036C3.54894 22.5416 3.533 22.7813 3.53296 23.0214V27.3828H5.29963V23.0214Z"
      fill="#de285e"
    />
    <Path
      d="M11.484 27.3825C12.3576 27.3825 13.2115 27.1235 13.9378 26.6382C14.6641 26.1529 15.2302 25.4631 15.5645 24.656C15.8988 23.849 15.9863 22.961 15.8158 22.1042C15.6454 21.2475 15.2248 20.4605 14.6071 19.8428C13.9894 19.2251 13.2024 18.8045 12.3457 18.6341C11.4889 18.4636 10.6009 18.5511 9.79386 18.8854C8.98682 19.2197 8.29703 19.7858 7.81173 20.5121C7.32642 21.2384 7.06738 22.0923 7.06738 22.9659C7.0687 24.1368 7.53445 25.2595 8.36245 26.0875C9.19045 26.9155 10.3131 27.3812 11.484 27.3825ZM11.484 20.3159C12.0082 20.3159 12.5205 20.4713 12.9563 20.7625C13.3921 21.0537 13.7318 21.4675 13.9323 21.9518C14.1329 22.436 14.1854 22.9688 14.0831 23.4829C13.9809 23.9969 13.7285 24.4691 13.3579 24.8397C12.9873 25.2103 12.5151 25.4627 12.001 25.5649C11.487 25.6672 10.9542 25.6147 10.4699 25.4141C9.98571 25.2136 9.57184 24.8739 9.28065 24.4381C8.98947 24.0023 8.83405 23.49 8.83405 22.9659C8.83487 22.2633 9.11432 21.5897 9.61112 21.0929C10.1079 20.5961 10.7815 20.3167 11.484 20.3159Z"
      fill="#de285e"
    />
    <Path
      d="M16.7831 29.1498H6.18314C5.94886 29.1498 5.72418 29.2429 5.55853 29.4086C5.39287 29.5742 5.2998 29.7989 5.2998 30.0332V33.5665C5.2998 33.8008 5.39287 34.0255 5.55853 34.1911C5.72418 34.3568 5.94886 34.4498 6.18314 34.4498H16.7831C17.0174 34.4498 17.2421 34.3568 17.4077 34.1911C17.5734 34.0255 17.6665 33.8008 17.6665 33.5665V30.0332C17.6665 29.7989 17.5734 29.5742 17.4077 29.4086C17.2421 29.2429 17.0174 29.1498 16.7831 29.1498ZM15.8998 32.6832H7.06647V30.9165H15.8998V32.6832Z"
      fill="#de285e"
    />
    <Path d="M5.2998 36.2163H17.6665V37.9829H5.2998V36.2163Z" fill="#de285e" />
    <Path d="M7.06738 39.75H15.9007V41.5167H7.06738V39.75Z" fill="#de285e" />
    <Path d="M7.06738 46.8169H15.9007V48.5836H7.06738V46.8169Z" fill="#de285e" />
  </StyledSvg>
);

export default CocktailBottle;
