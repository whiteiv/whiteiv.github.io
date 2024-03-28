function showCategory(category) {
    hideWelcome();
    hideAllLists();
    var selectedList = document.getElementById(category + 'List');
    if (selectedList) {
        selectedList.classList.add('active');
    }
}

function showMovieDetails(movieName) {
    document.getElementById('mediaDetails').innerHTML = `
        <img src="placeholder.jpg" alt="${movieName}">
        <p>This is the written review for ${movieName}.</p>
    `;
}

function showShowDetails(showName) {
    document.getElementById('mediaDetails').innerHTML = `
        <img src="placeholder.jpg" alt="${showName}">
        <p>This is the written review for ${showName}.</p>
    `;
}

function showVideoGameDetails(videoGameName) {
    document.getElementById('mediaDetails').innerHTML = `
        <img src="placeholder.jpg" alt="${videoGameName}">
        <p>This is the written review for ${videoGameName}.</p>
    `;
}

function hideAllLists() {
    var mediaLists = document.querySelectorAll('.media-list');
    mediaLists.forEach(function(list) {
        list.classList.remove('active');
    });
}

function hideWelcome() {
    var welcomeContainer = document.querySelector('.welcome-heading');
    if (welcomeContainer) {
        welcomeContainer.style.display = 'none';
    }
    var welcomeGif = document.querySelector('.welcome-gif');
    if (welcomeGif) {
        welcomeGif.style.display = 'none';
    }
}
