// Plugin Simple Slide by: https://github.com/origamid/simple-slide

// Plugin Simple Anime by: https://github.com/origamid/simple-anime

if (window.SimpleSlide) {
  new SimpleSlide({
    slide: "quote", // nome do atributo data-slide="principal"
    time: 5000, // tempo de transição dos slides
  });

  new SimpleSlide({
    slide: "portfolio",
    time: 5000,
    nav: true,
  });
}

if (window.SimpleAnime) {
  new SimpleAnime();
}
