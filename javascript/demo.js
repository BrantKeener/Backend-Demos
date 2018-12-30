
const nav = document.querySelector('nav');
const player = document.querySelector('#videos');

const clickChecker = event => {
    const target = event.target.id;
    switch(target) {
        case 'liri-link':
        player.innerHTML = 
            `<video class="rounded" width="800" height="600" controls>
                <source src="video/Liri-Bot Demonstration_Medium.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>`;
            break;
        case 'constructor-link':
        player.innerHTML =
            `<video class="rounded" width="800" height="600" controls>
                <source src="video/Constructor Word Demo_Medium.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>`
        break;
    };
};

nav.addEventListener('click', clickChecker);