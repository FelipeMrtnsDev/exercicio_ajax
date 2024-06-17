$(document).ready(function() {
    const endpoint = `https://api.github.com/users/FelipeMrtnsDev`;
    
    $.ajax(endpoint).done(function(resposta) {
        const nameElement = resposta.name;
        const nameReferenceElement = resposta.login;
        const repositoriesElement = resposta.public_repos;
        const followersElement = resposta.followers;
        const followingElement = resposta.following;
        const urlElement = resposta.html_url;
        const avatarElement = resposta.avatar_url;

        $('#nome-usuario').html(nameElement);
        $('#arroba-usuario').html('@'+ nameReferenceElement);
        $('#quantidade-repositorios').html(repositoriesElement);
        $('#quantidade-seguidores').html(followersElement);
        $('#quantidade-seguindo').html(followingElement);
        $('#link-github').attr('href', urlElement);
        $('#avatar-img').attr('src', avatarElement);
    }) 
})