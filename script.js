const btn = document.getElementById('click-me').addEventListener('click',function (event) {
    event.stopPropagation();
    alert('Button Clicked');
});


/*btn.onclick = function() {
    console.log('Button Clicked');
}*/
const box1=document.getElementById('box-1').addEventListener('click',function () {
    alert('Box-1 Clicked');
});



