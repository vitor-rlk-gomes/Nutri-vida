function clickmenu(){
    const menu = document.getElementById('menu')

    if(menu.style.display == 'block'){
        menu.style.display = 'none'
    } else{
        menu.style.display = 'block'
        menu.style.position = 'absolute'
    }
}