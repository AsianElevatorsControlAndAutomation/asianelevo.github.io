import React from "react";
import Link from "next/link";
import "./Carousel.css";
import CarouselInformation from "@/constants/CarouselInformation";
const Carousel = () => {
  return (
    <section className="carousel" aria-label="Gallery">
      <ol className="carousel__viewport">
        {CarouselInformation.map((element, idx)=>{
            let next = `#carousel__slide`
            let prev = `#carousel__slide`
            if(idx==0){
                prev+=CarouselInformation.length.toString()
                next+=(idx+2).toString()
            }
            else if(idx==CarouselInformation.length-1){
                prev+=idx.toString()
                next+='1'
            }
            else{
                prev+=idx.toString()
                next+=(idx+2).toString()
            }
            return(
                <li key={idx+1} id={`carousel__slide${idx+1}`} tabIndex="0" className="carousel__slide">
                    <div className="carousel__snapper" />
                    <Link href={prev} className="carousel__prev glass">
                    {'<'}
                    </Link>
                    <Link href={next} className="carousel__next glass">{'>'}</Link>
                    <img src={element.img} alt={element.alt} className="h-full w-full" />
                </li>
            )
        })}
      </ol>
      <aside className="carousel__navigation">
        <ol className="carousel__navigation-list">
            {CarouselInformation.map((element, idx)=>{
                let slide = `#carousel__slide${idx+1}`
                return(
                    <li key={idx} className="carousel__navigation-item">
                        <Link href={slide} className="carousel__navigation-button glass" />
                    </li>
                )
            })}
        </ol>
      </aside>
    </section>
  );
};

export default Carousel;
