document.querySelector('.Update').onclick = () =>{
    document.querySelector('#fullname').removeAttribute('readonly');
    document.querySelector('#email').removeAttribute('readonly');
    document.querySelector('#phone').removeAttribute('readonly');
    document.querySelector('#address').removeAttribute('readonly');
    document.querySelector('.Update').classList.add('hidden');
    document.querySelector('.Save').classList.remove('hidden');
}
document.querySelector('.Save').onclick = () =>{
    document.querySelector('#fullname').setAttribute('readonly',true);
    document.querySelector('#email').setAttribute('readonly',true);
    document.querySelector('#phone').setAttribute('readonly',true);
    document.querySelector('#address').setAttribute('readonly',true);
    document.querySelector('.Save').classList.add('hidden');
    document.querySelector('.Update').classList.remove('hidden');
}
document.getElementById("nav_ac").onclick = function() {myFunction()};
    
    /* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
    function myFunction() {
      document.getElementById("ac_menu").classList.toggle("show");
    }