var image = ["https://www.ag.ndsu.edu/publications/kids-family/transition-issues-in-early-childhood-settings-in-north-dakota/rgb_p01_family.jpg",
"https://c.stocksy.com/a/1W6100/z9/263377.jpg",
"https://th.bing.com/th/id/R.4006d0031dffad9f9c335ee3eec005d8?rik=S3HOb9U45AxHhw&pid=ImgRaw&r=0",
"https://www.grapevinebirmingham.com/wp-content/uploads/2020/09/Family-Holiday.jpg"]
var names = ["Meus Pais!","Meu irmão","EU","Nossas Ferias"];
var i = 0;
function update() {
    i++
    var nunberofffamilymenbers = 3
    if(i > nunberofffamilymenbers ){
        i = 0;
    }
    var updatedimage = image[i];
    var updatedname = names[i];
    document.getElementById("FamilyImage").src = updatedimage;
    document.getElementById("FamilyText").innerHTML = updatedname;
}
