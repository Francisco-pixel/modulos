/* Crear nodo */
export {crearNodo};
let d=document,
crearNodo = ({elemento, setAtributo, atributo}) => {
    let node = d.createElement(`${elemento}`);
    node.setAttribute(atributo, `${setAtributo}`);
    d.body.appendChild(node);
}
crearNodo({
    "elemento":"div",
    "setAtributo":"load",
    "atributo":"class"
})
crearNodo({
    "elemento":"div",
    "setAtributo":"btn",
    "atributo":"class"
})
crearNodo({
    "elemento":"p",
    "setAtributo":"text",
    "atributo":"class"
})
crearNodo({
    "elemento":"div",
    "setAtributo":"btn-subir ocultar--btn",
    "atributo":"class"
})
crearNodo({
    "elemento":"div",
    "setAtributo":"conexion",
    "atributo":"class"
})
crearNodo({
    "elemento":"div", 
    "setAtributo":"spin",
    "atributo":"class"
})
crearNodo({
    "elemento":"div", 
    "setAtributo":"alerta",
    "atributo":"class"
})
