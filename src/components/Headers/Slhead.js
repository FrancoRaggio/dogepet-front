import React from 'react';
import {Slideshow, Slide, TextoSlide} from '../../components/Headers/Slideshow.js';
import '../../assets/css/slide.css';
import styled from 'styled-components';
import img1 from '../../assets/img/brand/images1.jpg';
import img2 from '../../assets/img/brand/images2.jpg';
import img3 from '../../assets/img/brand/imagen4.jpg';
import img4 from '../../assets/img/brand/imagen5.jpg';

const Slhead = () => {
	return (
		<main>
			<Titulo>Productos Destacados</Titulo>
			<Slideshow controles={true} autoplay={true} velocidad="2000" intervalo="4000" >
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
			</Slideshow>
		</main>
	);
}

const Titulo = styled.p`
	font-size: 18px;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 10px;
`;
 
export default Slhead;