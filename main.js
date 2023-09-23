document.addEventListener('DOMContentLoaded', function(){

    const name =  document.getElementById('name');
    const username =  document.getElementById('username');
    const avatar =  document.getElementById('avatar');
    const repositorio =  document.getElementById('repos');
    const seguidores =  document.getElementById('followers');
    const seguindo =  document.getElementById('following');
    const linkPerfil =  document.getElementById('link');

    fetch('https://api.github.com/users/Hanteek')
    .then(function(resp){
        return resp.json();
    })
    .then(function(json){
        console.log(json)
        name.innerText = json.name;
        username.innerText = json.login;

        avatar.src = json.avatar_url;

        repositorio.innerText = json.public_repos;
        seguidores.innerText = json.followers;
        seguindo.innerText = json.following;

        linkPerfil.href = json.html_url;
    })
});
