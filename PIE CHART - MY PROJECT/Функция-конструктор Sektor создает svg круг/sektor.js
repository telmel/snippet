function Sektor(selector, options) {
// Find a DOM object representing the HTML element with the supplied selector
// create a property called element. This DOM object is assigned to the element property
  this.element = document.querySelector(selector);

// Some default values in case nothing is supplied
  const defaultOptions = {
    size: 100,
    circleColor: '#b3c9e0'
  };

// Merge options with default ones
  options = Object.assign(defaultOptions, options);
	
// Circle dimensions
  options.center = options.size / 2;
  options.radius = options.center;
  
// create a property called options
  this.options = options;

// Get SVG
  const svg = this.getCircle();

// SVG is injected into the DOM element with JavaScript
  this.element.innerHTML = svg;
}

// Assigning a method to the constructor's prototype. This method generates SVG
Sektor.prototype.getCircle = function() {
  const options = this.options;
  return `
  <svg class='Sektor' viewBox='0 0 ${options.size} ${options.size}'> 
  <circle class='Sektor-circle' fill=${options.circleColor} cx='${options.center}' cy='${options.center}' r='${options.radius}' />
  </svg>
  `;
};


var sektor = new Sektor( '.example-one', { circleColor: '#7da385' } );