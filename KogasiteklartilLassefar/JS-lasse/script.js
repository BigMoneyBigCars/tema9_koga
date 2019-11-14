$(document).ready(function () {

    $("#menu-list a").on("click", hentCykel);

    function hentCykel(event) {
        switch ($(event.currentTarget).data('type')) {
            case 'racer':
                hentJson(racerCykler);
                break;
            case 'trekking':
                hentJson(trekkingCykler);
                break;
            case 'city':
                hentJson(cityCykler);
                break;
            case 'el':
                hentJson(elCykler);
                break;
        }
    }

    const cityCykler = "https://www.mostvalue.dk/Koga/wordpress/wp-json/wp/v2/city";
    const racerCykler = "https://www.mostvalue.dk/Koga/wordpress/wp-json/wp/v2/racer?per_page=7";
    const trekkingCykler = "https://www.mostvalue.dk/Koga/wordpress/wp-json/wp/v2/trekking";
    const elCykler = "https://www.mostvalue.dk/Koga/wordpress/wp-json/wp/v2/el";

    let cykler = [];


    hentJson(cityCykler);

    async function hentJson(type) {
        const response = await fetch(type);
        cykler = await response.json();
        vis();
    }

    function vis() {
        $('.slick-slider').slick('unslick');
        $('.slider-nav').empty();
        const skabelon = document.querySelector(".test-template");
        const liste = document.querySelector("#wrapper");
        cykler.forEach(cykel => {
            const klon = skabelon.cloneNode(true).content;
            klon.querySelector("img").src = cykel.billede.guid;
            klon.querySelector("img").alt = "slider image";
            klon.querySelector(".title").innerHTML = cykel.title.rendered;
            liste.appendChild(klon);
        });
        /*$('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            asNavFor: '.slider-nav'
        });*/

        const slider = $('.slider-nav');

        slider.on('init', function (event, slick) {
            showBike(cykler[0]);
        });
        slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            showBike(cykler[currentSlide]);
        });

        slider.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            centerMode: false,
            focusOnSelect: true,
            variableWidth: false,
            arrows: true,

        });
    }

    function showBike(data) {
        console.log(data);
        const skabelonSpecs = document.querySelector(".bike-specifications");
        const listeSpecs = document.querySelector("#bike-specifications");
        const nyP = document.createElement("p");
        const nyH4 = document.createElement("h4");

        $(listeSpecs).empty();
        const klon = skabelonSpecs.cloneNode(true).content;
        console.log(klon);
        klon.querySelector(".price").textContent = ": " + data.pris + " ,-";
        klon.querySelector(".frameSize").innerHTML = data.framesize;
        klon.querySelector(".weight").innerHTML = data.weight;

        klon.querySelector(".colorCombinations").innerHTML = data.colorcombination;
        klon.querySelector(".benefits1").innerHTML = data.benefits1;
        klon.querySelector(".benefits2").innerHTML = data.benefits2;
        klon.querySelector(".benefits3").innerHTML = data.benefits3;


        if (data.front_fork_sort) {
            const nyP = document.createElement("p");
            const nyH4 = document.createElement("h4");
            nyH4.textContent = "Front Fork Sort";
            nyP.textContent = data.front_fork_sort;
            console.log(data.front_fork_sort);


        }

        if (data.number_of_gears) {
            klon.querySelector(".numberOfGears").innerHTML = data.number_of_gears;
            klon.querySelector(".numberOfGears").parentElement.style.display = "flex";
            klon.querySelector(".specifications-container").appendChild(nyH4);
            klon.querySelector(".specifications-container").appendChild(nyP);
        }



        klon.querySelector(".numberOfGears").innerHTML = data.number_of_gears;

        if (data.number_of_gears) {
            const nyP = document.createElement("p");
            const nyH4 = document.createElement("h4");
            nyH4.textContent = "TRALALALALA";
            nyP.textContent = data.number_of_gears;
            console.log(data.number_of_gears);


        }





        klon.querySelector(".rearBrakeSort").innerHTML = data.rear_brake_sort;

        if (data.rear_brake_sort) {
            const nyP = document.createElement("p");
            const nyH4 = document.createElement("h4");
            nyH4.textContent = "rearBrakeSort   TEST";
            nyP.textContent = data.rear_brake_sort;

            klon.querySelector(".specifications-container").appendChild(nyH4);
            klon.querySelector(".specifications-container").appendChild(nyP);
        }




        klon.querySelector(".rearBrakeMake").innerHTML = data.rear_brake_make;
        klon.querySelector(".frontBrakeSort").innerHTML = data.front_brake_sort;
        klon.querySelector(".frontBrakeMake").innerHTML = data.front_brake_make;
        klon.querySelector(".frontBrakeType").innerHTML = data.front_brake_type;
        klon.querySelector(".rearBrakeType").innerHTML = data.rear_brake_type;
        klon.querySelector(".tyreMake").innerHTML = data.tyre_make;
        klon.querySelector(".tyreType").innerHTML = data.tyre_type;
        klon.querySelector(".tyreSort").innerHTML = data.tyre_sort;
        klon.querySelector(".frontlight").innerHTML = data.front_light;
        klon.querySelector(".fronthub").innerHTML = data.front_hub;








        listeSpecs.appendChild(klon);

    }
});
