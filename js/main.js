const d = document;

window.addEventListener('load',function(e) { 
    initRegister();
    initDelen();
    initWijzig();
    initBoeken();
    initRecepten();
    initGerecht();
});

// === zichtbaarheid met js ===
for (el of d.getElementsByClassName('noJS')) {el.style.display = 'block';}
for (el of d.getElementsByClassName('yesJS')) {el.style.display ='none';}


// === Register ===
function initRegister(){
    var submitKnop = d.getElementById('verstuur');
    // excistency check!
    if (!submitKnop) return false; // dan stop maar
    //console.log(submitKnop);

    submitKnop.addEventListener('click', function(e){
        console.log(this.form);
        e.preventDefault();
        if (valideerForm(this.form)){
            // alleen als alles goed is bevonden dan versturen we de pagina
            this.form.submit();
        }
        e.preventDefault();
    });
}

var allesGoed; // GLOBAL

function valideerForm(registerForm){
    allesGoed = true;
    let waarde = '';
    let geldig = false;

    for (element of registerForm.elements) {
        // controleren of er invoer is in de tekstvelden
        if (element.type == 'text') {
            
            waarde = element.value;
            geldig = waarde.length >= 2;

        // controleren of er een nummer is ingevoerd
        } else if (element.type == 'number') {
            //console.log(element.id);
            waarde = element.value;
            geldig = waarde !== '';

        } else if (element.type == 'button') {
            continue;
        } else if (element.type == 'radio') {
            continue;    
        }
       
        formFeedback(element, geldig);
        console.log(element, geldig); 
                    
        // controleer of de email plausibel is
        // ab@cd.ef minimaal
        if (element.name == 'email' || element.name == 'email_inlog') {
            console.log(element.id);
            waarde = element.value;
            let apenstaart = waarde.lastIndexOf('@');
            let laatstePunt = waarde.lastIndexOf('.');
            let length = waarde.length;
            geldig =     apenstaart >=2
                         && laatstePunt > apenstaart + 2
                         && length > laatstePunt + 2;
            formFeedback(element, geldig);
            console.log(element, geldig);
        }

        if (element.name == 'bericht') {
            console.log(element.id);
            waarde = element.value;
            geldig = waarde.length >= 2 ;
        
            formFeedback(element, geldig);
            console.log(element, geldig); 
        }

    } // einde elementen loop
    return false; // tijdelijk om de rest te kunnen testen, pas als ik klaar ben wordt dit true
} // einde valideer Form functie

function formFeedback(element, geldig){
    const melding = d.getElementById(element.id + '_error');
    console.log(melding, element.id);
    if (geldig){
        melding.style.display = 'none';
        element.style.borderColor = 'green';
    } else {
        melding.style.display = 'block';
        allesGoed = false ; // als er een fout dan blijft het fout.
        element.style.borderColor = 'red';
    }
}

// === Wijzig wachtwoord===
function initWijzig(){
    const wijzigWachtwoord = d.getElementById('ww_wijzigen');
    
    if(!wijzigWachtwoord) return false; 
    console.log(wijzigWachtwoord);

    wijzigWachtwoord.addEventListener('click', function(e){
        console.log(this.form);
        e.preventDefault();
        if (valideerAccountForm(this.form)){
            // alleen als alles goed is bevonden dan versturen we de pagina
            this.form.submit();
        }
        e.preventDefault();
    });   
}

function valideerAccountForm(accountForm){
    allesGoed = true;
    let waarde = '';
    let geldig = false;
    let emailInlogValue = '';

    for (element of accountForm.elements) {
        // controleren of er invoer is in de tekstvelden
        if (element.name !== 'email_inlog' && element.name !== 'bevestigen') {
            console.log(element.id);
            continue;
        }

        if (element.name == 'email_inlog') {
            console.log(element.id);
            waarde = element.value;
            //sla de waarde van email inlog op
            emailInlogValue = waarde;
            // controleer of de waarde niet leeg is
            geldig = waarde.trim() !== '';
            if (!geldig) {
                formFeedback(element, geldig);
                console.log(element, geldig);
                continue; // Ga door met de volgende iteratie als de waarde leeg is
            } 
            let apenstaart = waarde.lastIndexOf('@');
            let laatstePunt = waarde.lastIndexOf('.');
            let length = waarde.length;
            geldig =     apenstaart >=2
                         && laatstePunt > apenstaart + 2
                         && length > laatstePunt + 2;
            formFeedback(element, geldig);
            console.log(element, geldig);
        }
        
        if (element.name == 'bevestigen') {
            console.log(element.id);
            // controleer of de waarde van 'email_bevestigen' niet leeg is
            geldig = element.value.trim() !== '';
            if (!geldig) {
                // Geef feedback als de waarde leeg is
                formFeedback(element, geldig);
                console.log(element, geldig);
                continue; // Ga door met de volgende iteratie als de waarde leeg is
            }
            // controleer of de waarde van 'email_bevestigen' gelijk is aan de waarde van 'email_inlog'
            geldig = element.value === emailInlogValue;
            formFeedback(element, geldig);
            console.log(element, geldig); 
        }
    
    } // einde elementen loop
    return false; // tijdelijk om de rest te kunnen testen, pas als ik klaar ben wordt dit true
} // einde valideerAccountForm functie

