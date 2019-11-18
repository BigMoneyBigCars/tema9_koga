$(document).ready(function () {

    $(".cycle-list p").on("click", hentCykel);

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

    var boxes = ".box1";


    hentJson(racerCykler);

    async function hentJson(type) {
        const response = await fetch(type);
        cykler = await response.json();
        vis();
    }

    function vis() {
        document.querySelector(".luk").addEventListener('click', noDisplayBike);
        $('#wrapper').empty();
        const skabelon = document.querySelector(".test-template");
        const liste = document.querySelector("#wrapper");
        cykler.forEach((cykel, index) => {
            const klon = skabelon.cloneNode(true).content;


            klon.querySelector("img").src = cykel.billede.guid;
            klon.querySelector("img").alt = "slider image";
            klon.querySelector(".title").innerHTML = cykel.title.rendered;
            klon.querySelector(".priceGrid").textContent = "Pris " + cykel.pris + " ,-";

            console.log(index);
            klon.querySelector(".box1").addEventListener('click', function () {
                showBike(cykler[index]);
                console.log(index);
                document.querySelector(".bikePopUp").style.display = "block";
                document.querySelector("body").classList.add("noscroll");
                document.querySelector(".bikeImg img").src = cykel.billede.guid;
                document.querySelector(".bikeTitle").textContent = cykel.title.rendered;
                /*    document.querySelector(".bikePrice").textContent = "Pris " + cykel.pris + " ,-";*/
                document.querySelector(".price").textContent = cykel.pris + " ,-";
                document.querySelector(".frameSize").innerHTML = cykel.framesize;
                document.querySelector(".weight").innerHTML = cykel.weight;

                document.querySelector(".colorCombinations").innerHTML = cykel.colorcombination;



            })


            liste.appendChild(klon);

        });




        /*klon.querySelector(".luk").addEventListener('click', noDisplayBike());*/
    }


    function noDisplayBike() {
        document.querySelector(".bikePopUp").style.display = "none";
        document.querySelector("body").classList.remove("noscroll");

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
        /*    klon.querySelector(".price").textContent = data.pris + " ,-";
            klon.querySelector(".frameSize").innerHTML = data.framesize;
            klon.querySelector(".weight").innerHTML = data.weight;

            klon.querySelector(".colorCombinations").innerHTML = data.colorcombination;*/
        klon.querySelector(".benefits1").textContent = data.benefits1;

        klon.querySelector(".benefits2").textContent = data.benefits2;
        klon.querySelector(".benefits3").textContent = data.benefits3;


        if (data.front_fork_sort) {
            const nyP = document.createElement("p");
            const nyH4 = document.createElement("h4");
            nyH4.textContent = "Front Fork Sort";
            nyP.textContent = data.front_fork_sort;

            klon.querySelector(".specifications-container").appendChild(nyH4);
            klon.querySelector(".specifications-container").appendChild(nyP);


        }

        if (data.number_of_gears) {
            const nyP = document.createElement("p");
            const nyH4 = document.createElement("h4");
            nyH4.textContent = "Number of gears";
            nyP.textContent = data.number_of_gears;

            klon.querySelector(".specifications-container").appendChild(nyH4);
            klon.querySelector(".specifications-container").appendChild(nyP);
        }



        /*   /*            klon.querySelector(".numberOfGears").innerHTML = data.number_of_gears;
                                klon.querySelector(".numberOfGears").parentElement.style.display = "flex";*/
        /*
                klon.querySelector(".numberOfGears").innerHTML = data.number_of_gears;
        */






        /*   klon.querySelector(".rearBrakeSort").innerHTML = data.rear_brake_sort;*/

        if (data.rear_brake_sort) {
            const nyP = document.createElement("p");
            const nyH4 = document.createElement("h4");
            nyH4.textContent = "Rear Brake Sort";
            nyP.textContent = data.rear_brake_sort;

            klon.querySelector(".specifications-container").appendChild(nyH4);
            klon.querySelector(".specifications-container").appendChild(nyP);
        }

        if (data.rear_brake_make) {
            const nyP = document.createElement("p");
            const nyH4 = document.createElement("h4");
            nyH4.textContent = "Rear Brake Make";
            nyP.textContent = data.rear_brake_make;

            klon.querySelector(".specifications-container").appendChild(nyH4);
            klon.querySelector(".specifications-container").appendChild(nyP);
        }


        /*      klon.querySelector(".rearBrakeMake").innerHTML = data.rear_brake_make;*/

        if (data.front_brake_sort) {
            const nyP = document.createElement("p");
            const nyH4 = document.createElement("h4");
            nyH4.textContent = "Front Brake Sort";
            nyP.textContent = data.front_brake_sort;

            klon.querySelector(".specifications-container").appendChild(nyH4);
            klon.querySelector(".specifications-container").appendChild(nyP);
        }



        /*   klon.querySelector(".frontBrakeSort").innerHTML = data.front_brake_sort;*/


        if (data.front_brake_make) {
            const nyP = document.createElement("p");
            const nyH4 = document.createElement("h4");
            nyH4.textContent = "Front Brake Make";
            nyP.textContent = data.front_brake_make;

            klon.querySelector(".specifications-container").appendChild(nyH4);
            klon.querySelector(".specifications-container").appendChild(nyP);
        }

        /*
                klon.querySelector(".frontBrakeMake").innerHTML = data.front_brake_make;
        */

        if (data.front_brake_type) {
            const nyP = document.createElement("p");
            const nyH4 = document.createElement("h4");
            nyH4.textContent = "Front Brake Type";
            nyP.textContent = data.front_brake_type;

            klon.querySelector(".specifications-container").appendChild(nyH4);
            klon.querySelector(".specifications-container").appendChild(nyP);
        }

        /*klon.querySelector(".frontBrakeType").innerHTML = data.front_brake_type;*/


        if (data.rear_brake_type) {
            const nyP = document.createElement("p");
            const nyH4 = document.createElement("h4");
            nyH4.textContent = "Rear Brake Type";
            nyP.textContent = data.rear_brake_type;

            klon.querySelector(".specifications-container").appendChild(nyH4);
            klon.querySelector(".specifications-container").appendChild(nyP);
        }


        /*        klon.querySelector(".rearBrakeType").innerHTML = data.rear_brake_type;*/


        if (data.front_hub) {
            const nyP = document.createElement("p");
            const nyH4 = document.createElement("h4");
            nyH4.textContent = "Front Hub";
            nyP.textContent = data.front_hub;

            klon.querySelector(".specifications-container").appendChild(nyH4);
            klon.querySelector(".specifications-container").appendChild(nyP);
        }

        /*
                klon.querySelector(".fronthub").innerHTML = data.front_hub;*/

        if (data.front_light) {
            const nyP = document.createElement("p");
            const nyH4 = document.createElement("h4");
            nyH4.textContent = "Front Light";
            nyP.textContent = data.front_light;

            klon.querySelector(".specifications-container").appendChild(nyH4);
            klon.querySelector(".specifications-container").appendChild(nyP);
        }

        /*   klon.querySelector(".frontlight").innerHTML = data.front_light;*/

        if (data.tyre_sort) {
            const nyP = document.createElement("p");
            const nyH4 = document.createElement("h4");
            nyH4.textContent = "Tyre Sort";
            nyP.textContent = data.tyre_sort;

            klon.querySelector(".specifications-container").appendChild(nyH4);
            klon.querySelector(".specifications-container").appendChild(nyP);
        }

        /*          klon.querySelector(".tyreSort").innerHTML = data.tyre_sort;*/

        if (data.tyre_type) {
            const nyP = document.createElement("p");
            const nyH4 = document.createElement("h4");
            nyH4.textContent = "Tyre Type";
            nyP.textContent = data.tyre_type;

            klon.querySelector(".specifications-container").appendChild(nyH4);
            klon.querySelector(".specifications-container").appendChild(nyP);
        }

        /*
                     klon.querySelector(".tyreType").innerHTML = data.tyre_type;
        */
        if (data.tyre_make) {
            const nyP = document.createElement("p");
            const nyH4 = document.createElement("h4");
            nyH4.textContent = "Tyre Make";
            nyP.textContent = data.tyre_make;

            klon.querySelector(".specifications-container").appendChild(nyH4);
            klon.querySelector(".specifications-container").appendChild(nyP);
        }


        /*        klon.querySelector(".tyreMake").innerHTML = data.tyre_make;*/






        if (data.batterycapacity) {
            const nyP = document.createElement("p");
            const nyH4 = document.createElement("h4");
            nyH4.textContent = "Battery Capacity";
            nyP.textContent = data.batterycapacity;

            klon.querySelector(".specifications-container").appendChild(nyH4);
            klon.querySelector(".specifications-container").appendChild(nyP);
        }



        if (data.display) {
            const nyP = document.createElement("p");
            const nyH4 = document.createElement("h4");
            nyH4.textContent = "Display";
            nyP.textContent = data.display;

            klon.querySelector(".specifications-container").appendChild(nyH4);
            klon.querySelector(".specifications-container").appendChild(nyP);
        }

        if (data.motormake) {
            const nyP = document.createElement("p");
            const nyH4 = document.createElement("h4");
            nyH4.textContent = "Motor make";
            nyP.textContent = data.motormake;

            klon.querySelector(".specifications-container").appendChild(nyH4);
            klon.querySelector(".specifications-container").appendChild(nyP);
        }

        if (data.motor_type) {
            const nyP = document.createElement("p");
            const nyH4 = document.createElement("h4");
            nyH4.textContent = "Motor Type";
            nyP.textContent = data.motor_type;

            klon.querySelector(".specifications-container").appendChild(nyH4);
            klon.querySelector(".specifications-container").appendChild(nyP);
        }

        if (data.motor_location) {
            const nyP = document.createElement("p");
            const nyH4 = document.createElement("h4");
            nyH4.textContent = "Motor Location";
            nyP.textContent = data.motor_location;

            klon.querySelector(".specifications-container").appendChild(nyH4);
            klon.querySelector(".specifications-container").appendChild(nyP);
        }



        listeSpecs.appendChild(klon);

    }
});
