window.addEventListener('hashchange', function() {
    let url = getRouter();
    getRouterContent(url); 
});

window.addEventListener('DOMContentLoaded', function(){
    let url = getRouter();
    getRouterContent(url);
});

const viewspath = {
    home: 'view/home.html',
    about: 'view/about.html',
    projects: 'view/projects.html',
    contact: 'view/contact.html',
    '404': 'view/404.html'
};

const getRouter = function() {
    let url = (window.location.hash).split('#')[1] ? (window.location.hash).split('#')[1] : 'home' ;
    if (url in viewspath) {
        return viewspath[url];
    }else {
        return viewspath['404'];
    }    
};

const getRouterContent = function(url) {
    fetch(url).then( function(response){
        return response.text();
    }).then(function(content){
        document.querySelector('.content').innerHTML = content;
        console.log(content);
    });
};


