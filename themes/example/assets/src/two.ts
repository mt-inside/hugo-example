import update from 'src/updater'

setTimeout (function() {
    const e = document.getElementById("two")
    update(e, "live update two")
}, 3000);
