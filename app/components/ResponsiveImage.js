import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import imgdesktop from '../../public/imgdesktop.svg'
import imgmobile from '../../public/imgmobile.svg'

const ResponsiveImage = ({ smallSrc, largeSrc, alt }) => {
  const isMobile = useMediaQuery({ maxWidth: 1023 }); // Defina o limite de largura para dispositivos móveis
   if (isMobile == false) {
      return <Image src={imgdesktop} alt="logo" className='max-lg:' />
   } else {
      return <Image src={imgmobile} alt="logo" className='' />
   }
};

export default ResponsiveImage;