function formFeedback(element, geldig){
    const melding = d.getElementById(element.id + '_error');
    console.log(melding, element.id);
    if (geldig){
        melding.style.display = 'none';
        element.style.borderColor = 'green';
    } else {
        melding.style.display = 'block';
        allesGoed = false ; // als er een fout dan blijft het fout.
        element.style.borderColor = 'red';
    }
}


// jQuery datepicker in datum
if (typeof $ !== 'undefined' && typeof $.fn.datepicker !== 'undefined') {
    $( function() {
        let availableDates = ["16-09-2024", "17-09-2024", "18-09-2024", "19-09-2024", "20-09-2024", "21-09-2024", "22-09-2024"];
        $( "#datum" ).datepicker({
            beforeShowDay: function(date) {
                let string = $.datepicker.formatDate('dd-mm-yy', date);
                return [ availableDates.indexOf(string) != -1 ]
            },
            defaultDate: new Date(2024, 8, 15), // Stel de standaarddatum in op 15 september 2024
            onSelect: function(dateText) {
                let selectDatum = $.datepicker.formatDate('dd-mm-yy', new Date(dateText));
                $(this).val(selectDatum); // Vul het inputveld met de geselecteerde datum in het gewenste formaat
            }
        });
    } );
}


// jQuery datepicker in geboortedatum
if (typeof $ !== 'undefined' && typeof $.fn.datepicker !== 'undefined') {
    $(function() {
        // Bereken de maximale geboortedatum voor personen boven 18 jaar
        let maximumGeboorteDatum = new Date();
        maximumGeboorteDatum.setFullYear(maximumGeboorteDatum.getFullYear() - 18);
        maximumGeboorteDatum.setHours(0, 0, 0, 0); // Stel 00:00:00 in om ervoor te zorgen dat we alleen datums vergelijken

        // Stel de datepicker in
        $("#geboortedatum").datepicker({
            maxDate: maximumGeboorteDatum, // Stel de maximale datum in
            dateFormat: "dd-mm-yy", // Datumformaat
            changeYear: true, // Sta het scrollen door jaartallen toe
            yearRange: 'c-100:c', // Stel het bereik van de jaartallen in tot 100 jaar
            onSelect: function(dateText) {
                $(this).val(dateText); // Vul het inputveld met de geselecteerde datum in het gewenste formaat
            }
        });
    });
}


//  slider recepten
var slider = d.getElementById("myRange");
if (slider !== null) {
    let output = d.getElementById("aantal");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
    };
}


// ====== GSAP ======
// animatie logo
gsap.from('.logo1', {duration: 2, opacity:0, scale:0, ease: "elastic.out(1.2,1)",});
gsap.from('.logo2', {duration: 1.2, delay:0.6, opacity:0, rotation:540, ease:'power4.out'})


