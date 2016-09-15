window.onload = function () {

    eScreenshots = document.querySelectorAll('.toggle');

    for (var i = 0; i < eScreenshots.length; i++) {

        var eVerberg = document.createElement('a');
        var linkText = document.createTextNode("Verberg screenshot");
        eVerberg.appendChild(linkText);
        eVerberg.href = "#";

        (function () {
            var eImg = eScreenshots[i];
            console.log(eImg);
            eVerberg.addEventListener('click', function (e) {
                e.preventDefault();
                verbergFoto(this, eImg);
            });
        }());

       

        eScreenshots[i].appendChild(eVerberg);

    }

}

function verbergScreenshots() {

    eScreenshots = document.querySelectorAll('.toggle');

    console.log('toggle %s', eScreenshots.length);

    for (var i = 0; i < eScreenshots.length; i++) {

        eScreenshots[i].style.display = "none";

        console.log( eScreenshots[i]);

    }

}

function verbergFoto(eLink, eImg) {

    console.log(eImg);

    eImg.style.display = "none";
    eLink.style.display = "none";

    

}