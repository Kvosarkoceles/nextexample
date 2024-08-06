import React from 'react';
import '../../app/Components/HomePage/homePage.css'

const ArrowIcon = (props) => {

  const {fill, height, width, className, style } = props

  return (
    <svg style={style} className={className} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 77 76" fill="none">
      <g clipPath="url(#clip0_2315_465)">
        <path fillRule="evenodd" clipRule="evenodd" d="M18.2279 15.8463C20.8121 18.4304 23.8322 20.5281 27.1158 22.0194C30.3994 23.5107 33.8822 24.3665 37.3653 24.5379C40.8485 24.7094 44.2638 24.1931 47.4162 23.0185C50.5686 21.8439 53.3963 20.0341 55.7381 17.6924L55.8215 17.7758L55.8216 17.7758L58.65 20.6042L58.6499 20.6042L58.7333 20.6876C56.3916 23.0294 54.5818 25.8571 53.4072 29.0095C52.2327 32.1619 51.7163 35.5772 51.8878 39.0604C52.0592 42.5435 52.915 46.0263 54.4063 49.3099C55.8976 52.5935 57.9953 55.6136 60.5794 58.1978L57.6877 61.0894C47.0134 50.4151 46.4979 36.7634 53.3393 25.9149L20.9376 58.3165L18.1092 55.4881L50.5111 23.0862C39.6625 29.9278 26.0107 29.4124 15.3363 18.738L18.2279 15.8463Z" fill={fill} />
      </g>
      <defs>
        <clipPath id="clip0_2315_465">
          <rect width="53.3333" height="53.3333" fill={fill} transform="translate(0.666992 38.0459) rotate(-45)" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ArrowIcon;