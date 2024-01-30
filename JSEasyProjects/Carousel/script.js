const people = [
  {
    name: "Alice Johnson",
    job: "Software Engineer",
    description:
      "Alice is a talented software engineer with a passion for creating innovative solutions. She specializes in front-end development and enjoys turning complex problems into elegant, user-friendly applications.",
    img: "https://media.istockphoto.com/id/1180926773/photo/studio-waist-up-portrait-of-a-beautiful-businesswoman-with-crossed-arms.jpg?s=2048x2048&w=is&k=20&c=VYn4tz2BDFfEs78jO_hvpUXZLwr64qSfn0VFE_v0U5U=",
  },
  {
    name: "David Smith",
    job: "Marketing Specialist",
    description:
      "David is a creative marketing specialist who excels in developing effective strategies to promote products and services. With a keen eye for trends, he ensures that marketing campaigns resonate with the target audience.",
    img: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Emily Brown",
    job: "Graphic Designer",
    description:
      "Emily is a skilled graphic designer known for her artistic flair and attention to detail. She brings brands to life through visually appealing designs that capture the essence of the message they want to convey.",
    img: "https://images.pexels.com/photos/864994/pexels-photo-864994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Michael Rodriguez",
    job: "Data Scientist",
    description:
      "Michael is a data scientist with a strong background in machine learning and analytics. He enjoys exploring large datasets to extract valuable insights that drive informed decision-making.",
    img: "https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Sophia Chen",
    job: "Biomedical Researcher",
    description:
      "Sophia is a dedicated biomedical researcher working on cutting-edge projects in the field of genetics. Her passion lies in advancing our understanding of the human body and developing new medical breakthroughs.",
    img: "https://images.pexels.com/photos/1181656/pexels-photo-1181656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const names = document.querySelector(".name");
const img = document.querySelector(".img");
const desc = document.querySelector(".description");
const job = document.querySelector(".job");

window.addEventListener("DOMContentLoaded", function () {
  person(review);
});

const btns = document.querySelectorAll(".btn");
let review = 0;
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const btn = e.currentTarget.classList[1];

    if (btn === "prev") {
      review = (review - 1 + people.length) % people.length;
    } else if (btn === "next") {
      review = (review + 1) % people.length;
    } else {
      review = Math.floor(Math.random() * people.length);
    }
    console.log(review);
    person(review);
  });
});

function person(number) {
  const rev = people[number];
  names.innerHTML = rev.name;
  img.src = rev.img;
  desc.innerHTML = rev.description;
  job.innerHTML = rev.job;
}
