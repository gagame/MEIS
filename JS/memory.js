getPara=location.search.split("?")[1].split("&");
var sortPara=[],department=[];
if(getPara[0].search("a")%2==0){
    sortPara.push(getPara[0].charAt(getPara[0].search("a")+1));
    document.myForm.matrixSel.options[0]=new Option("a", "a");
}else sortPara.push(-1);
if(getPara[0].search("b")%2==0){
    sortPara.push(getPara[0].charAt(getPara[0].search("b")+1));
    document.myForm.matrixSel.options[1]=new Option("b", "b");
}else sortPara.push(-1);
if(getPara[0].search("c")%2==0){
    sortPara.push(getPara[0].charAt(getPara[0].search("c")+1));
    document.myForm.matrixSel.options[2]=new Option("c", "c");
}else sortPara.push(-1);
if(getPara[0].search("d")%2==0){
    sortPara.push(getPara[0].charAt(getPara[0].search("d")+1));
    document.myForm.matrixSel.options[3]=new Option("d", "d");
}else sortPara.push(-1);
if(getPara[0].search("e")%2==0){
    sortPara.push(getPara[0].charAt(getPara[0].search("e")+1));
    document.myForm.matrixSel.options[4]=new Option("e", "e");
}else sortPara.push(-1);
for(var i=0;i<sortPara.length;i++)department[i]=sortPara[i];
sortPara.sort();
for(var i=sortPara.length-1;i>=0;i--)if(sortPara[i]==-1)delete sortPara[i];

/*
for(i=0;i<getPara.length/2;i++){
    window.alert(getPara.charAt(getPara.search("b")+1));
    department.push(getPara.charAt(getPara.search("b")+1));
    window.alert(department[0]);
    department[i]=department[i].sort();
    window.alert(department[i]);
}
*/
/*
department[0]=[location.search.split("=")[1].charAt(1),location.search.split("=")[1].charAt(3),location.search.split("=")[1].charAt(5),location.search.split("=")[1].charAt(7),location.search.split("=")[1].charAt(9)].sort();
department[1]=["1", "2", "3", "4", "5"];
department[2]=["1", "2", "3", "4"];
department[3]=["1", "2", "3"];
department[4]=["1", "2"];
*/
//var department;

function renew(){
	for(var i=0;i<sortPara.length;i++){
		document.myForm.member.options[i]=new Option(sortPara[i],sortPara[i]);	// 設定新選項
	}
	document.myForm.member.length=sortPara.length;	// 刪除多餘的選項
}
function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
};
function check(){
    form=document.myForm;
    index1=form.matrixSel.selectedIndex;
    text1=form.matrixSel.options[index1].text;
    index2=form.member.selectedIndex;
    text2=form.member.options[index2].text;
    if(text1=="a")if(text2!=department[0])window.alert("wrong answer");
    else location.href="memory.html?"+getPara[0].replace(text1+text2,"");
    if(text1=="b")if(text2!=department[1])window.alert("wrong answer");
    else location.href="memory.html?"+getPara[0].replace(text1+text2,"");
    if(text1=="c")if(text2!=department[2])window.alert("wrong answer");
    else location.href="memory.html?"+getPara[0].replace(text1+text2,"");
    if(text1=="d")if(text2!=department[3])window.alert("wrong answer");
    else location.href="memory.html?"+getPara[0].replace(text1+text2,"");
    if(text1=="e")if(text2!=department[4])window.alert("wrong answer");
    else location.href="memory.html?"+getPara[0].replace(text1+text2,"");
};

function toMemory(){
    location.href="memory.html?BROADCAST=a"+String.fromCharCode(getRandom(48,57))+"b"+String.fromCharCode(getRandom(48,57))+"c"+String.fromCharCode(getRandom(48,57))+"d"+String.fromCharCode(getRandom(48,57))+"e"+String.fromCharCode(getRandom(48,57));//ascii 48~57 = char 0~9
    //"ABC".charCodeAt(0);  returns 65   //String.fromCharCode(65,66,67);  returns 'ABC'
    strUrl = location.search;
    if (strUrl.indexOf("?") != -1) {
        getSearch = strUrl.split("=");
        getPara=[getSearch[1].charAt(1),getSearch[1].charAt(3),getSearch[1].charAt(5),getSearch[1].charAt(7),getSearch[1].charAt(9)];
        sortPara=getPara.sort();
    }
};