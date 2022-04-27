import { alerta } from "./alerta.js";
let d=document;
export let copiarText = () => {
    d.addEventListener("click", e => {
        if (e.target.matches(".copiar")) {
            let input = d.createElement("input");
            d.body.appendChild(input)
            input.setAttribute("value", e.target.innerText || e.target.value)
            input.select();
            d.execCommand("copy")
            d.body.removeChild(input);
            alerta({
                "atributo": ".alerta",
                "msn": `"Texto copiado en el portapapeles"`,
                "color": "#fff",
                "bg": "#343434"
            });
        }

    })

}