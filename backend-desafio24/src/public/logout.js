getParams = new URLSearchParams(window.location.search)
userName = getParams.get('username')

document.querySelector('#userLogout').innerHTML=`<p>Hasta Luego ${userName}</p>`

setTimeout(function(){
    location.href = '/api/logout';
}, 2000);
