function getPhotoUrl(artistName) {
    return `../soho/assets/toronto/${artistName}.webp`;
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
    document.getElementById('artist-name').textContent = artist.name;
    document.getElementById('artist-headline').textContent = artist.headline || '';
    document.getElementById('artist-pronouns').textContent = artist.pronouns || '';
    document.getElementById('artist-photo').src = getPhotoUrl(artist.name);
    document.getElementById('artist-detailDescription').textContent = artist.detailDescription;

    const linkedinLink = document.getElementById('artist-linkedin');
    const instagramLink = document.getElementById('artist-instagram');

    if (artist.linkedin) {
        linkedinLink.href = artist.linkedin;
        linkedinLink.style.display = 'inline-block';
    } else {
        linkedinLink.style.display = 'none';
    }

    if (artist.instagram) {
        instagramLink.href = `https://www.instagram.com/${artist.instagram}`;
        instagramLink.style.display = 'inline-block';
    } else {
        instagramLink.style.display = 'none';
    }

    document.getElementById('artist-panel').classList.add('open');
}

function closePanel() {
    document.getElementById('artist-panel').classList.remove('open');
}