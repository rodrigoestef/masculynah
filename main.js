
function masculynah() {
    document.querySelectorAll('img').forEach(e=>{
        e.src = "https://cdn.dicionariopopular.com/imagens/image-193.jpg"
    })
}

document.body.onload = masculynah()

const observer = new MutationObserver(masculynah)

observer.observe(document.querySelector('body'),{ childList: true,subtree:true})