// ====== Welk deel van de koe ======
function initDelen() {

    const popupContent = d.getElementById("popupContent");
    var popupLinks = d.getElementsByClassName("popupLink");
    const overlay = d.getElementById('overlay');
    // console.log(overlay);

    if(!d.getElementById("popupContent")) return false;
    console.log(popupContent);
    if(!d.getElementById("overlay")) return false;

	// maak pop-up inhoud
    // Maak het <div> element aan en geef een id
	const dynamicTextKoe = d.createElement("div");
	dynamicTextKoe.setAttribute('id', 'dynamicTextKoe');

    // Maak het <h2> element aan en geef een id
	const deelNaam = d.createElement("h2");
	deelNaam.setAttribute('id', 'deel');

    // Maak het <div> element aan en geef een class en een id
	const dynamicVlees = d.createElement('div');
	dynamicVlees.setAttribute('class', 'dynamicVlees');
	dynamicVlees.setAttribute('id', 'vlees');

    // Maak het <div> element aan en geef een class en een id
	const dynamicP = d.createElement('div');
	dynamicP.setAttribute('id', 'dynamicPkoe');

    // Maak het <img> element
	const dynamicVleesImg = d.createElement('img');

    // Maak het <p> element aan en geef een id aan
	const deelOmschrijving = d.createElement('p');
	deelOmschrijving.setAttribute('id', 'omschrijving');

    // Maak het <button> element aan
	const btnPopup = d.createElement('button');
	btnPopup.id = 'close;'
	btnPopup.textContent = 'Sluit';
	//console.log(btn);

    // voeg de elementen toe
	popupContent.appendChild(dynamicTextKoe);
	dynamicTextKoe.appendChild(deelNaam);

	dynamicTextKoe.appendChild(dynamicVlees);
	dynamicVlees.appendChild(dynamicVleesImg);

	dynamicTextKoe.appendChild(dynamicP);    // <div> <p>
	dynamicP.appendChild(deelOmschrijving);

	popupContent.appendChild(btnPopup);

    /**
    * update de popup met alle info van deel van de koe
    * 
    * @param {integer} deelNr
    * 
    * @return {void}
    */
    function updateDeel(deelNr) {
        const deel = delen[deelNr]; 
        console.log(deel);
		deelNaam.textContent = deel.naam;
		deelOmschrijving.innerHTML = deel.omschrijving;
		dynamicVleesImg.src = '../../img/nieuws/' + deel.image;
		dynamicVleesImg.alt = deel.naam;		
    }

    var popupLinks = d.getElementsByClassName("popupLink");
		for (var i = 0; i < popupLinks.length; i++) {
    	    popupLinks[i].addEventListener("click", function(e) {
            e.preventDefault(); // Voorkom standaardgedrag van de link
            let popupNaam = this.getAttribute("data-popup"); // Haal de naam van de popup op
            openPopup(popupNaam); // Open de popup
    	    });
	    }

    // Functie om de popup te openen en de juiste inhoud te laden
	function openPopup(popupNaam) {
		if (!popupContent) return; // Stop als de popup niet bestaat
		popupContent.classList.add("show"); // Voeg een klasse toe om de popup te tonen
        overlay.classList.add('show');
		console.log(popupNaam);
		console.log(popupNaam.substring(5));
        updateDeel(popupNaam.substring(5));
	}

    btnPopup.addEventListener('click', function() {
		// Verwijder de class .show van het pop-up en de overlay
		popupContent.classList.remove('show');
        overlay.classList.remove('show'); 
	});

    overlay.addEventListener('click',function() {
        // Verwijder de class .show van het pop-up en de overlay
        overlay.classList.remove('show');
        popupContent.classList.remove('show');
    })
}


// ====== Carrousel ======
const homeBackgrounds = ['url("../img/hero/hero_home1.jpg")', 'url("../img/hero/hero_home2.jpg")', 'url("../img/hero/hero_home3.jpg")'];
const heroHome = d.querySelector('section.heroHome');

const shopBackgrounds = ['url("../../img/hero/hero_shop1.jpg")', 'url("../../img/hero/hero_shop2.jpg")', 'url("../../img/hero/hero_shop3.jpg")'];
const heroShop = d.querySelector('section.heroShop');

const pager = d.querySelectorAll('.pager span');
const prevArrow = d.querySelector('.prev');
const nextArrow = d.querySelector('.next');
let currentBackgroundIndex = 0;

let autoChangeInterval;
let inactivityTimeout;
const autoChangeDelay = 5000; // 5 seconden
const inactivityTimeoutDelay = 5000; // 10 seconden na interactie

