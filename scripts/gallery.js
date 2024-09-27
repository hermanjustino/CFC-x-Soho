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
        gallery.appendChild(galleryItem);
    });
}

document.addEventListener('DOMContentLoaded', createGallery);