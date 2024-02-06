import React from 'react'
import {Image} from "@nextui-org/react";

export const ImageZoomed = ({src, alt}) => {
  return (
    <Image
      isZoomed
      alt={alt}
      src={src}
    />
  )
}