// Verwissel de afbeelding
function changeBackground(index) {
    // Controleer of heroHome bestaat voordat je de achtergrondafbeelding instelt
    if (heroHome) {
        heroHome.style.backgroundImage = homeBackgrounds[index % homeBackgrounds.length];
    }

    // Controleer of heroShop bestaat voordat je de achtergrondafbeelding instelt
    if (heroShop) {
        heroShop.style.backgroundImage = shopBackgrounds[index % shopBackgrounds.length];
    }

    // Markeer de huidige pager als actief voor de home pagina
    if (heroHome) {
        pager.forEach((span, i) => {
            const adjustedIndex = i % homeBackgrounds.length;
            span.classList.toggle('active', adjustedIndex === index % homeBackgrounds.length);
        }); 
    }

    // Markeer de huidige pager als actief voor de shop pagina
    if (heroShop) {
        pager.forEach((span, i) => {
            const adjustedIndex = i % shopBackgrounds.length;
            span.classList.toggle('active', adjustedIndex === index % shopBackgrounds.length);
        }); 
    }
}

// Functie om naar de vorige achtergrondafbeelding te navigeren
function prevBackground() {
    if (currentBackgroundIndex > 0) {
        currentBackgroundIndex--;
    } else {
        currentBackgroundIndex = homeBackgrounds.length + shopBackgrounds.length - 1;
    }
    changeBackground(currentBackgroundIndex);
}

// Functie om naar de volgende achtergrondafbeelding te navigeren
function nextBackground() {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % (homeBackgrounds.length + shopBackgrounds.length);
    changeBackground(currentBackgroundIndex);
}

// Functie om de inactiviteitstimer te resetten
function resetInactivityTimeout() {
    clearTimeout(inactivityTimeout); // Stop het huidige timeout
    inactivityTimeout = setTimeout(() => {
        resetAutoChange(); // Start het automatische wisselinterval na de inactiviteitstijd
    }, inactivityTimeoutDelay);
}

// Functie om de automatische wissel te stoppen en later weer te starten
function resetAutoChange() {
    clearInterval(autoChangeInterval); // Stop het huidige interval
    autoChangeInterval = setInterval(() => {
        nextBackground();
    }, autoChangeDelay); // Start het interval opnieuw na de vertraging
}

// Voeg event listeners toe voor de pagers
pager.forEach((span, index) => {
    span.addEventListener('click', () => {
        changeBackground(index); // Wijzig de achtergrondafbeelding wanneer er op een pager wordt geklikt
        clearInterval(autoChangeInterval); // Stop het automatische wisselinterval
        resetInactivityTimeout(); // Reset de inactiviteitstimer
    });
});

// Voeg event listeners toe voor de pijlen naar de vorige en volgende afbeelding
if (prevArrow && nextArrow) {
    prevArrow.addEventListener('click', () => {
        prevBackground();
        clearInterval(autoChangeInterval); // Stop het automatische wisselinterval
        resetInactivityTimeout(); // Reset de inactiviteitstimer
    });
    nextArrow.addEventListener('click', () => {
        nextBackground();
        clearInterval(autoChangeInterval); // Stop het automatische wisselinterval
        resetInactivityTimeout(); // Reset de inactiviteitstimer
    });
}

// Stel de eerste achtergrondafbeelding in wanneer de pagina wordt geladen
changeBackground(currentBackgroundIndex);

// Start de automatische wissel
resetAutoChange();


