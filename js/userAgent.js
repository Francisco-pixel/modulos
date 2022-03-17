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
            "Window": "./img/window.png",
            "Android": "./img/android.png",
            "iPhone": "./img/apple.png",
            "iPad": "./img/apple.png",
            "iPod": "./img/apple.png"
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
        if(d.querySelector(".width-height")){
            d.querySelector(".width-height").innerHTML=`${width}px * ${height}px`;
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
            d.querySelector(".device-title").innerHTML="Navegador";
        }
}

