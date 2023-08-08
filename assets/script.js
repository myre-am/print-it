
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// Déclaration des variables pour les flèches gauche et droite du carrousel.
	const arrowLeft = document.querySelector('.arrow_left');
	const arrowRight = document.querySelector('.arrow_right');
  
// Ajout des écouteurs d'événements pour les clics sur les flèches pour naviguer entre les images du carrousel.
	arrowLeft.addEventListener('click', () => {
	  console.log('Flèche gauche cliquée !');
	  showPreviousSlide()
	});
  
	arrowRight.addEventListener('click', () => {
	  console.log('Flèche droite cliquée !');
	  showNextSlide() 
	})
	
// Déclaration des variables représentant le conteneur des points et d'un tableau vide pour stocker ces points.
	const dotsContainer = document.querySelector('.dots');
	const dots = []
	
// Initialisation de l'index de l'image actuelle à 0 (référence à la première image).	
	let currentSlideIndex = 0;

// Fonction pour créer un nouvel élément de point pour le carrousel. 
// Elle crée un élément div, lui ajoute la classe 'dot' et le retourne.	
	function createDotElement() {
		const dot = document.createElement('div');
		dot.classList.add('dot');
		return dot;
	}
// Fonction pour mettre à jour les points de navigation du carrousel.
// Elle crée et ajoute de nouveaux points si nécessaire.
// Les points sont ajoutés à la fois dans le conteneur HTML et dans le tableau des points.	
	function updateDots() {
		while (dots.length < slides.length) {
			const dot = createDotElement(dots.length);
			dotsContainer.appendChild(dot);
			dots.push(dot);
		}

// Si c'est le cas, ajoute la classe 'dot_selected' au point pour indiquer qu'il est actuellement sélectionné.
// Sinon, retire la classe 'dot_selected' pour indiquer que le point n'est pas sélectionné.	
		dots.forEach((dot, index) => {
			if (index === currentSlideIndex) {
				dot.classList.add('dot_selected');
			} else {
				dot.classList.remove('dot_selected');
			}
		});
	}


	updateDots();

// Fonctions pour afficher l'image précédente et suivante du carrousel.	
	function showPreviousSlide() {
		currentSlideIndex--;
		if (currentSlideIndex < 0) {
		  currentSlideIndex = slides.length - 1;
		}
		showSlide();
		updateDots()
	  }
	  
	  function showNextSlide() {
		currentSlideIndex++;
		if (currentSlideIndex >= slides.length) {
		  currentSlideIndex = 0;
		}
		showSlide();
		updateDots()
	  }

// Fonction pour mettre à jour et afficher l'image du carrousel et le texte correspondants.
	  function showSlide() {
		const bannerImage = document.querySelector('.banner-img');
		const tagLine = document.querySelector('#banner p');
		
		bannerImage.src = './assets/images/slideshow/' + slides[currentSlideIndex].image;
		tagLine.innerHTML = slides[currentSlideIndex].tagLine;
	  }