// ====== Boeken vullen in shop ====== 
function initBoeken() {

    // === Browser & Object sniffing ===
    if(!d.getElementById('dynamicBoeken')) return false;
    if(typeof boeken == 'undefined') return false;
    const dynamicBoeken = d.getElementById('dynamicBoeken');
    
    const aantalBoeken = 12;  // Aantal boeken om weer te geven

    // === Initialisatie & DOM Manipulatie ===
    function createBoekElement(boek) {
        // Maak het element <article> aan en ken class toe
        const dynamicBoekInhoud = d.createElement('article');
        dynamicBoekInhoud.setAttribute('class', 'dynamicBoekInhoud');

        // Maak het element <div> aan en ken een class toe
        const titelContainer= d.createElement('div')
        titelContainer.setAttribute('class', 'titelContainer')
        // Maak het <h3> element aan en ken een id toe
        const boekjeTitel = d.createElement('h3');
        boekjeTitel.setAttribute('id', 'titel');

        // Maak het element <div> aan en ken een class toe
        const imgFront = d.createElement('div')
        imgFront.setAttribute('class', 'imgFront')

        // Maak het <img> element aan
        const dynamicFrontImg = d.createElement('img');

        // Maak het <span> element aan en ken een class toe
        const dynamicBoekjeButton = d.createElement('span');
        dynamicBoekjeButton.setAttribute('class', 'button');

        // Maak het <div> element aan en ken een class toe
        const samenvatting = d.createElement('div');
        samenvatting.setAttribute('class', 'truncateMulti');

        // Maak het <p> element aan, ken een class en tekstinhoud toe
        const dynamicBoekprijs = d.createElement('p');
        dynamicBoekprijs.setAttribute('class', 'boekprijs');
        dynamicBoekprijs.textContent = "Prijs: ";

        // Maak het <span> element aan en ken een class toe
        const dynamicPrijs = d.createElement('span');
        dynamicPrijs.setAttribute('class', 'prijs');

        // voeg de elementen toe
        dynamicBoekInhoud.appendChild(titelContainer);
        titelContainer.appendChild(boekjeTitel)
        dynamicBoekInhoud.appendChild(imgFront);
        imgFront.appendChild(dynamicFrontImg);
        dynamicBoekInhoud.appendChild(dynamicBoekjeButton);
        dynamicBoekInhoud.appendChild(samenvatting);
        dynamicBoekInhoud.appendChild(dynamicBoekprijs);
        dynamicBoekprijs.appendChild(dynamicPrijs);
        dynamicBoeken.appendChild(dynamicBoekInhoud);

        // Update de inhoud van het boek
        boekjeTitel.textContent = boek.titel + ' - ' + boek.auteur;
        dynamicFrontImg.src = '../../../img/boek/' + boek.coverImage;
        dynamicFrontImg.alt = boek.titel;
        dynamicBoekjeButton.textContent = boek.titel;
        samenvatting.innerHTML = boek.synopsis;
        dynamicPrijs.innerHTML = '&euro; ' + boek.prijs.toFixed(2).replace('.',',');
    }

    // Voeg de eerste 12 boeken toe
    for (let i = 0; i <= aantalBoeken; i++) {
        if (boeken[i]) {  // Controleer of het boek bestaat
            createBoekElement(boeken[i]);
        }
    }
}

// ====== recepten pagina voorzien van recepten ======
function initRecepten() {
    console.log('initRecepten');
    // return false;

    // === Browser & Object sniffing ===
    if(!d.getElementById('dynamicRecepten')) return false;
    if(typeof recepten == 'undefined') return false;
    const dynamicRecepten = d.getElementById('dynamicRecepten');
    // Aantal recepten om weer te geven
    const aantalRecepten = 10;  

    // === Initialisatie & DOM Manipulatie ===
    function createReceptElement(recept) {

        console.log(recept);
        // Maak het element <article> aan en ken class toe
        const dynamicCardRcp = d.createElement('article');
        dynamicCardRcp.setAttribute('class', 'cardRcp');

        // Maak het element <a> aan
        const rcpLink= d.createElement('a');
        rcpLink.setAttribute('href', '../../pages/recepten/recept_' + recepten.indexOf(recept) + '.html');
        
        // Maak het <div> element aan en ken een class toe
        const rcpName = d.createElement('div');
        rcpName.setAttribute('class', 'rcpName');

        // Maak het element <h3> aan
        const receptNaam = d.createElement('h3');
        receptNaam.textContent = recept.gerechtNaam;
    
        // Maak het element <ul> aan en ken een class toe
        const foodIcons = d.createElement('ul');
        foodIcons.setAttribute('class', 'foodIcons');

        // Maak het element <li> aan voor iconBereiding
        const iconBereiding = d.createElement('li');
        iconBereiding.setAttribute('class', 'iconBereiding');
        const imgBereiding = d.createElement('img');
        imgBereiding.src = '../../../img/logos/' + recept.bereiding + '.svg';
        imgBereiding.alt = recept.bereiding;
        iconBereiding.appendChild(imgBereiding);

        // Maak het element <li> aan voor iconCategorie
        const iconCategorie = d.createElement('li');
        iconCategorie.setAttribute('class', 'iconCategorie');
        const imgCategorie = d.createElement('img');
        imgCategorie.src = '../../../img/logos/' + recept.categorie + '.svg';
        imgCategorie.alt = recept.categorie;
        iconCategorie.appendChild(imgCategorie);

        // Maak het element <li> aan aan voor iconTijd
        const iconTijd = d.createElement('li');
        iconTijd.setAttribute('class', 'iconTijd');
        const imgTijd = d.createElement('img');
        imgTijd.src = '../../../img/logos/tijd.svg';
        imgTijd.alt = 'tijd';
        iconTijd.appendChild(imgTijd);

        // Voeg de iconen toe aan foodIcons
        foodIcons.appendChild(iconBereiding);
        foodIcons.appendChild(iconCategorie);
        foodIcons.appendChild(iconTijd);

        // Maak het <div> element aan en ken een class toe
        const time = d.createElement('div');
        time.setAttribute('class', 'time');
        const minuten = d.createElement('span');
        minuten.textContent = recept.tijd + ' min';
        time.appendChild(minuten);

        // Maak het lijst van 5 ingredienten aan
        const vijfIngredienten = recept.ingredienten.split('\n').slice(0, 5);
        const ingredientenList = d.createElement('ul');
        ingredientenList.setAttribute('class', 'ingredients');

        // Voeg 5 ingrediënten toe aan de lijst
        vijfIngredienten.forEach(ingredient => {
            const ingredientItem = d.createElement('li');
            ingredientItem.textContent = ingredient;
            ingredientenList.appendChild(ingredientItem);
        });

        // Maak het element <img> aan en ken een class toe
        const gerechtImg = d.createElement('img');
        gerechtImg.setAttribute('class', 'rcp');
        gerechtImg.src = '../../../img/recepten/' + recept.image;
        gerechtImg.alt = recept.gerechtNaam;

        // Maak het element <span> aan en ken een class toe
        const rcpButton = d.createElement('span');
        rcpButton.setAttribute('class', 'button');
        rcpButton.textContent = 'volledig recept';
        
        // voeg de elementen toe
        dynamicCardRcp.appendChild(rcpLink);
        rcpLink.appendChild(rcpName);
        rcpName.appendChild(receptNaam);
        rcpName.appendChild(foodIcons);
        rcpName.appendChild(time);
        rcpLink.appendChild(ingredientenList);
        rcpLink.appendChild(gerechtImg);
        rcpLink.appendChild(rcpButton);        
        dynamicRecepten.appendChild(dynamicCardRcp);  
    }

    // Voeg de recepten toe
    for (let i = 1; i <= aantalRecepten; i++) { // Begin bij 1 om de lege placeholder te skippen
        if (recepten[i]) {  // Controleer of het recept bestaat
            createReceptElement(recepten[i]);
        }
    }
}

