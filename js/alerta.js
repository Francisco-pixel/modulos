export {alerta};
let alerta = ({msn="Mensaje de alerta", color="#fff", sh,bg="#949494"}) => {
    let alert=document.createElement("p");
    document.body.appendChild(alert)
    alert.innerHTML = `${msn}`;
    alert.style.top = "0%";
    alert.style.color = `${color}`;
    alert.style.textShadow = `${sh}`;
    alert.style.background = `${bg}`;
    alert.style.padding = `1rem`;
    alert.style.textAlign = `center`;
    alert.style.position = `fixed`;
    alert.style.top = `0`;
    alert.style.transition = `top 1s`;
    alert.style.width = `100%`;
    alert.style.zIndex = `2`;
    setTimeout(() => {
        alert.style.top = `-100%`;
    }, 3000);
}
