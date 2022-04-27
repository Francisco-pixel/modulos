let d=document,
w=window;
/* Crear spin */
export let loaderStyle = ({formato="150px", border="2px",atributo=".spin"}) => {
    let node=d.querySelector(atributo)
    node.style.border = `${border} solid #ddd`;
    node.style.borderTop = `${border} solid #2583c5`;
    node.style.width = `${formato}`;
    node.style.height = `${formato}`;
    node.style.borderRadius = `50%`;
}
loaderStyle({
    "formato":"150px",
    "border":"2px",
    "atributo":".spin"
});
w.addEventListener("DOMContentLoaded", () => {
    if (d.querySelector(".load")) {
        d.querySelector(".load").style.visibility = "hidden";
        d.querySelector(".load").style.opacity = "0";
    }
})