function initGerecht() {
    console.log('initGerecht');

    // === Browser & Object sniffing ===
    if (!d.getElementById('dynamicGerecht')) return false;
    if (typeof recepten === 'undefined') return false;

    const dynamicGerecht = d.getElementById('dynamicGerecht');

    // Functie om het paginanummer uit de URL te halen
    function getPaginanummerFromURL() {
        const url = window.location.pathname;
        const paginaMatch = url.match(/recept_(\d+)\.html/);
        return paginaMatch ? parseInt(paginaMatch[1], 10) : null;
    }

    // Paginanummer uit de URL halen
    const paginanummer = getPaginanummerFromURL();

    // Het juiste recept zoeken in de recepten database
    const huidigRecept = recepten[paginanummer]; // Directe mapping aangezien index 0 een placeholder is

    // Als het recept niet wordt gevonden, stop de uitvoering
    if (!huidigRecept) {
        console.error('Recept niet gevonden!');
        return false;
    }

    // Roep createHeroImageAndName aan om de achtergrondafbeelding en receptnaam in te stellen
    createHeroImageAndName(huidigRecept, paginanummer);

    // Functie om hero afbeelding en naam van het recept in te stellen
    function createHeroImageAndName(gerecht, paginanummer) {
        const heroClass = `section.heroRecept${paginanummer}`;
        const heroSection = d.querySelector(heroClass);
        if (heroSection) {
            heroSection.style.backgroundImage = `url('../../../img/hero/hero_${gerecht.image}')`;
            console.log(`Hero img section class is: ${heroClass}`);
        } else {
            console.error(`Hero section class ${heroClass} not found!`);
        }

        const receptNaamDiv = d.getElementById('receptNaamDiv');
        if (receptNaamDiv) {
            const receptNaamH2 = d.createElement('h2');
            receptNaamH2.textContent = gerecht.gerechtNaam;
            receptNaamDiv.appendChild(receptNaamH2);
            console.log(`Recept naam is: ${gerecht.gerechtNaam}`);
        } else {
        console.error('Element met ID receptNaamDiv niet gevonden');
        }
    }

    // === Initialisatie & DOM Manipulatie ===
    function createGerechtElement(gerecht) {
        console.log(gerecht);

        // Maak het element <section> aan en ken class toe
        const gerechtInhoud = d.createElement('section');
        gerechtInhoud.setAttribute('class', 'gerecht');

        // Maak het element <div> aan en ken class toe
        const rcpName = d.createElement('div');
        rcpName.setAttribute('class', 'rcpName');

        // Maak het <h3> element aan en zijn tekstinhoud
        const ingredientenH3 = d.createElement('h3');
        ingredientenH3.textContent = 'Ingrediënten';

        // Maak het <ul> element aan en ken een class toe
        const foodIcons = d.createElement('ul');
        foodIcons.setAttribute('class', 'foodIcons');

        // Maak het element <li> aan voor iconBereiding
        const iconBereiding = d.createElement('li');
        const imgBereiding = d.createElement('img');
        imgBereiding.src = '../../../img/logos/' + gerecht.bereiding + '.svg';
        imgBereiding.alt = gerecht.bereiding;
        iconBereiding.appendChild(imgBereiding);

        // Maak het element <li> aan voor iconCategorie
        const iconCategorie = d.createElement('li');
        const imgCategorie = d.createElement('img');
        imgCategorie.src = '../../../img/logos/' + gerecht.categorie + '.svg';
        imgCategorie.alt = gerecht.categorie;
        iconCategorie.appendChild(imgCategorie);

        // Maak het element <li> aan voor iconTijd
        const iconTijd = d.createElement('li');
        const imgTijd = d.createElement('img');
        imgTijd.src = '../../../img/logos/tijd.svg';
        imgTijd.alt = 'tijd';
        iconTijd.appendChild(imgTijd);

        // Voeg de iconen toe aan foodIcons
        foodIcons.appendChild(iconBereiding);
        foodIcons.appendChild(iconCategorie);
        foodIcons.appendChild(iconTijd);

        // Maak het <div> element aan en ken een class toe
        const time = d.createElement('div');
        time.setAttribute('class', 'time');
        const minuten = d.createElement('span');
        minuten.textContent = gerecht.tijd + ' min';
        time.appendChild(minuten);

        // Voeg de elementen toe aan rcpName
        rcpName.appendChild(ingredientenH3);
        rcpName.appendChild(foodIcons);
        rcpName.appendChild(time);

        // Maak het <div> element aan voor de ingrediënten en ken een class toe
        const volIngredienten = d.createElement('div');
        volIngredienten.setAttribute('id', 'volIngredienten');
        volIngredienten.setAttribute('class', 'ingredienten');

        // Maak de lijst van ingrediënten aan
        const ingredienten = gerecht.ingredienten.split('\n').map(ingredient => ingredient.trim());
        const ingredientenLijst = d.createElement('ul');

        // Voeg alle ingrediënten toe aan de lijst
        ingredienten.forEach(ingredient => {
            const ingredientItem = d.createElement('li');
            ingredientItem.textContent = ingredient;
            ingredientenLijst.appendChild(ingredientItem);
        });

        // Voeg de ingrediëntenlijst toe aan volIngredienten
        volIngredienten.appendChild(ingredientenLijst);

        // Maak het <div> element aan voor de bereidingswijze en ken een class toe
        const bereidingswijze = d.createElement('div');
        bereidingswijze.setAttribute('class', 'bereidingswijze');

        // Maak het <h3> element aan en zijn tekstinhoud
        const bereidingH3 = d.createElement('h3');
        bereidingH3.textContent = 'Bereidingswijze';

        // Voeg het h3 element toe aan bereidingswijze
        bereidingswijze.appendChild(bereidingH3);

        // Maak het <p> element aan en voeg de bereidingswijze toe
        const bereidingswijzeP = gerecht.bereidingswijze.split('\n').map(paragraaf => {
            const p = d.createElement('p');
            p.textContent = paragraaf.trim();
            return p;
        });

        // Voeg de paragrafen toe aan de bereidingswijze div
        bereidingswijzeP.forEach(paragraaf => bereidingswijze.appendChild(paragraaf));

        // Voeg alle elementen toe aan gerechtInhoud
        gerechtInhoud.appendChild(rcpName);
        gerechtInhoud.appendChild(volIngredienten);
        gerechtInhoud.appendChild(bereidingswijze);
        dynamicGerecht.appendChild(gerechtInhoud);
    }

    createGerechtElement(huidigRecept);
}        
        




