let buttons=document.querySelectorAll("button");

buttons[0].onclick=function(){
    let n=Number(document.querySelector("h1").innerHTML);
    document.querySelector("h1").innerHTML=(n-1).toString();
}
buttons[1].onclick=function(){
    let n=Number(document.querySelector("h1").innerHTML);
    document.querySelector("h1").innerHTML=(n+1).toString();
}