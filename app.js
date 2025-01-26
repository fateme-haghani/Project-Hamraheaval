document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.menu-list').classList.toggle('active');
});


document.getElementById('scrollLeft').onclick = function() {
    document.querySelector('.scroll-container').scrollBy({
        left: -200, 
        behavior: 'smooth'
    });
};

document.getElementById('scrollRight').onclick = function() {
    document.querySelector('.scroll-container').scrollBy({
        left: 200, 
        behavior: 'smooth'
    });
};


window.onscroll = function() {
    let scrollToTopButton = document.getElementById("scrollToTopButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

document.getElementById("scrollToTopButton").onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};
