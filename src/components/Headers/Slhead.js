import React from 'react';
import {Slideshow, Slide, TextoSlide} from '../../components/Headers/Slideshow.js';
import '../../assets/css/slide.css';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/img/brand/images1.jpg';
import img2 from '../../assets/img/brand/images2.jpg';
import img3 from '../../assets/img/brand/imagen4.jpg';
import img4 from '../../assets/img/brand/imagen5.jpg';

const Slhead = () => {
	return (
		<main>
			<h1 className="titulo-home">Productos Destacados</h1>
			<Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
                <div>
                    <img src={img1} />
                    <p className="legend">Servicio médico veterinario integral</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Guardia 24 hs</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Diagnóstico por imágenes</p>
                </div>
                <div>
                    <img src={img4} />
                    <p className="legend">Servicios especializados</p>
                </div>
            </Carousel>
			{/* <Slideshow controles={true} autoplay={true} velocidad="2000" intervalo="4000" className="justify-content-center ">
				<Slide>
					<a href=" ">
						<img src={img1} alt=""/>
					</a>
					<TextoSlide >
						<p>Servicio médico veterinario integral</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href=" ">
						<img src={img2} alt=""/>
					</a>
					<TextoSlide>
						<p>Guardia 24 hs</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href=" ">
						<img src={img4} alt=""/>
					</a>
					<TextoSlide>
						<p>Servicios especializados</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href=" ">
						<img src={img3} alt=""/>
					</a>
					<TextoSlide>
						<p>Diagnóstico por imágenes </p>
					</TextoSlide>
				</Slide>
			</Slideshow> */}
		</main>
	);
}

export default Slhead;

{/* <Slideshow controles={true} autoplay={true} velocidad="2000" intervalo="4000" className="justify-content-center ">
	<Slide>
		<a href=" ">
		</a>
		<TextoSlide >
			<p>Servicio médico veterinario integral</p>
		</TextoSlide>
	</Slide>
	<Slide>
		<a href=" ">
			<img src={img2} alt=""/>
		</a>
		<TextoSlide>
			<p>Guardia 24 hs</p>
		</TextoSlide>
	</Slide>
	<Slide>
		<a href=" ">
			<img src={img4} alt=""/>
		</a>
		<TextoSlide>
			<p>Servicios especializados</p>
		</TextoSlide>
	</Slide>
	<Slide>
		<a href=" ">
			<img src={img3} alt=""/>
		</a>
		<TextoSlide>
			<p>Diagnóstico por imágenes </p>
		</TextoSlide>
	</Slide>
</Slideshow> */}