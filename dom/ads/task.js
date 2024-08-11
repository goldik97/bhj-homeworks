const banners = document.getElementsByClassName("rotator");

[...banners].forEach(banner => {
    const bannerList = banner.querySelectorAll(".rotator__case");

    const idx = index => {
        [...bannerList].forEach(element => {
            element.classList.remove("rotator__case_active");
        });

        index = bannerList[index].nextElementSibling ? index + 1 : 0;

        let speed = bannerList[index].getAttribute("data-speed");
        let color = bannerList[index].getAttribute("data-color");

        bannerList[index].setAttribute("style", `color: ${color}`);
        bannerList[index].classList.add("rotator__case_active");

        setTimeout(idx, speed, index);
    };

    setTimeout(idx, 0, 0);
});
