// js实现鼠标移动背景随动效果
let back = document.getElementById('back');
onmousemove = function(e) {
    let x = -e.clientX/10
    let y = -e.clientY/15
    back.style.backgroundPositionX = x + 'px';
    back.style.backgroundPositionY = y + 'px';
}

// 使用本地存储实现登录？
let sub = document.getElementById('sub');
let username = document.querySelector('[name=username]')
let password = document.querySelector('[name=password]')
sub.addEventListener('click', function(e) {
    let obj = {
        username: username.value,
        password: password.value,
    }
    localStorage.setItem('szk',JSON.stringify(obj))
})
let obj = JSON.parse(localStorage.getItem('szk'))
if(obj){
    username.value = obj.username
    password.value = obj.password
    location.href = './home.html'
}

var con = document.getElementById('con');
function loadoff() {
    con.style.display = 'none';
}
function loadon() {
    con.style.display = 'flex';
}
window.onload = function () {
    loadon();
    setTimeout(loadoff, 3000);
};
