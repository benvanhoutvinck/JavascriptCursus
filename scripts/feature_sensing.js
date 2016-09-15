window.onload = function () {
    var browser = get_browser();
    var eTitle = document.querySelector('h1');
    eTitle.innerHTML = browser.name + " - " + browser.version;


    if (typeof aFeatures == "undefined") {
        throw new Error("array aFeatures niet gevonden");
    }
    else
    {
        var eLijst = maakLijst(aFeatures);
        var eLijstDiv = document.getElementById('lijst');
        eLijstDiv.appendChild(eLijst);
    }
}

function maakLijst(a)
{
    /*
   return UL element
   @a array van strings
   */
    var nArt = a.length;
    var eUl = document.createElement('ul');
    eUl.id = "featurelijst";

    for (var i = 0; i < nArt; i++) {
        var eLi = document.createElement('li');
        eLi.innerHTML = a[i];
        if (eval(a[i])) {
            eLi.innerHTML += " - ja ";
            eLi.className = "ja";
        } else {
            eLi.innerHTML += " - nee ";
            eLi.className = "nee";
        }
        eLi.value = i;
        eUl.appendChild(eLi);
    }

    return eUl;
}

function get_browser() {
    var ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return { name: 'IE', version: (tem[1] || '') };
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR\/(\d+)/)
        if (tem != null) { return { name: 'Opera', version: tem[1] }; }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) { M.splice(1, 1, tem[1]); }
    return {
        name: M[0],
        version: M[1]
    };
}