function positionAbsolute() {
    document.getElementById('position-box').style.position = 'absolute'
    document.getElementById('position-box').style.top = "40px";
    document.getElementById('position-box').style.left = "40px";
}

function positionRelative() {
    document.getElementById('position-box').style.position = 'relative'
    document.getElementById('position-box').style.top = "0";
    document.getElementById('position-box').style.left = "100px";
}

function positionStatic() {
    document.getElementById('position-box').style.position = 'static'
    document.getElementById('position-box').style.top = "0";
    document.getElementById('position-box').style.left = "0";
}

function positionFixed() {
    document.getElementById('position-box').style.position = 'fixed'
    document.getElementById('position-box').style.top = "400px";
    document.getElementById('position-box').style.left = "400px";
}