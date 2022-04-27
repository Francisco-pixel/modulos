export function registrar_meta_link(logo="https://francisco-pixel.github.io/modulos/img/fco-pixel.png",color="#2583c5"){
    let d=document,
    metas=[
        {"name":"theme-color","content":color},
        {"name":"MobileOptimized","content":"width"},
        {"name":"HandheldFriendly","content":"true"},
        {"name":"apple-mobile-web-app-capable","content":"yes"},
        {"name":"apple-mobile-web-app-status-bar-style","content":"black-translucent"}
    ],
    links=[
        {"rel":"shortcut icon","href":logo},
        {"rel":"apple-touch-icon","href":logo},
        {"rel":"apple-touch-startup-image","href":logo},
        {"rel":"manifest","href":"./manifest.json"}
    ];
    metas.forEach(meta=>{
        let {name,content}=meta;
        d.head.innerHTML+=`<meta name="${name}" content="${content}">`
    })
    links.forEach(link=>{
        let {rel,href}=link,
        enlace=href?href:href="./";
        d.head.innerHTML+=`<link rel="${rel}" href="${enlace}">`
    })
}