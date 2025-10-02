import {videoInfos} from './data/videoInfo.js';
import { renderHTML } from './data/renderHtml.js';
renderHTML();

const menuButton = document.querySelector('.js-menu-button');
const sideBar = document.querySelector('.js-left-side-bar');
const sideBarLink = document.querySelectorAll('.js-sidbar-link');
const mainContent = document.querySelector('.js-video-grid');
    menuButton.addEventListener('click', () => {
        sideBar.classList.toggle('js-left-sidebar');
        sideBarLink.forEach(link => {
            link.classList.toggle('js-sidebar-link');
        });
        mainContent.classList.toggle('js-mainContent');
    });
const homebtn = document.querySelector('.homebtn');
homebtn.addEventListener('click',() => {
    renderHTML();
});