let d=document;
export {setText}
let setText=({atributo,text})=>{
    if(d.querySelector(atributo)){
        d.querySelector(atributo).innerHTML=text;
    }
}
setText({
    "atributo":".text",
    "text":"Please wait a minute don`t close to window"
})
setText({
    "atributo":".btn-subir",
    "text":`<i class="fas fa-chevron-up up"></i>`
})