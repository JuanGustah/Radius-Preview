document.querySelector("input").addEventListener('input',addBorderRadius);

function addBorderRadius(event){
    document.getElementById('box').style.borderRadius=`${event.target.value}px`
}
