let interviewList = [];
let rejectList = [];

let currentStatus = "All";



const total = document.getElementById("total");

const interviewCnt = document.getElementById("interviewCnt");
const rejectedCnt = document.getElementById("rejectedCnt");

// buttons
const allBtn = document.getElementById("allBtn");
const interviewBtn = document.getElementById("interviewBtn");
const rejectedBtn = document.getElementById("rejectedBtn");


const cardContainer = document.getElementById("cardContainer");
total.innerText = cardContainer.children.length;


const ofAll = document.getElementById("ofAll");
const ofInterview = document.getElementById("ofInterview");
const ofReject = document.getElementById("ofReject");
const filterAllBtn = document.getElementById("filterAll");
const filterInterviewBtn = document.getElementById("filterInterview");
const filterRejectedBtn = document.getElementById("filterRejected");

const filteredSecton = document.getElementById("filteredSecton");

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
        
        
    } else if (id == 'rejectedBtn') {
        rejectedBtn.classList.add("btn-primary");
        cardContainer.classList.add('hidden');
        filteredSecton.classList.remove('hidden')

        ofAll.classList.add("hidden");
        ofReject.classList.remove("hidden");
        ofInterview.classList.add("hidden");
    }

}