const songList = document.getElementById('songList');
const addButton = document.getElementById('add');
const searchInput = document.getElementById('searchInput');

addButton.addEventListener('click', () => {
  const titleInput = document.getElementById('songTitle');
  const artistInput = document.getElementById('songArtist');

  const title = titleInput.value.trim();
  const artist = artistInput.value.trim();

  if (title && artist) {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center bg-light text-dark';
    li.innerHTML = `
      <p>${title}</p>
      <small class="d-block text-muted">${artist}</small>
      <span class="badge bg-danger btn-delete" onclick="deleteSong(this)">Delete</span>
    `;
    songList.appendChild(li);
    titleInput.value = '';
    artistInput.value = '';
  }
});

function deleteSong(button) {
  const li = button.parentElement;
  songList.removeChild(li);
}

function filterSongs() {
  const filter = searchInput.value.toLowerCase();
  const items = songList.getElementsByTagName('li');

  for (let i = 0; i < items.length; i++) {
    const songTitle = items[i].getElementsByTagName('p')[0].textContent.toLowerCase();
    if (songTitle.includes(filter)) {
      items[i].style.display = '';
    } else {
      items[i].style.display = 'none';
    }
  }
}
