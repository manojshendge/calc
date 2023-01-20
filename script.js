function display(value){
    a=document.getElementById("input").value+=value;
    
}
function calc(){
    var p=document.getElementById('input').value;
    var q = eval(p);
    document.getElementById('input').value=q;
}
bt=document.getElementById('bt');
bt.addEventListener('click', function clear(){
    document.getElementById('input').value=" ";
})