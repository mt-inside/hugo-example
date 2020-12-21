import update from 'src/updater'

setTimeout (function() {
    const e = document.getElementById("one")
    update(e, "live update one")
}, 1000);
