function Diagram(selector, options, slices) {
	// Find a DOM object representing the HTML element with the supplied selector
	// create a property called element
	// This DOM object is assigned to the element property
	this.element = document.querySelector(selector);

	// Some default values in case nothing is supplied
	const defaultOptions = {
    size: 200,
    circleColor: '#b3c9e0'
	};

	// Merge options with default ones
	options = Object.assign(defaultOptions, options);
	
  
	// сначала померяем ширину контейнера
	options.size = this.element.clientWidth; //323
	
  // подсчитываем динамически координаты центральной точки контейнера
	options.centerX = this.element.clientWidth / 2;   //  это координата центральной точки
	options.centerY = this.element.clientWidth / 2;     //  это координата центральной точки
	
	options.radius = options.centerX / 2;  // здесь считаем радиус это 125 в данном случае
	options.step = 2 * Math.PI / slices.length;  // это значение может быть 1.57 а может 0.26
	options.angle = -90 * Math.PI / 180;  // это значение всегда равно -1.57
  
	// Заполнили все настройки
	this.options = options;


	// SVG is injected into the DOM element with JavaScript
	this.element.innerHTML = `<svg height="${options.size}" width="${options.size}"></svg>`;
  
	slices.forEach(take);
	
	function take(element){
	
	options.startX = options.centerX + options.radius * Math.cos(options.angle);
	options.startY = options.centerY + options.radius * Math.sin(options.angle);
	options.angle = options.angle + options.step;
	options.endX = options.centerX + options.radius * Math.cos(options.angle);
	options.endY = options.centerY + options.radius * Math.sin(options.angle);
	
	// if the slice is more than 180%, take the large arc (the long way around) Not working!!!!!
	options.largeArcFlag = 0;
	
	//   координаты начальной точки дуги эллипса Move to this point
	//  радиус дуги эллипса, радиус дуги эллипса, угол поворота дуги эллипса относительно оси абцисс
	const pathData = `
	M ${options.startX} ${options.startY}    
	A ${options.radius} ${options.radius} 0 ${options.largeArcFlag} 1 ${options.endX} ${options.endY}  
	L ${options.centerX} ${options.centerY}
	Z
	`;
	
	const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	pathEl.setAttribute('d', pathData);
	
	var random_color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
	pathEl.setAttribute('fill', random_color);
	
	pathEl.setAttribute('stroke','black');
	pathEl.setAttribute('stroke-width','5');
	document.querySelector('svg').appendChild(pathEl);
	};
  
}