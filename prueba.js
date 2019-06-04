<!DOCTYPE html>
<html lang="pt-br">
<head>
	<title>pagina de exemplo estrutura basica</title>
	<meta charset="utf-8">
	<meta name="author" content="Guilherme">
	<meta name="description" content="descricao">
	<meta name="keywords" content="html5, tecnologia">
	<link rel="stylesheet" href="css/estilo.css">
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

		<style>
		body{
			font-size: 22px;
			font-family: sans-serif;
			margin: auto;
		}
		p{
			line-height: 1.5;

		}
	</style>
</head>
<body>

<div class="w3-sidebar w3-bar-block w3-card w3-animate-left w3-dark-grey" style="display:none" id="mySidebar">
  <button class="w3-bar-item w3-button w3-large"
  onclick="w3_close()">Close &times;</button>
  <a href="#" class="w3-bar-item w3-button">Link 1</a>
  <a href="#" class="w3-bar-item w3-button">Link 2</a>
  <a href="#" class="w3-bar-item w3-button">Link 3</a>
</div>

<div id="main">
	<div class="w3-container w3-dark-grey >

<div class="w3-teal">
  <button id="openNav" class="w3-button w3-teal w3-xlarge w3-dark-grey" onclick="w3_open()">&#9776;</button>
  <div class="w3-container w3-dark-grey">
  	
    
  </div>
</div>
	
<div id="principal">
	<header class="hero" >
		<nav>
			<ul>
				<li><a href="index.html">Inicio</a></li>
				<li><a href="#">Servicios</a></li>
				<li><a href="#">Quien somos</a></li>
			</ul>
		</nav>
		<div class="hero-content">
			<h1>IM Image</h1>
			<p>Haz tu primer cita </p>
		</div>
  </div>

