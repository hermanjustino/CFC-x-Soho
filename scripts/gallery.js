function getPhotoUrl(artistName) {
    return `./assets/toronto/${artistName}.webp`;
}

function createGallery() {
    const gallery = document.getElementById('gallery');

    artists.forEach(artist => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';

        const img = document.createElement('img');
        img.src = getPhotoUrl(artist.name);
        img.alt = artist.name;

        const artistName = document.createElement('div');
        artistName.className = 'artist-name';
        artistName.textContent = artist.name;

        galleryItem.appendChild(img);
        galleryItem.appendChild(artistName);
        galleryItem.addEventListener('click', () => openPanel(artist));
        gallery.appendChild(galleryItem);
    });
}

document.addEventListener('DOMContentLoaded', createGallery);
function openPanel(artist) {
    const artistPanel = document.getElementById('artist-panel');
    const artistName = document.getElementById('artist-name');
    const artistHeadline = document.getElementById('artist-headline');
    const artistPronouns = document.getElementById('artist-pronouns');
    const artistPhoto = document.getElementById('artist-photo');
    const artistDetailDescription = document.getElementById('artist-detailDescription');
    const artistLinkedIn = document.getElementById('artist-linkedin');
    const artistInstagram = document.getElementById('artist-instagram');
    const artistPersonal = document.getElementById('artist-personal');

    artistName.textContent = artist.name;
    artistHeadline.textContent = artist.headline;
    artistPronouns.textContent = artist.pronouns;
    artistPhoto.src = getPhotoUrl(artist.name);
    artistDetailDescription.innerHTML = artist.detailDescription;

    if (artist.linkedin) {
        artistLinkedIn.href = artist.linkedin;
        artistLinkedIn.style.display = 'inline';
    } else {
        artistLinkedIn.style.display = 'none';
    }

    if (artist.personalSite) {
        artistPersonal.href = artist.personalSite;
        artistPersonal.style.display = 'inline';
    } else {
        artistPersonal.style.display = 'none';
    }

    if (artist.instagram) {
        artistInstagram.href = `https://www.instagram.com/${artist.instagram}`;
        artistInstagram.style.display = 'inline';
    } else {
        artistInstagram.style.display = 'none';
    }

    artistPanel.classList.add('open');
}

function closePanel() {
    document.getElementById('artist-panel').classList.remove('open');
}