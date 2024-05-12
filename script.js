const previousBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".surprise-btn");
const personImg = document.querySelector(".person-img");
const personName = document.querySelector(".person-name");
const personJob = document.querySelector(".person-job");
const personDescription = document.querySelector(".person-description");

let currentIndex = 0;

const persons = [
  {
    fullName: "Christopher Campbell",
    job: "Web Developer",
    description:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    imgSource: "./images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg",
  },
  {
    fullName: "Craig Mckay",
    job: "Web Designer",
    description:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    imgSource: "./images/craig-mckay-jmURdhtm7Ng-unsplash.jpg",
  },
  {
    fullName: "Sergio De Paula",
    job: "Intern",
    description:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    imgSource: "./images/sergio-de-paula-c_GmwfHBDzk-unsplash.jpg",
  },
  {
    fullName: "Stefan Stefancik",
    job: "The Boss",
    description:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
    imgSource: "./images/stefan-stefancik-QXevDflbl8A-unsplash.jpg",
  },
  {
    fullName: "Aiony Haust",
    job: "Key Account Manager",
    description:
      "Serving as a Key Account Manager, excels in building strategic relationships and driving business growth through personalized client engagement. With a keen understanding of client needs and a proactive approach.",
    imgSource: "./images/aiony-haust-3TLl_97HNJo-unsplash.jpg",
  },
];

function nextPerson() {
  currentIndex = (currentIndex + 1) % persons.length;
  displayPerson(currentIndex);
}

function previousPerson() {
  currentIndex = (currentIndex - 1 + persons.length) % persons.length;
  displayPerson(currentIndex);
}

function displayPerson(index) {
  const currentPerson = persons[index];
  personImg.src = currentPerson.imgSource;
  personName.textContent = currentPerson.fullName;
  personJob.textContent = currentPerson.job;
  personDescription.textContent = currentPerson.description;
}

function displayRandomPerson() {
  currentIndex = Math.floor(Math.random() * persons.length);
  displayPerson(currentIndex);
}

nextBtn.addEventListener("click", nextPerson);
previousBtn.addEventListener("click", previousPerson);
randomBtn.addEventListener("click", displayRandomPerson);

displayPerson(currentIndex);
