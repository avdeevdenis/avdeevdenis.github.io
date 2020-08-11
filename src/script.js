const host = 'https://avdeevdenis.github.io/';
const cardsSelector = document.getElementsByClassName('cards')[0];
const cardsContent = [
    { name: 'SberLenta parser', link: 'tools-parser-api' },
    { name: 'Web wiki parser', link: 'web-wiki-parser' },
    { name: 'Frontend drug parser', link: 'frontend-drug-parser' },
    { name: 'Circles animation', link: 'circles-animation' },
    { name: 'Lego blocks', link: 'lego-blocks' },
    { name: 'Vk parser', link: 'vk-parser' },
    { name: 'React vk', link: 'https://react-vk.herokuapp.com/' },
    { name: 'Home', link: 'home' },
    { name: 'Header line', link: 'header-line' },
    { name: 'Waxon', link: 'waxon' },
    { name: 'Progress', link: 'progress' },
];

document.addEventListener('DOMContentLoaded', function() {
    onDomContentLoaded();
}, false);

function onDomContentLoaded() {
    setCorrectVh();
    generateCards();
}

window.addEventListener('resize', () => {
    setCorrectVh();
});

function setCorrectVh() {
    let vh = window.innerHeight * 0.01;

    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function getLink(link) {
    return link.startsWith('http') ? link : host + link;
}

function generateCards() {
    const cards = document.createElement('div');
    cards.classList.add('cards');

    cardsContent.forEach(({ name, link }) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardLink = document.createElement('a');
        cardLink.classList.add('card__link');
        cardLink.setAttribute('href', getLink(link));
        cardLink.setAttribute('target', 'blank');
        cardLink.setAttribute('title', 'Открыть в новой вкладке');

        const cardFavicon = document.createElement('img');
        cardFavicon.classList.add('card__favicon');
        cardFavicon.setAttribute('src', 'https://www.google.com/s2/favicons?domain=' + getLink(link));

        // const cardPreview = document.createElement('img');
        // cardPreview.classList.add('card__preview');
        // cardPreview.setAttribute('src', 'https://mini.s-shot.ru/1024x768/JPEG/1024/Z100/?' + getLink(link));
        // cardPreview.setAttribute('src', 'https://shrinktheweb.snapito.io/v2/webshot/spu-ea68c8-ogi2-3cwn3bmfojjlb56e?size=800x0&screen=1024x768&url=' + encodeURIComponent(getLink(link)));

        cardLink.appendChild(cardFavicon);
        cardLink.innerHTML += name;
        // cardLink.appendChild(cardPreview);

        card.appendChild(cardLink);

        cards.appendChild(card);
    });

    cardsSelector.innerHTML = cards.innerHTML;
}
