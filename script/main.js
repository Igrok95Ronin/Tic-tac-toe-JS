window.addEventListener('DOMContentLoaded', function () {
	'use strict';/* JS сработает когда  DOM дерево подгрузится РЕКОМЕНДУЕТСЯ*/

    const body = document.querySelector('body'),//создаем поле
        wrapper = document.createElement('div');
        body.appendChild(wrapper).classList.add('wrapper');

        const svgLine = `<svg class="svgLine" height="216" width="216" >
        <rect width='216' height='10' fill="#0da192" x="0" y="67" rx="5" ry="10"> </rect>
        <rect width='216' height='10' fill="#0da192" x="0" y="139" rx="5" ry="10"> </rect>

        <rect width='10' height='216' fill="#0da192" x="67" y="0" rx="5" ry="10"> </rect>
        <rect width='10' height='216' fill="#0da192" x="139" y="0" rx="5" ry="10"> </rect>
        </svg> `//границы ячеек из svg

        const svgX = `<svg class="svgX" width="36" height="36">
        <line x1="6" y1="6" x2="30" y2="30" stroke-linecap="round" ></line>
        <line x1="6" y1="30" x2="30" y2="6" stroke-linecap="round" ></line>
        </svg>`// рисуем Х из svg

        wrapper.innerHTML = svgLine



        for(let i = 1; i <= 9; i++) {//создаем ячейки
            const cells = document.createElement('div')
            wrapper.appendChild(cells).classList.add('cells')
            cells.innerHTML = svgX
        }


        
























})