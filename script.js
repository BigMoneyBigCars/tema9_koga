    const cityCykler = "https://www.mostvalue.dk/Koga/wordpress/wp-json/wp/v2/city";
    const racerCykler = "https://www.mostvalue.dk/Koga/wordpress/wp-json/wp/v2/racer?per_page=7";
    const trekkingCykler = "https://www.mostvalue.dk/Koga/wordpress/wp-json/wp/v2/trekking";

    window.addEventListener("load", init);
    let cykler = [];
    document.addEventListener("DOMContentLoaded", start);

    function start() {
        hentJson();
    }

    async function hentJson() {
        const response = await fetch(cityCykler);
        cykler = await response.json();
        vis();
    }

    function vis() {


        const skabelon = document.querySelector(".test-template");
        const liste = document.querySelector("#container");

        console.log(skabelon, liste);

        cykler.forEach(cykel => {
            const klon = skabelon.cloneNode(true).content;


            klon.querySelector("img").src = cykel.billede.guid;
            klon.querySelector("img").alt = "billede af" + cykel.billede.post_name;
            liste.appendChild(klon);
        });
    }


    let dragging = false;
    let RAF; // big machine
    let origW;
    let origH;
    let startX = 0;
    let startY = 0;
    let lastX = 0;
    let lastY = 0;
    let difX = 0;
    let difY = 0;
    let X = 0;
    let Y = 0;
    let containerWindow;
    let container;
    let containerW;
    let containerH;
    let screens = [];
    let curScreen;
    let nextScreen;
    let screenW;
    let screenH;

    function init() {

        screens = document.querySelectorAll('.screen');
        containerWindow = document.querySelector('#containerWindow');
        container = document.querySelector('#container');

        console.log(containerWindow);
        setupScreens();

        // listeners
        //container.addEventListener('touchstart', onTouchStart);
        //container.addEventListener('mousedown', onMouseDown);
    }

    function setupScreens() {
        const screenW = container.getBoundingClientRect().width;
        const screenH = container.getBoundingClientRect().height;

        let i = 0;
        for (i = 0; i < screens.length; i++) {
            var screen = screens[i];
            screen.style.left = screenW * i + "px";
            screen.style.width = screenW + "px";
            screen.style.height = screenH + "px";
        }
    }


    /*
     * Events
     */
    /*
    function onMouseDown(e) {
    e.preventDefault();
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);
    handleDragStart(event.clientX, event.clientY);
    }

    function onMouseMove(e) {
    if (dragging) handleDragging(e.clientX, e.clientY);
    }

    function onMouseUp(e) {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
    e.preventDefault();
    handleDragStop();
    }

    function onTouchStart(e) {
    e.preventDefault();
    if (e.touches.length === 1) {
    handleDragStart(e.touches[0].clientX, e.touches[0].clientY);
    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('touchend', onTouchEnd);
    document.addEventListener('touchcancel', onTouchEnd);
    }
    }

    function onTouchMove(event) {
    e.preventDefault();
    if (e.touches.length === 1) {
    handleDragging(e.touches[0].clientX, e.touches[0].clientY);
    }
    }

    function onTouchEnd(e) {
    e.preventDefault();
    if (e.touches.length === 0) {
    handleDragStop();
    document.removeEventListener('touchmove', onTouchMove);
    document.removeEventListener('touchend', onTouchEnd);
    document.removeEventListener('touchcancel', onTouchEnd);
    }
    }

    function handleDragStart(x, y) {
    dragging = true;
    startX = lastX = x;
    startY = lastY = y;
    raf();
    }

    function handleDragging(x, y) {
    if (dragging) {
    difX = x - lastX;
    difY = y - lastY;
    lastX = x;
    lastY = y;
    }
    }

    function handleDragStop() {
    if (dragging) {}
    dragging = false;
    difX = 0;
    difY = 0;
    }

    function raf() {
    X = difX;
    Y = difY;
    plateWidth += X * 0.8;
    plateHeight += Y * 0.8;
    plate.style.width = plateWidth + "px";
    plate.style.height = plateHeight + "px";
    difX = 0;
    difY = 0;
    RAF = requestAnimationFrame(raf);
    }
    */
