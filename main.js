function troll(){
    console.log("get trolled :]");
    document.getElementById("Imready").style.visibility = "hidden";
    document.getElementById("para").style.visibility = "visible";
    console.log("get trolled :]");
    setTimeout(beg, 2000);
}

function beg(){
    console.log("get trolled :]");
    const x = document.getElementById("h1");
    x.remove();
    document.getElementById("h2").remove();
    document.getElementById("para").remove();
    document.getElementById("b").remove();

    triger();
}

function triger(){
    document.getElementById("vid").play();
}