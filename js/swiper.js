const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        const line = '&nbsp;&#9135;&#9135;&#9135;&#9135;&#9135;&nbsp;';
        return `<span class="${currentClass}"></span>&nbsp;&#9135;&#9135;&#9135;&#9135;&#9135;&nbsp;<span class="${totalClass}"> </span>`;
      },
    },
  });