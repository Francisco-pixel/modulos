export let alerta = ({atributo=".alerta",msn="No haz puesto un mensaje", color="#fff", sh,bg="#949494"}) => {
    let conexion=document.querySelector(atributo);
    conexion.innerHTML = `${msn}`;
    conexion.style.top = "0%";
    conexion.style.color = `${color}`;
    conexion.style.textShadow = `${sh}`;
    conexion.style.background = `${bg}`;
    conexion.style.padding = `1rem`;
    conexion.style.textAlign = `center`;
    conexion.style.position = `fixed`;
    conexion.style.top = `0`;
    conexion.style.transition = `all 0.5s ease`;
    conexion.style.width = `100%`;
    conexion.style.zIndex = `2`;
    setTimeout(() => {
        conexion.style.top = `-100%`;
        conexion.style.color = ``;
        conexion.style.textShadow = ``;
        conexion.style.background = ``;
    }, 3000);
}