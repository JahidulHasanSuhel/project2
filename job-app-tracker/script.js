let interviewList = [];
let rejectList = [];

let currentStatus = "All";



const total = document.getElementById("total");
let total1 = document.getElementById("total1");
let total2 = document.getElementById("total2");
let availableJobs = document.getElementById("remainingJobs");
let filteredAvailableJobsInterview = document.getElementById(
  "filteredRemainingJobs",
);
let filteredAvailableJobsReject = document.getElementById(
  "filteredRemainingJobsReject",
);
const interviewCnt = document.getElementById("interviewCnt");
const rejectedCnt = document.getElementById("rejectedCnt");

// buttons
const allBtn = document.getElementById("allBtn");
const interviewBtn = document.getElementById("interviewBtn");
const rejectedBtn = document.getElementById("rejectedBtn");


const cardContainer = document.getElementById("cardContainer");



const ofAll = document.getElementById("ofAll");
const ofInterview = document.getElementById("ofInterview");
const ofReject = document.getElementById("ofReject");
const filterAllBtn = document.getElementById("filterAll");
const filterInterviewBtn = document.getElementById("filterInterview");
const filterRejectedBtn = document.getElementById("filterRejected");

const filteredSecton = document.getElementById("filteredSecton");

const inter = document.querySelectorAll(".inter");


const reject = document.querySelectorAll(".reject");

// const buttNotApplied = document.querySelectorAll(".buttNotApplied");


const main = document.querySelector("main");


main.addEventListener("click", (event) =>{

    if (event.target.classList.contains("interviewBtn")) {
      // const card = event.target.parentElement.parentElement;
      const card = event.target.closest(".card");

      const companyName = card.querySelector(".companyName").innerText;
      const jobTitle = card.querySelector(".jobTitle").innerText;
      const jobLocation = card.querySelector(".jobLocation").innerText;
      const jobStatus = card.querySelector(".jobStatus").innerText;
      const jobDescriptionText = card.querySelector(
        ".jobDescriptionText",
      ).innerText;

      card.querySelector(".jobStatus").innerText = "INTERVIEW";

      const cardData = {
        companyName,
        jobTitle,
        jobLocation,
        jobStatus: "INTERVIEW",
        jobDescriptionText,
      };

      const jobCardExists = interviewList.find(
        (item) => item.companyName == cardData.companyName,
      );
      if (!jobCardExists) {
        interviewList.push(cardData);
      }

      rejectList = rejectList.filter(
        (item) => item.companyName == cardData.companyName,
      );

      if (currentStatus == "rejectedBtn") {
        RenderFilteredJobs(interviewList)

      }
        
    claculateCount();


    } else if (event.target.classList.contains("rejectedBtn")) {
      // const card = event.target.parentElement.parentElement;
      const card = event.target.closest(".card");

      const companyName = card.querySelector(".companyName").innerText;
      const jobTitle = card.querySelector(".jobTitle").innerText;
      const jobLocation = card.querySelector(".jobLocation").innerText;
      const jobStatus = card.querySelector(".jobStatus").innerText;
      const jobDescriptionText = card.querySelector(
        ".jobDescriptionText",
      ).innerText;

      card.querySelector(".jobStatus").innerText = "REJECTED";

      const cardData = {
        companyName,
        jobTitle,
        jobLocation,
        jobStatus: "REJECTED",
        jobDescriptionText,
      };

      const jobCardExists = rejectList.find(
        (item) => item.companyName == cardData.companyName,
      );
      if (!jobCardExists) {
        rejectList.push(cardData);
      }

      interviewList = interviewList.filter(
        (item) => item.companyName == cardData.companyName,
      );

      if (currentStatus == "rejectedBtn") {
        RenderFilteredJobs(rejectList);
      }

      claculateCount();
    }


})


function claculateCount() {
    total.innerText = cardContainer.children.length;
    availableJobs.innerText = cardContainer.children.length;
    interviewCnt.innerText = interviewList.length;
    rejectedCnt.innerText = rejectList.length;

    total1.innerText = cardContainer.children.length;
    total2.innerText = cardContainer.children.length;

    filteredRemainingJobs.innerText = interviewList.length;
    filteredRemainingJobsReject.innerText = rejectList.length;
}

claculateCount();

function toogleBtn(id){

    allBtn.classList.remove("btn-primary");
    interviewBtn.classList.remove("btn-primary");
    rejectedBtn.classList.remove("btn-primary");

    const selectBtn = document.getElementById(id);
    currentStatus = id;

    console.log(currentStatus);
    

    // ofAll.classList.add('hidden');


    if(id == 'allBtn'){
        allBtn.classList.add('btn-primary')
        filteredSecton.classList.add('hidden')
        cardContainer.classList.remove("hidden");

        ofAll.classList.remove("hidden");
        ofReject.classList.add("hidden");
        ofInterview.classList.add("hidden");

    } else if (id == 'interviewBtn') {
        interviewBtn.classList.add("btn-primary");

        cardContainer.classList.add('hidden');
        filteredSecton.classList.remove('hidden')

        ofAll.classList.add('hidden');
        ofReject.classList.add('hidden');
        ofInterview.classList.remove('hidden')

        RenderFilteredJobs(interviewList);
        
        
    } else if (id == 'rejectedBtn') {
        rejectedBtn.classList.add("btn-primary");
        cardContainer.classList.add('hidden');
        filteredSecton.classList.remove('hidden')

        ofAll.classList.add("hidden");
        ofReject.classList.remove("hidden");
        ofInterview.classList.add("hidden");

        RenderFilteredJobs(rejectList);
    }

}

function RenderFilteredJobs(cardArray) {
    filterJobs.innerHTML = "";

    for(let card of cardArray){
        let div = document.createElement("div");
        div.className =
          "mt-5 border card border-gray-200 shadow rounded-2xl gap-2 md:flex-row justify-between p-4";

        div.innerHTML = `

        <div>
                    <h2 class="companyName font-semibold text-2xl">${card.companyName}</h2>
                    <p class="jobTitle text-gray-500 mt-2">${card.jobTitle}</p>
                    <p class="jobLocation text-gray-500 mt-4 mb-5">${card.jobLocation}</p>
                    <button class="jobStatus btn btn-soft btn-primary">${card.jobStatus}</button>
                    <p class="jobDescriptionText mt-3 text-gray-600 mb-5">${card.jobDescriptionText}</p>
                    <div class="flex gap-2">
                        <button class="interviewBtn btn btn-outline btn-success">INTERVIEW</button>
                        <button  class="rejectedBtn btn btn-outline btn-error">REJECTED</button>
                    </div>
                </div>
                <div>
                    <button class="btn btn-circle">
                        <img src="./assets/Vector.png" alt="">
                    </button>
                </div>
        
        `;
        filterJobs.append(div);
    }

}
