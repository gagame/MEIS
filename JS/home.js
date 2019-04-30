function openAlert() {
    window.alert("Hello World");
    document.getElementById("matrix1").innerHTML='2';
}
function setMatrix(){
}
function myrefresh()
{
    window.location.reload();
}


var strUrl = location.search;
var getPara, ParaVal;
var aryPara = [],valPara = [];

if (strUrl.indexOf("?") != -1) {
    var getSearch = strUrl.split("?");
    getPara = getSearch[1].split("&");
    for (i = 0; i < getPara.length; i++) {
        ParaVal = getPara[i].split("=");
        aryPara.push(ParaVal[0]);
        aryPara[ParaVal[0]] = ParaVal[1];
    }
    if(aryPara[aryPara[1]].indexOf("a")%2==0)document.getElementById("matrix1").innerHTML=aryPara[aryPara[1]].charAt(aryPara[aryPara[1]].indexOf("a")+1);
    if(aryPara[aryPara[1]].indexOf("b")%2==0)document.getElementById("matrix2").innerHTML=aryPara[aryPara[1]].charAt(aryPara[aryPara[1]].indexOf("b")+1);
    if(aryPara[aryPara[1]].indexOf("c")%2==0)document.getElementById("matrix3").innerHTML=aryPara[aryPara[1]].charAt(aryPara[aryPara[1]].indexOf("c")+1);
    if(aryPara[aryPara[1]].indexOf("d")%2==0)document.getElementById("matrix4").innerHTML=aryPara[aryPara[1]].charAt(aryPara[aryPara[1]].indexOf("d")+1);
    if(aryPara[aryPara[1]].indexOf("e")%2==0)document.getElementById("matrix5").innerHTML=aryPara[aryPara[1]].charAt(aryPara[aryPara[1]].indexOf("e")+1);
    if(aryPara[aryPara[0]].indexOf("a")%2==0)document.getElementById("matrix1").innerHTML=aryPara[aryPara[0]].charAt(aryPara[aryPara[0]].indexOf("a")+1);
    else if(aryPara[aryPara[0]].indexOf("b")%2==0)document.getElementById("matrix2").innerHTML=aryPara[aryPara[0]].charAt(aryPara[aryPara[0]].indexOf("b")+1);
    else if(aryPara[aryPara[0]].indexOf("c")%2==0)document.getElementById("matrix3").innerHTML=aryPara[aryPara[0]].charAt(aryPara[aryPara[0]].indexOf("c")+1);
    else if(aryPara[aryPara[0]].indexOf("d")%2==0)document.getElementById("matrix4").innerHTML=aryPara[aryPara[0]].charAt(aryPara[aryPara[0]].indexOf("d")+1);
    else if(aryPara[aryPara[0]].indexOf("e")%2==0)document.getElementById("matrix5").innerHTML=aryPara[aryPara[0]].charAt(aryPara[aryPara[0]].indexOf("e")+1);
    document.getElementById("RECORD").value=aryPara[aryPara[0]]+aryPara[aryPara[1]];
}