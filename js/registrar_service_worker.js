export function registrar_service_worker(){
    if (navigator.serviceWorker) {
        navigator.serviceWorker.register("./sw.js")
        .then(console.log(`%c Service Worker instalado`,"color:green;"))
        .catch(error=>console.log(`%c No se instaló el Service Worker, error: ${error}`,"color:red;"))
    }
}