let progress = document.querySelector("#progressbar");
let totalheight = document.body.scrollHeight-window.innerHeight;
window.onscroll = function()
{
    let progressHeight = (window.pageYOffset/totalheight)*100;
    progress.style.height = progressHeight+"%";
}
