import { ReactNode } from 'react'
import { useSelector } from 'react-redux'

import { Swiper } from 'swiper/react'
import { Navigation, SwiperOptions } from 'swiper'

import { RootState } from 'os/store'

import 'swiper/css/bundle'
import './index.os.less'

export const SwiperOs = ({
  children,
  ...rest
}: { children: ReactNode } & SwiperOptions) => {
  const { infix } = useSelector((state: RootState) => state.ui)

  const isMobile = infix === 'xs'
  return (
    <Swiper
      slidesPerView={'auto'}
      lazy
      spaceBetween={24}
      modules={isMobile ? [] : [Navigation]}
      navigation={!isMobile}
      {...rest}
    >
      {children}
    </Swiper>
  )
}
