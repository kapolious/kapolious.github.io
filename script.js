/*
 *  ITW - tvorba webových strániek, projekt 2 
 *  Karolína Pirohová, xpiroh02
 */

// funkcie slúžiace na zmenu profilového obrázku
function doodlesOn() {
    document.images['face'].src = "img/medoodle.png";
}
function doodlesOff() {
    document.images['face'].src = "img/me.png";
}

// funkcia slúžiaca na presun do sekcie kontaktov pri tlačítku "contact me for more information"
function scrollToContact() {
    const contactSection = document.querySelector('#contactMe');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}

// funkcia slúžiaca na spracovanie kontaktného formuláru
function submitForm() {
    // získanie formuláru a všetkých elementov
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // kontrola valídnych vstupov
    if (nameInput.value && emailInput.value && messageInput.value) {
        // po stlačení SEND MESSAGE zmenenie tlačítka
        const sendButton = form.querySelector('button[type="submit"]');
        sendButton.style.backgroundColor = "#6C9A8B";
        sendButton.style.color = "white";
        sendButton.textContent = "MESSAGE SENT";
    }
}

function popup() {
    document.getElementById("messageSent")?.classList.toggle("open");

    // zabránenie predvolenému overeniu
    setTimeout(() => {
        document.querySelectorAll("input[type='submit']")?.forEach((btn) => btn.disabled = true);
    }, 0);

    setTimeout(() => {
        document.getElementById("messageSent")?.classList.toggle("open");
        document.querySelectorAll("input[type='submit']")?.forEach((btn) => btn.disabled = null);
    }, 2000);
}
