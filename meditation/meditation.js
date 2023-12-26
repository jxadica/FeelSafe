let video = document.getElementById("myVideo");
const namesOfVideos= {
  1: "Guided Meditation For Anxiety",
  2: "Meditation for Anxiety",
  3: "A 10-Minute Journey to Inner Peace",
  4: "5 minute meditation for anxiety",
  5: "10 min Guided Meditation",
  6: "10 min Guided Meditation To Clear Your Mind",
  7: "Guided Breathing Exercise Meditation Panic Attacks ",
  8: "Deep Relaxation Hypnosis for Stress Relief, Anxiety Relief, and Instant Calm (Science-Based)",
  9: "Meditation for Beginners",
  10: "Kristin Lothman - Managing anxiety by practicing mindfulness and meditation",
  11: "A Havening Guided Meditation to Reduce Health Anxiety with Dr. Kate Truitt",
  12: "Mindful Breathing for Anxiety",
  13: "10 Minute Anxiety Relief Practice",
  14: "10 min Guided Meditation For Sleep and Relaxation",
  15: "Meditation for Beginners",
}
let searchInput = document.querySelector(".medSer");
function filterVideosByName(searchText) {
  let filteredVideos = [];
  for (let videoId in namesOfVideos) {
    if (namesOfVideos[videoId].toLowerCase().includes(searchText.toLowerCase())) {
      filteredVideos.push({ id: videoId, name: namesOfVideos[videoId] });
    }
  }
  return filteredVideos;
}

function loadRandomVideoFromFilteredList(filteredVideos) {
  if (filteredVideos.length === 0) {
    videoNamePart.innerText = "No videos found. Please try again.";
    return;
  }

  let randomIndex = Math.floor(Math.random() * filteredVideos.length);
  let selectedVideo = filteredVideos[randomIndex];
  video.src = `../videos/${selectedVideo.id}Vid.mp4`;
  videoNamePart.innerText = selectedVideo.name;
}

function displayFilteredVideos(filteredVideos) {
  wholeVideosContainer.innerHTML = "";

  for (let filteredVideo of filteredVideos) {
    let videoId = filteredVideo.id;
    let videoName = filteredVideo.name;
    let oneVideo = createVideoBox(videoId, videoName);
    wholeVideosContainer.appendChild(oneVideo);
  }
}

function handleSearchInput(event) {
  let searchText = event.target.value;
  let filteredVideos = filterVideosByName(searchText);
  displayFilteredVideos(filteredVideos);
}

 searchInput.addEventListener("keyup", handleSearchInput);
function getRandomVideos (){
  return Math.floor(Math.random()*15)+1;
}

let videoNamePart= document.querySelector(".videoNamePart")



/*--------------------------------------------------------*/
let wholeVideosContainer = document.querySelector(".wholeVideosContainer");
let medContainer = document.querySelector(".medContainer")
let videoBack = document.querySelector(".videoBack")
function createVideoBox(videoId, videoName) {
  let oneVideo = document.createElement("div");
  oneVideo.classList.add("videoBox");

  let videoElement = document.createElement("video");
  videoElement.src = `../videos/${videoId}Vid.mp4`;

  let videoNameElement = document.createElement("h4");
  videoNameElement.innerText = videoName;

  let watchButton = document.createElement("button");
  watchButton.innerText = "Watch";
  watchButton.classList.add("watch");

  watchButton.addEventListener("click", function () {
    wholeVideosContainer.style.display = "none";
    medContainer.style.display = "flex";

    showSelectedVideo(videoId, videoName);
  });

  oneVideo.appendChild(videoElement);
  oneVideo.appendChild(videoNameElement);
  oneVideo.appendChild(watchButton);

  return oneVideo;
}

function populateVideoBoxes() {
  wholeVideosContainer.innerHTML = ""; 

  for (let videoId in namesOfVideos) {
    let videoName = namesOfVideos[videoId];
    let oneVideo = createVideoBox(videoId, videoName);
    wholeVideosContainer.appendChild(oneVideo);
  }
}

function showSelectedVideo (videoId, videoName) {
  let selectedVideoElement = document.getElementById("myVideo");
  selectedVideoElement.src = `../videos/${videoId}Vid.mp4`;
  videoNamePart.innerText = videoName;
  videoBack.addEventListener ("click", (e)=>{
    e.preventDefault();
    wholeVideosContainer.style.display="flex"
    medContainer.style.display="none"
  })
}
populateVideoBoxes();
