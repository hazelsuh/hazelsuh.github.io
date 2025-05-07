// Swiper 초기화
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 2, // 기본적으로 2개씩 보이게 설정
  spaceBetween: 20, // 카드 간격
  loop: true, // 무한 루프
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2, // PC 화면에서는 2개씩
    },
    0: {
      slidesPerView: 1, // 모바일 화면에서는 1개씩
    },
  },
});

// 스크롤 시 애니메이션 효과
document.addEventListener("scroll", function () {
  var elements = document.querySelectorAll(".slide");
  var windowHeight = window.innerHeight;

  elements.forEach(function (element) {
    var elementPosition = element.getBoundingClientRect().top;

    if (elementPosition < windowHeight) {
      element.classList.add("slide-in");
    }
  });
});

// 네비게이션 바 동작
window.onscroll = function () {
  const banner = document.getElementById("start_stickyBanner");
  const navbar = document.getElementById("navbar");
  let scrollY = window.scrollY;
  let opacity = Math.min(1, (scrollY - 40) / 100);
  let shadowOpacity = Math.min(1, (scrollY - 90) / 50);

  if (scrollY > 0) {
    banner.style.top = "-42px";
    navbar.style.top = "0";
  } else {
    banner.style.top = "0";
    navbar.style.top = "42px";
  }

  navbar.style.backgroundColor = `rgba(255, 255, 255, ${opacity * 0.6})`;
  navbar.style.backdropFilter = `blur(${opacity * 10}px)`;

  if (scrollY > 90) {
    navbar.style.boxShadow = `0 1px 1px rgba(0, 0, 0, ${shadowOpacity * 0.1})`;
  } else {
    navbar.style.boxShadow = "none";
  }
};

document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    const navbar = document.getElementById("navbar");
    const isCollapsed = this.classList.contains("collapsed");
    if (!isCollapsed) {
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
      navbar.style.backdropFilter = "blur(10px)";
      navbar.style.boxShadow = "0 1px 1px rgba(0, 0, 0, 0.1)";
    } else {
      if (window.scrollY < 90) {
        navbar.style.backgroundColor = "rgba(255, 255, 255, 0)";
        navbar.style.backdropFilter = "blur(0px)";
        navbar.style.boxShadow = "none";
      }
    }
  });

// 마우스 이동에 따른 애니메이션
document.addEventListener("DOMContentLoaded", () => {
  const interBubble = document.querySelector(".interactive");
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  const move = () => {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    interBubble.style.transform = `translate(${Math.round(
      curX
    )}px, ${Math.round(curY)}px)`;
    requestAnimationFrame(move);
  };

  window.addEventListener("mousemove", (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
  });

  move();
});

// 로고 슬라이더 복제
const sliderContent = document.querySelector(".slider-content");

if (sliderContent) {
  const copy = sliderContent.cloneNode(true);
  document.querySelector(".logo-slider-container").appendChild(copy);
}

// 배경
document.addEventListener("DOMContentLoaded", () => {
  const interBubble = document.querySelector(".interactive");
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  const move = () => {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    interBubble.style.transform = `translate(${Math.round(
      curX
    )}px, ${Math.round(curY)}px)`;
    requestAnimationFrame(move);
  };

  window.addEventListener("mousemove", (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
  });

  move();
});
