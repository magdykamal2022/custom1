$(".nav .links i").click(function () {
  $(".nav .links ul").toggleClass("ul");
});
$(".nav .links i").click(function () {
  $(".nav .links .open").toggle();
  $(".nav .links .cancel").toggle();
});

$(document).ready(function () {
  $(function () {
    $(".nav ul li a").click(function (e) {
      e.preventDefault();
      $("html, body").animate({
        scrollTop: $("#" + $(this).data("scroll")).offset().top,
      });
    });
  });
});

navbar = document.querySelector(".links ul").querySelectorAll("a");
navbar.forEach((element) => {
  $(element).click(function () {
    navbar.forEach((ele) => $(ele).removeClass("active"));
    $(this).addClass("active");
  });
});

function scrolll() {
  let left = document.querySelector(".photos");
  left.scrollBy(500, 0);
  if (window.innerWidth <= 768) {
    left.scrollBy(img, 0);
  }
}
let img = document.querySelector(".photos img").clientWidth;

$(".photo-square i:last-child").click(scrolll);
function scrollR() {
  let right = document.querySelector(".photos");
  right.scrollBy(-500, 0);
  if (window.innerWidth <= 768) {
    right.scrollBy(-img, 0);
  }
}
$(".photo-square i:first-child").click(scrollR);
$(window).ready(function () {
  $(".contact form button").click(function (e) {
    e.preventDefault();
  });
});

let numbers = document.querySelectorAll(" .item .num");
let section = document.querySelector(".Projects");
let text = document.querySelector(".text-and-img");
let started = false;
function counting(e) {
  let goal = e.dataset.goal;
  let counter = setInterval(() => {
    e.textContent++;
    if (e.textContent === goal) {
      clearInterval(counter);
    }
  }, 1000 / goal);
}
$(window).on("scroll", function () {
  if (window.scrollY > text.offsetTop - 350) {
    $(".text").animate(
      {
        "margin-left": "10px",
        opacity: 1,
      },
      1500
    );
  }
});
$(window).on("scroll", function () {
  if (window.scrollY >= section.offsetTop - 350) {
    if (!started) {
      numbers.forEach((numbers) => counting(numbers));
    }
    started = true;
  }
});
$(document).ready(function () {
  if (window.innerWidth >= 960) {
    if (window.scrollY <= 300) {
      $(".landing").animate(
        {
          "margin-left": "-12%",
        },
        1500
      );
    }
  }
});
let nav = document.querySelector(".nav");
window.onscroll = function () {
  if (window.scrollY >= 300) {
    $(".nav").css("background-color", "#29cc9fb0");
  } else {
    $(".nav").css("background-color", "var(--transport-color)");
  }
};
let mail = document.querySelector(".mail").value;
let name = document.querySelector(".name").value;
let comment = document.querySelector(".comment").value;

function emailSend() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "magdyk600@gmail.com",
    Password: "5E91AC215D13A8D26E3BD1314847DD2E189B",
    To: "custompaint600@gmail.com",
    From: "magdyk600@gmail.com",
    Subject: `this is the message from mr ${name}`,
    Body: `name : ${name} <\br> email : ${mail}<\br>comment : ${comment} `,
  }).then((message) => alert(message));
}
$(".submit").click(emailSend);
