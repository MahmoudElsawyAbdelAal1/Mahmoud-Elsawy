let flag = false;

function shownav(){
    if(!flag){
document.getElementById('navdy').style.cssText = `

position: absolute;
top: 0px;
opacity:1;
position: fixed;
margin-top: 4rem;

`
flag = !flag;

}
else{
    removelist();
    flag = !flag;
}
}

function removelist(){

    document.getElementById('navdy').style.cssText = `

    position: absolute;
    top:-3000px;
    opacity:1;
    
    
    `
}





