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
			<h1 className="titulo-home">Productos Destacados</h1>
			<div id="carouselExampleCaptions" class="carousel slide d-flex justify-content-center align-items-center" data-bs-ride="carousel">
				<div class="carousel-indicators">
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 0"></button>
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"  aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"  aria-label="Slide 2"></button>
				</div>
				<div class="carousel-inner">
					<div class="carousel-item active">
					<img src={img1} class="d-block w-100" alt="..."/>
					<div class="carousel-caption d-none d-md-block">
						<h5>First slide label</h5>
						<p>Servicio médico veterinario integral</p>
					</div>
					</div>
					<div class="carousel-item">
					<img src={img2} class="d-block w-100" alt="..."/>
					<div class="carousel-caption d-none d-md-block">
						<h5>Second slide label</h5>
						<p>Some representative placeholder content for the second slide.</p>
					</div>
					</div>
					<div class="carousel-item">
					<img src={img3} class="d-block w-100" alt="..."/>
					<div class="carousel-caption d-none d-md-block">
						<h5>Third slide label</h5>
						<p>Some representative placeholder content for the third slide.</p>
					</div>
					</div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Anterior</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Siguiente</span>
				</button>
			</div>
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