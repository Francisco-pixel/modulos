export {padreHijo}
let d=document,
padreHijo = ({padre, hijo}) => {
    if(d.querySelector(padre)){
        d.querySelector(padre).appendChild(d.querySelector(hijo))
    }
}
padreHijo({
    "padre":".load",
    "hijo":".spin"
})
padreHijo({
    "padre":".load", 
    "hijo":".text"
})