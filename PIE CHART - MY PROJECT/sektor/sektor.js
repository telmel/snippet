function Sektor(selector, options) {
// находим DOM объект. Создаем свойство element в новом конструируемом обьекте
// Теперь сохраним этот объект в свойство element  
  this.element = document.querySelector(selector);

// обьект с дефолтными параметрами этого круга
  const defaultOptions = {
    size: 100,
    stroke: 0,
    arc: false,
    angle: 260,
    sectorColor: '#7336ed',
    circleColor: '#d1d2d3',
    fillCircle: true
  };

// Влить в дефолтные значения полученные в конструктор аргументы
  options = Object.assign(defaultOptions, options);

// Подсчитать центр круга и радиус будущего круга и вписать в обьект как свойства
  options.center = options.size / 2;
  options.radius = options.center;

// Записываем в итоге полученный обьект с параметрами круга в свойство нового конструируемого обьекта 
  this.options = options;

// Создаем svg 
  const svg =
    `<svg class='Sektor' viewBox='0 0 ${options.size} ${options.size}'>
      ${this.getCircle()}
      ${this.getSector()}	  
    </svg>`

// В новом конструируемом обьекте хранится DOM-элемент
// Теперь надо записать в свойство DOM-элемента всю разметку и содержание svg 
  this.element.innerHTML = svg;

// В новом конструируемом обьекте создаем свойство sector
// достать DOM-элемент откуда-то из глубины обьекта element
// то есть мы ковыряемся в том диве который пришел в конструктор как аргумент
// в итоге находим в нем DOM-элемент .Sektor-sector
  this.sector =  this.element.querySelector('.Sektor-sector');
}

Sektor.prototype.getSector = function() {
// получаем параметрический обьект из нового конструируемого обьекта и вписываем его в свойство options
  const options = this.options;

  // Arc angles
  const firstAngle = options.angle > 180 ? 90 : options.angle - 90;
  const secondAngle = -270 + options.angle - 180;

  // Arcs
  const firstArc = this.getArc(firstAngle, options);
  const secondArc = options.angle > 180 ? this.getArc(secondAngle, options) : '';

  // start -> starting line
  // end -> will path be closed or not
  let end = 'z';
  let start = `M${options.center},${options.center} L${options.center},${options.stroke / 2}`;
  
  const d = `${start} ${firstArc} ${secondArc} ${end}`;

  return `<path class='Sektor-sector' fill=${options.sectorColor} d='${d}' />`;
};

Sektor.prototype.getCircle = function() {
// получаем параметрический обьект из нового конструируемого обьекта и вписываем его в свойство options 
  const options = this.options;
  const circleFill = options.fillCircle || !options.arc ? options.circleColor : 'none';
  return `<circle class='Sektor-circle' fill=${circleFill} cx='${options.center}' cy='${options.center}' r='${options.radius}' />`;
};

// Generates SVG arc string
// что происходит при запуске метода getArc 
// 
Sektor.prototype.getArc = function(angle) {
	
// получаем параметрический обьект из нового конструируемого обьекта и вписываем его в свойство options 
  const options = this.options;
// получаем координату x - берем центр круга и 
  const x = options.center + options.radius * Math.cos(this.radians(angle));
  // получаем координату y - берем центр круга и 
  const y = options.center + options.radius * Math.sin(this.radians(angle));

  return `A${options.radius},${options.radius} 1 0 1 ${x},${y}`
};

// Converts from degrees to radians.
Sektor.prototype.radians = function(degrees) {
  return degrees / 180 * Math.PI;
};