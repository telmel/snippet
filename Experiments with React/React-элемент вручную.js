// Как создать React-элемент, вручную набрав обьект
var second = 
{
$$typeof: Symbol.for('react.element'),
"type": "h1",
"key": null,
"ref": null,
"props": {"children": "Important"},
"_owner": null,
"_store": {}
}
// Этот обьект - инструкция, которая говорит реакту как строить DOM элемент <h1>Important</h1>
ReactDOM.render(second, document.getElementById('root'));