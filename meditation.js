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
  16: "Easy Guided Meditation for Beginners",
  17: "Guided Meditation For Anxiety",
  18: "Guided Meditation For Reprogramming Your Mind  ",
  19: "The Powerful Release of Letting Go! Guided Meditation",
  20: "Daily Calm - 10 Minute Mindfulness Meditation - Be Present ",
}
let searchInput = document.querySelector(".medSer");
function filterVideosByName(searchText) {
  let filteredVideos = [];
  for (let videoId in namesOfVideos) {
     if (namesOfVideos[videoId].toLowerCase().includes(searchText.toLowerCase())) {
       filteredVideos.push({id: videoId, name: namesOfVideos[videoId]});
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
  video.src=`./videos/${selectedVideo.id}Vid.mp4`;
  videoNamePart.innerText= selectedVideo.name;
 }
 function handleSearchInput(event) {
  let searchText = event.target.value;
  let filteredVideos = filterVideosByName(searchText);
  loadRandomVideoFromFilteredList(filteredVideos);
 }
 

 searchInput.addEventListener("keyup", handleSearchInput);
function getRandomVideos (){
  return Math.floor(Math.random()*20)+1;
}
let leftArrow = document.querySelector(".leftArrow");
let rightArrow = document.querySelector(".rightArrow");
let videoNamePart= document.querySelector(".videoNamePart")

leftArrow.addEventListener("click", function(){
 let randomNumber = getRandomVideos();
 video.src=`./videos/${randomNumber}Vid.mp4`
 videoNamePart.innerText= namesOfVideos[randomNumber]
});

rightArrow.addEventListener("click", function(){
 let randomNumber = getRandomVideos();
 video.src=`./videos/${randomNumber}Vid.mp4`
 videoNamePart.innerText= namesOfVideos[randomNumber]
});