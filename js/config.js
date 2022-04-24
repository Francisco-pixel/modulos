import { c, d } from "./data.js";
import { conexionInternet } from "./conexionInternet.js";
import { tiempo } from "./fecha.js";
import { crearNodo } from "./crearNodo.js";
import { loaderStyle } from "./loader.js";
import { padreHijo } from "./padreHijo.js";
import { setText } from "./setText.js";
import { btnUp } from "./botonSubir.js";
import { copiarText } from "./copiarText.js";
import { userAgent } from "./userAgent.js";
import { registrar_meta_link } from "./registrar_meta_link.js";
import { registrar_service_worker } from "./registrar_service_worker.js";
conexionInternet()
btnUp()
tiempo()
copiarText()
userAgent()
registrar_meta_link()
registrar_service_worker()

