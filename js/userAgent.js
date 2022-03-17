import { c, d, n, l, w } from "./data.js"
export { userAgent };
let userAgent = () => {
    let { width, height } = w.screen,
        ua = n.userAgent,
        device = {
            android: () => ua.match(/android/i),
            ios: () => ua.match(/ipad|ipod|iphone/i),
            window: () => ua.match(/window/i),
            any: function () {
                return this.android() ||
                    this.ios() ||
                    this.window();
            }
        },
        logos = {
            "Window": "https://francisco-pixel.github.io/modulos/img/window.png",
            "Android": "https://francisco-pixel.github.io/modulos/img/android.png",
            "iPhone": "https://francisco-pixel.github.io/modulos/img/apple.png",
            "iPad": "https://francisco-pixel.github.io/modulos/img/apple.png",
            "iPod": "https://francisco-pixel.github.io/modulos/img/apple.png"
        },
        procesador = {
            bit: () => ua.match(/32|64/i)
        },
        browser = {
            chrome: () => ua.match(/chrome/i),
            edge: () => ua.match(/edge|edg/i),
            opera: () => ua.match(/opera|opera mini/i),
            safari: () => ua.match(/safari/i),
            firefox: () => ua.match(/firefox/i),
            any: function () {
                return this.chrome() ||
                    this.edge() ||
                    this.opera() ||
                    this.safari() ||
                    this.firefox();
            }
        };
        if(d.querySelector(".device-width-height")){
            d.querySelector(".device-width-height").innerHTML=`${width}px * ${height}px`;
        }
        if(d.querySelector(".device-title")){
            d.querySelector(".device-title").innerHTML=`${device.any()}`;
        }
        if(d.querySelector(".device-logo")){
            d.querySelector(".device-logo").src=logos[device.any()];
        }
        if(d.querySelector(".device-procesador")&&procesador.bit()){
            d.querySelector(".device-procesador").innerHTML=`${procesador.bit()} - bit`;
            d.querySelector(".procesador-title").innerHTML="Procesador";
        }
        if(d.querySelector(".device-browser")){
            d.querySelector(".device-browser").innerHTML=`${browser.any()}`;
            d.querySelector(".browser-title").innerHTML="Navegador";
        }
}

