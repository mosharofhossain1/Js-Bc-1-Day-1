const offBtn = document.getElementById('off');
const light = document.getElementById('light');
const onBtn = document.getElementById('on');

const lightSrc = {
    on : 'https://www.w3schools.com/js/pic_bulbon.gif',
    off : 'https://www.w3schools.com/js/pic_bulboff.gif'
}
onBtn.addEventListener('click', function(){
   light.src = 'https://www.w3schools.com/js/pic_bulbon.gif'; 
})

offBtn.addEventListener('click', function(){
    light.src = 'https://www.w3schools.com/js/pic_bulboff.gif'
})