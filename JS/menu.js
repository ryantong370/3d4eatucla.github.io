$(document).ready(function(){
    var navlogo = document.getElementById("3d4e-icon");
    var navbar = document.getElementById("3d4e-menu");
    var about = document.getElementById("about");
    var projects = document.getElementById("projects");
    var media = document.getElementById("media");
    var workshops = document.getElementById("workshops");
    var openMenu = false;
    navlogo.style.cursor = 'pointer';

    // Animation for enlarging and navigating
    var showMenu = new TimelineMax({paused: true});

    showMenu
    .fromTo(navbar, 0.5, {
        autoAlpha: 0,
        visibility: "hidden",
        opacity: 0,
    }, {
        autoAlpha: 1,
        visibility: "visible",
        opacity: 1,
    });

    navlogo.onmouseover = function(){
        TweenMax.to("#3d4e-icon", 0.5, {transformOrigin:"50% 50%", scale: 1.1});   
    };

    navlogo.onmouseout = function() {
        TweenMax.to("#3d4e-icon", 0.5, {transformOrigin:"50% 50%", scale: 1});
    };

    about.onmouseover = function() {
        TweenMax.to(about, 0.5, {css:{color:"#FFF"}});
    }

    about.onmouseout = function() {
        TweenMax.to(about, 0.5, {css:{color:"#3498db"}});
    }

    about.onclick = function() {
        if (window.location.href == 'https://3d4eatucla.github.io/contact.html') {
            window.location.href = './index.html';
        } else {
            window.location.href = './contact.html';
        }
    }

    projects.onmouseover = function() {
        TweenMax.to(projects, 0.5, {css:{color:"#FFF"}});
    }

    projects.onmouseout = function() {
        TweenMax.to(projects, 0.5, {css:{color:"#3498db"}});
    }

    projects.onclick = function() {
        if (window.location.href == 'https://3d4eatucla.github.io/projects.html') {
            window.location.href = './index.html';
        } else {
            window.location.href = './projects.html';
        }
    }

    media.onmouseover = function() {
        TweenMax.to(media, 0.5, {css:{color:"#FFF"}});
    }

    media.onmouseout = function() {
        TweenMax.to(media, 0.5, {css:{color:"#3498db"}});
    }

    media.onclick = function() {
        if (window.location.href == 'https://3d4eatucla.github.io/media.html') {
            window.location.href = './index.html';
        } else {
            window.location.href = './media.html';
        }
    }

    workshops.onmouseover = function() {
        TweenMax.to(workshops, 0.5, {css:{color:"#FFF"}});
    }

    workshops.onmouseout = function() {
        TweenMax.to(workshops, 0.5, {css:{color:"#3498db"}});
    }

    workshops.onclick = function() {
        if (window.location.href == 'https://3d4eatucla.github.io/workshops.html') {
            window.location.href = './index.html';
        } else {
            window.location.href = './workshops.html';
        }
    }

    navlogo.onclick = function() {
        if (openMenu) {
            // console.log("Reversed");
            showMenu.reverse();
            openMenu = false;
        } else {
            // console.log("Played");
            showMenu.play();
            openMenu = true;
        }
    };

    /* For the Social Media Icons */
    var youtube = document.getElementById("youtube");
    var facebook = document.getElementById("facebook");
    var github = document.getElementById("github");
    var ig = document.getElementById("instagram");
    var email = document.getElementById("email");

    youtube.onmouseover = function() {
        TweenMax.to(youtube, 0.5, {css:{fill:'#d1f4fa'}});
    }

    youtube.onmouseout = function() {
        TweenMax.to(youtube, 0.5, {css:{fill:'#11999e'}});
    }

    youtube.onclick = function() {
        window.href = url("");
    }

    facebook.onmouseover = function() {
        TweenMax.to(facebook, 0.5, {css:{fill:'#d1f4fa'}});
    }

    facebook.onmouseout = function() {
        TweenMax.to(facebook, 0.5, {css:{fill:'#11999e'}});
    }

    facebook.onclick = function() {
        window.href = url("");
    }

    github.onmouseover = function() {
        TweenMax.to(github, 0.5, {css:{fill:'#d1f4fa'}});
    }

    github.onmouseout = function() {
        TweenMax.to(github, 0.5, {css:{fill:'#11999e'}});
    }

    github.onclick = function() {
        window.href = url("");
    }

    ig.onmouseover = function() {
        TweenMax.to(ig, 0.5, {css:{fill:'#d1f4fa'}});
    }

    ig.onmouseout = function() {
        TweenMax.to(ig, 0.5, {css:{fill:'#11999e'}});
    }

    ig.onclick = function() {
        window.href = url("");
    }

    email.onmouseover = function() {
        TweenMax.to(email, 0.5, {css:{fill:'#d1f4fa'}});
    }

    email.onmouseout = function() {
        TweenMax.to(email, 0.5, {css:{fill:'#11999e'}});
    }

    email.onclick = function() {
        window.href = url("");
    }
})