const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

/***changing background of size when to click one of them  
 * active ----- waa class marka hore lagu sameeyey mid ka mid ah 
 * kolba kaad click gareyso ayuu ku biinayaa 
 *  **/
const sizes = document.querySelectorAll(".size__tallas");
function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}
sizes.forEach(size => size.addEventListener('click', changeSize));




/**   cahanging color of some place by clicking the color
 * colorka background ka u ah kabaha colorka kabaha ayaa isbadalaaya
 * 
 * wixii style koodu primary ahaa ayaa isbadalaaya
 * ** */ 

const colors = document.querySelectorAll('.sneaker__color');
const sneaker = document.querySelectorAll('.sneaker__img');

function changeColor(){
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');
    let sneakerColor = document.querySelector(`.sneaker__img[color="${color}"]`);

    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary', primary);

    sneaker.forEach(s => s.classList.remove('shows'));
    sneakerColor.classList.add('shows')
}
colors.forEach(c => c.addEventListener('click', changeColor));