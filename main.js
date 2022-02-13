const menuToggle = () => {
    const menu = document.getElementById('mob-menu');
    if(menu.classList.contains('active')){
        menu.classList.remove('active');
    }else{
        menu.classList.add('active')
    }
}