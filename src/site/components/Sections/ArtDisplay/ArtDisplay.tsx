import React from 'react'
import { ArtCard } from '../../Cards/ArtCard'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import { artDetails } from './index';

export const ArtDisplay = () => {
      return (

            <div className='my-10'>

                  <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlay
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className="z-0 py-2"
                        containerClass="container-with-dots"
                        dotListClass=""
                        draggable={true}
                        focusOnSelect={false}
                        infinite={true}
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                              desktop: {
                                    breakpoint: {
                                          max: 3000,
                                          min: 1024
                                    },
                                    items: 4,
                                    partialVisibilityGutter: 40
                              },
                              mobile: {
                                    breakpoint: {
                                          max: 660,
                                          min: 0
                                    },
                                    items: 1,
                                    partialVisibilityGutter: 30
                              },
                              tablet: {
                                    breakpoint: {
                                          max: 1024,
                                          min: 660
                                    },
                                    items: 3,
                                    partialVisibilityGutter: 30
                              }
                        }}
                        // rewind
                        rewindWithAnimation={true}
                        rtl={false}
                        shouldResetAutoplay
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={0}
                        swipeable={true}
                  >

                        {
                              artDetails.map((val, key) => {

                                    return (
                                          <ArtCard key={key} src={val.src} artPrice={val.artPrice} title={val.title} subTitle={val.subTitle} />
                                    )
                              })
                        }

                  </Carousel>

            </div>
            
      )
}
