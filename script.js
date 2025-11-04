// Dropdown toggle
document.getElementById('videosMenu').addEventListener('click', () => {
  document.getElementById('videosDropdown').classList.toggle('hidden');
});

// When Anime button clicked
document.getElementById('animeBtn').addEventListener('click', () => {
  const contentTitle = document.getElementById('contentTitle');
  const videoListDiv = document.getElementById('videoList');
  const videoPlayerContainer = document.getElementById('videoPlayerContainer');

  // Change title
  contentTitle.textContent = "My Gift LVL9999 Unlimited Gacha Season 1";

  // Anime episodes
  const episodes = [
    "My.Gift.Lvl.9999.Unlimited.Gacha.S01E01.540p.x265.AAC.[9jaRocks.Com].mp4",
    "My.Gift.Lvl.9999.Unlimited.Gacha.S01E02.540p.x265.AAC.[9jaRocks.Com].mp4",
    "My.Gift.Lvl.9999.Unlimited.Gacha.S01E03.540p.x265.AAC.[9jaRocks.Com].mp4",
    "My.Gift.Lvl.9999.Unlimited.Gacha.S01E04.540p.x265.AAC.[9jaRocks.Com].mp4",
    "My.Gift.Lvl.9999.Unlimited.Gacha.S01E05.540p.x265.AAC.[9jaRocks.Com].mp4"
  ];

  // Folder path (relative to this HTML file)
  const folder = "My_Gift_LVL9999_Unlimited_Gacha_Season1/";

  // Generate episode list
  videoListDiv.innerHTML = "";
  episodes.forEach((file, index) => {
    const item = document.createElement('div');
    item.classList.add('video-item');
    item.textContent = `Episode ${index + 1}`;
    item.addEventListener('click', () => {
      const player = document.getElementById('videoPlayer');
      const source = document.getElementById('videoSource');
      source.src = folder + file;
      player.load();
      player.play();
      videoPlayerContainer.classList.remove('hidden');
    });
    videoListDiv.appendChild(item);
  });
});
