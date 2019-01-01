// Как создать компонент Button
var buttonStyle = { margin: '10px 10px 10px 0' };
const Button = (props) => <button className="btn btn-default" style={buttonStyle} onClick={this.props.handleClick}>{this.props.label}</button>;

// Зачем писать отдельно компонент для кнопки? Можно же просто использовать элемент <button>. 
// Компонент будет обертывать button и его стили. В основном кнопки на сайте делают с одними стилями, 
// имеет смысл засунуть обьект стиля внутрь компонента и наштамповать экземпляров этого компонента - кнопок.
// Компонент Button получает 2 свойства из компонента - парента 
// свойство  label - это надпись на кнопке
// свойство handleClick - это калбек функция, которая вызывается когда юзер тычет кнопку
    