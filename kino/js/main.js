var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    loopedSlides: 3,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  window.onload = function() {
    fetch("https://api.kinopoisk.dev/v1.3/movie/random", {
    headers: {
        "content-type": "application/json",
        "X-API-KEY": "5RAEWQV-8SE4873-GJJF8XQ-XYV44S8",
    },
    }).then(response => {
    return response.json();
    }).then(data => {
    let title = data.name;
    let imdb = Math.round(data.rating.imdb * 10) / 10;
    let kp = Math.round(data.rating.kp * 10) / 10;
    let desc = data.description;
    let poster = data.poster.url;
    let trailer = data.videos.trailers.url;

    document.querySelector(".header__title").textContent = title;
    document.querySelector(".imdb").textContent = imdb;
    document.querySelector(".konop").textContent = kp;
    document.querySelector(".header__text").textContent = desc;
    document.querySelector(".page-1").src = poster;
    // document.querySelector("").href = trailer;
    });
}

fetch("https://api.kinopoisk.dev/v1.3/movie?page=1&limit=8", {
    headers: {
        "content-type": "application/json",
        "X-API-KEY": "5RAEWQV-8SE4873-GJJF8XQ-XYV44S8",
    },
})
.then(response => {
    return response.json();
}) 
.then(data => {
    let swiperSlides = document.querySelectorAll(".swiper-slide");
    data.docs.forEach(function(respdata, index) {
        let swiperImg = swiperSlides[index].querySelector(".cinema__img");
        swiperImg.src = respdata.poster.previewUrl;
        let swiperText = swiperSlides[index].querySelector(".cinema__name");
        swiperText.textContent = respdata.name;
        let swiperKp = swiperSlides[index].querySelector(".imdb-1");
        swiperKp.textContent = Math.round(respdata.rating.kp * 10) / 10;
        let swiperImdb = swiperSlides[index].querySelector(".konop-1");
        swiperImdb.textContent = Math.round(respdata.rating.imdb * 10) / 10;
        let swiperGenres = swiperSlides[index].querySelector(".cinema__about");
        swiperGenres.textContent = respdata.genres.map(genre => genre.name).join(", ");
    });
});

fetch("https://api.kinopoisk.dev/v1.3/movie?page=1&limit=8&type=tv-series", {
    headers: {
        "content-type": "application/json",
        "X-API-KEY": "5RAEWQV-8SE4873-GJJF8XQ-XYV44S8",
    },
})
.then(response => {
    return response.json();
}) 
.then(data => {
    let swiperSlides = document.querySelectorAll(".cinema__item-2");
    data.docs.forEach(function(respdata, index) {
        let swiperImg = swiperSlides[index].querySelector(".cinema__img-2");
        swiperImg.src = respdata.poster.previewUrl;
        let swiperText = swiperSlides[index].querySelector(".cinema__name-2");
        swiperText.textContent = respdata.name;
        let swiperKp = swiperSlides[index].querySelector(".imdb-1-2");
        swiperKp.textContent = Math.round(respdata.rating.kp * 10) / 10;
        let swiperImdb = swiperSlides[index].querySelector(".konop-1-2");
        swiperImdb.textContent = Math.round(respdata.rating.imdb * 10) / 10;
        let swiperGenres = swiperSlides[index].querySelector(".cinema__about-2");
        swiperGenres.textContent = respdata.genres.map(genre => genre.name).join(", ");
        
    });
});

fetch("https://api.kinopoisk.dev/v1.3/movie?page=1&limit=8&type=cartoon", {
    headers: {
        "content-type": "application/json",
        "X-API-KEY": "5RAEWQV-8SE4873-GJJF8XQ-XYV44S8",
    },
})
.then(response => {
    return response.json();
}) 
.then(data => {
    let swiperSlides = document.querySelectorAll(".cinema__item-3");
    data.docs.forEach(function(respdata, index) {
        let swiperImg = swiperSlides[index].querySelector(".cinema__img-3");
        swiperImg.src = respdata.poster.previewUrl;
        let swiperText = swiperSlides[index].querySelector(".cinema__name-3");
        swiperText.textContent = respdata.name;
        let swiperKp = swiperSlides[index].querySelector(".imdb-1-3");
        swiperKp.textContent = Math.round(respdata.rating.kp * 10) / 10;
        let swiperImdb = swiperSlides[index].querySelector(".konop-1-3");
        swiperImdb.textContent = Math.round(respdata.rating.imdb * 10) / 10;
        let swiperGenres = swiperSlides[index].querySelector(".cinema__about-3");
        swiperGenres.textContent = respdata.genres.map(genre => genre.name).join(", ");
        
    });
});

fetch("https://api.kinopoisk.dev/v1.3/movie/random", {
    headers: {
        "content-type": "application/json",
        "X-API-KEY": "5RAEWQV-8SE4873-GJJF8XQ-XYV44S8",
    },
})
.then(response => {
    return response.json();
}) .then(data => {
    let swiperSlides = document.querySelectorAll(".cinema__item-4");
    data.persons.forEach(function(pers, index) {
    let swiperPhoto = swiperSlides[index].querySelector(".cinema__img-4");
    swiperPhoto.src = pers.photo;
    let swiperText = swiperSlides[index].querySelector(".cinema__name-4");
    swiperText.textContent = pers.name;
    });
});

