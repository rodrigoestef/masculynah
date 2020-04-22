
const imagens = [
    "https://cdn.dicionariopopular.com/imagens/image-194.jpg",
    "https://p16-va-default.akamaized.net/obj/tos-maliva-p-0068/a2d97090f128a478ee2121d5f86358a7",
    "https://cdn.dicionariopopular.com/imagens/image-193.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEHemaYgmI7uek0L8gHAkQ8ocsZdK_4UlSaBIbHuvlApUoPSy8&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDidGSDjZh4iR3iE4Z2m20jqxJwzV-GQx4VQd-zqE-4RncJGgA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRDvXmZzCh2Pix3j5X78ICMroz5uadrNa4p3nBXQ5-tDrnCk-K&usqp=CAU",
    "https://pbs.twimg.com/media/ECVyAJlXUAAMqPI.jpg",
    "https://conteudo.imguol.com.br/c/entretenimento/ee/2020/04/03/arthur-benozatti-medico-gato-do-samu-que-virou-meme-masculynah-1585952456433_v2_1769x1920.jpg"
]

function masculynah() {

    document.querySelectorAll('img').forEach(e=>{
        if (e.name != "masculynah") {
            e.src = imagens[parseInt(Math.random()*imagens.length)]
            e.name = "masculynah"
        }
        
    })
}

document.body.onload = masculynah()

const observer = new MutationObserver(masculynah)

observer.observe(document.querySelector('body'),{ childList: true,subtree:true})