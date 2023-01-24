window.addEventListener('DOMContentLoaded', function () {
	'use strict';/* JS сработает когда  DOM дерево подгрузится РЕКОМЕНДУЕТСЯ*/

    const body = document.querySelector('body'),//создаем поле
        wrapper = document.createElement('div');
        body.appendChild(wrapper).classList.add('wrapper');

        for(let i = 1; i <= 9; i++) {
            const cells = document.createElement('div')
            wrapper.appendChild(cells).classList.add('cells')
            cells.textContent = 'X'
        }
        
























})