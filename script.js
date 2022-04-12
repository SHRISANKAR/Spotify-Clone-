console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "REMO", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "NAMMA VITTU PILLAI", filePath: "songs/2.mp3", coverPath: "covers/2.jfif"},
    {songName: "NANBAN", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "KATHTHI", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "KGF CHAPTER-1", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "MASTER", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "RRR", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "BEAST", filePath: "songs/8.mp3", coverPath: "covers/8.jfif"},
    {songName: "RADHE SHYAM", filePath: "songs/9.mp3", coverPath: "covers/99.jpg"},
    {songName: "PUSPHA", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "CHENNAI EXPRESS", filePath: "songs/11.mp3", coverPath: "covers/23.jpg"},
    {songName: "MSD UNTOLDSTORY", filePath: "songs/12.mp3", coverPath: "covers/22.jfif"},
    {songName: "BB ALBUM", filePath: "songs/13.mp3", coverPath: "covers/24.jfif"},
    {songName: "ORASAADHA", filePath: "songs/14.mp3", coverPath: "covers/21.jfif"},
    {songName: "SMP", filePath: "songs/15.mp3", coverPath: "covers/20.jpg"},
    {songName: "CHENNAI EXPRESS", filePath: "songs/16.mp3", coverPath: "covers/23.jpg"},
    {songName: "PANJABII", filePath: "songs/17.mp3", coverPath: "covers/7.jpg"},
    {songName: "BAAR BAAR DHEKO", filePath: "songs/18.mp3", coverPath: "covers/19.jfif"},
    {songName: "MSD UNTOLDSTORY", filePath: "songs/19.mp3", coverPath: "covers/22.jfif"},
    {songName: "BB ALBUM", filePath: "songs/20.mp3", coverPath: "covers/24.jfif"},
    {songName: "TAXI WALA", filePath: "songs/21.mp3", coverPath: "covers/18.jpg"},
    {songName: "KOOTATHIL ORUVAN", filePath: "songs/22.mp3", coverPath: "covers/17.jpg"},
    {songName: "THADAM", filePath: "songs/23.mp3", coverPath: "covers/15.jfif"},
    {songName: "TIK TIK TIK", filePath: "songs/24.mp3", coverPath: "covers/16.jpg"},
    {songName: "TAMIZH PADAM 2", filePath: "songs/25.mp3", coverPath: "covers/13.jpg"},
    {songName: "SMP", filePath: "songs/26.mp3", coverPath: "covers/20.jpg"},
    {songName: "GHAJINI", filePath: "songs/27.mp3", coverPath: "covers/14.jpg"},
    {songName: "MR X", filePath: "songs/28.mp3", coverPath: "covers/12.jpg"},
    {songName: "MR X", filePath: "songs/29.mp3", coverPath: "covers/12.jpg"},
    {songName: "BMB", filePath: "songs/30.mp3", coverPath: "covers/11.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=29){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 29;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})