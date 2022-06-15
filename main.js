const nav = document.getElementById('navbar')
nav.addEventListener('click', e=>{
    console.log(e.target)
    btnNav(e);
    e.stopPropagation();
})

const btnNav = e => {
    if(e.target.classList.contains('logo--imagen')){
        console.log(e.target.classList)
        const menuActive = nav.querySelector('.ul--navbar')
        console.log(menuActive)
        menuActive.classList.toggle('goo')
    }
    if(e.target.classList.contains('opcion')){
        const menuActive = nav.querySelector('.ul--navbar')
        menuActive.classList.remove('goo')
    }

}
