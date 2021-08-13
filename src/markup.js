import menuList from './menu.json';
import menuTempates from './templates/menuTempates.hbs';


const gallery = document.querySelector('.js-menu');

function createMenu (menuList){
	return menuList.map(menuTempates).join('')
}

const itemGallery = createMenu(menuList)

gallery.insertAdjacentHTML('beforeend',itemGallery )