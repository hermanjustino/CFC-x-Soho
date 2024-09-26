// Define artist data (customize as needed)
const artists = [
    {
        id: '1',
        name: 'Alefiya Hassonjee',
        description: 'artist + psychotherapist',
        largeImage: '../assets/dina_roudman.jpg',
        headline: 'Painting, Digital Art',
        detailDescription: 'Never letting rejection get in the way',
        photo: './assets/dina_roudman.jpg', 
        instagram: 'leafya_a',
    },
    {
        id: '2',
        name: 'Angela Feng', 
        description: '',
        largeImage: '../assets/alanka_krajewski.jpg',
        headline: 'Writer/Filmmaker',
        detailDescription: 'Angela Feng is a Toronto-based writer and filmmaker currently working as a script editor and freelance screenwriter. Shes so tired right now, and unable to think of a fun fact about herself. Possibly that she falls in love with any man who can tread water for longer than 30 seconds? Its a problem.',
        photo: './assets/alanka_krajewski.jpg',
        instagram: 'angelafengg',
    },
    {
        id: '3',
        name: 'Angella Fajardo',
        description: 'One sentence description about Artist 2.',
        largeImage: '../assets/toronto/angella.webp',
        headline: 'Entrepreneur - event consultant',
        detailDescription: 'Angella Fajardo is the Founder of Ella Events & Marketing, an agency dedicated to cultivating communities both online and offline. Angella’s passion lies in creating immersive, memorable, and innovative experiences. She also leads Weddings & Proposals by Ella, celebrating life’s most precious moments. Previously, she held a senior role in public relations, artist management in entertainmment and literature, and beauty. Her interests lie at the intersections of storytelling, activism, big-picture ideation, and then, points A to Z execution. Angella pushes boundaries by harnessing curiosity and creativity  to accelerate positive change.',
        photo: '../assets/toronto/angella.webp',
        linkedin: 'https://www.linkedin.com/in/angellafajardo/',
        instagram: 'angellaamri',
    },
    {
        id: '4',
        name: 'Antoinette Johnson',
        description: 'One sentence description about Artist 2.',
        largeImage: '../assets/aly_jamal.jpg',
        headline: 'Wardrobe Stylist',
        detailDescription: 'Antoinette Johnson is a 2x award-nominated fashion stylist & creative director based in Toronto, Canada. Antoinette entered the fashion world as a blogger in 2014 with a passion for inclusive fashion. They quickly fell in love with styling and transitioned from style blogger to fashion styling. Antoinette has utilized their expertise in the fashion, music, and film industry by creating exceptional and vibrant looks. Antoinette worked has been featured in Complex Canada, CBC, CTV News, Rolling Loud and much more. ',
        photo: './assets/aly_jamal.jpg',
        linkedin: 'https://www.linkedin.com/in/antoinette-johnson-3b774825a/',
        instagram: 'antistyledit',
    },
    {
        id: '5',
        name: 'Arlesque',
        description: 'Elle Patterson wearing By Drakes.',
        largeImage: '../assets/drakes.jpg',
        headline: 'Music/Writing',
        detailDescription: 'What to expect in his next collection.',
        photo: './assets/drakes.jpg',
        instagram: 'arlesque',
    },
    {
        id: '6',
        name: 'Artin Avaznia',
        description: '',
        largeImage: '../assets/ivan_dossa.jpg',
        headline: 'Dance/Entrepreneurship/ Video Editing & Producing',
        detailDescription: 'As a solo dance artist, and creative director, Artin Avaznia is revolutionizing the way dance is perceived and consumed. As dance is most often relegated to the shadows, Artin has been advocating and leading a career that is proving dancers can be headliners and main acts in their own right. Artin became the first solo dance artist in history to perform Fierte Montreal, Pride Toronto, and Ottawas Westfest. Additionally with the support of Red Bull Canada, HVO Vodka, and Sapsuckers, Artin sold-out his first headlining show. Artin has been featured on CTVs Etalk, BlogTO, CTV News, CityNews, CBC Radio.',
        photo: './assets/ivan_dossa.jpg',
        instagram: 'artin613',
        linkedin: 'https://ca.linkedin.com/in/artin-avaznia-a4952a145',
    },
    {
        id: '7',
        name: 'Denis Wong',
        description: '',
        largeImage: '../assets/dcrmilda.jpg',
        headline: 'Actor',
        detailDescription: 'Becoming the number one DJ in the Czech Republic.',
        photo: './assets/dcrmilda.jpg',
        instagram: 'deniswongg',
    },
    {
        id: '8',
        name: 'Luswaattaa',
        description: 'Youtuber, Upcycled Arist',
        largeImage: '../assets/justin_lah.jpeg',
        headline: 'Youtuber, Upcycled Arist',
        detailDescription: 'Jordan 1’s into one of one’s.',
        photo: './assets/justin_lah.jpeg',
        instagram: 'luswaattaa',
    },
    {
        id: '9',
        name: 'Herman Justino',
        description: '',
        largeImage: '../assets/erica_reid.jpg',
        headline: 'Founder/Tech Professional',
        detailDescription: 'As a digital native with a passion for understanding technology\'s impact on society, Herman brings a unique perspective to our collective. With a background in full-stack development and a current pursuit of a master\'s degree in data science, Herman is dedicated to exploring the ethical implications of AI and the power of recommender algorithms. His entrepreneurial spirit and experience in both freelancing and founding a software development firm equip him to contribute innovative solutions to our creative endeavors. Notably, Herman developed the very website you\'re reading, showcasing his technical skills and commitment to crafting digital experiences.',
        photo: './assets/erica_reid.jpg',
        linkedin: 'https://www.linkedin.com/in/hermanjustino/',
        instagram: 'hermanjustino',
    },
    {
        id: '10',
        name: 'Jada-Hope Croasdale',
        description: '',
        largeImage: '../assets/xavier_king.jpg',
        headline: 'Singer/Song Writer',
        detailDescription: 'Born Jada Hope, she is an alternative R&B & Rap, singer/songwritter. Her voice captivates with a lustrous, edgy tone and a dazed delivery that effortlessly floats above any beat. Influenced by legends such as Sade, Billie Holiday, Eve and Erykah Badu, she has always had a passion for blending genres and carving out her own unique path. Pulling from her Caribbean roots, she is inspired by the different melodies, songs and beats of genres like reggae and calypso; Jada Hope authentically intrigues any audience with originality. With her latest single Boy From Sauga, a dark, melodic Rap, it tells a very honest story of deceit and love,that will definitly just be the beginning for this icon in the making !',
        photo: './assets/xavier_king.jpg',
        linkedin: 'iamjadahope',
        instagram: 'Toronto',
    },
    {
        id: '11',
        name: 'Kadija Osman',
        description: '',
        largeImage: '../assets/dj_savage.jpg',
        headline: 'Screenwriting/Writer',
        detailDescription: 'From burning and selling CD’s for $5 to curating NYC events.',
        photo: './assets/dj_savage.jpg',
        instagram: 'kadija.osman',
    },
    {
        id: '12',
        name: 'Lamesha Ruddock',
        description: '',
        largeImage: '../assets/caos_moto.jpg',
        headline: 'Cultural Producer/Performance Artist',
        detailDescription: 'Lamesha Ruddock, a cultural producer, stage manager, performance artist, and dedicated historian, specialises in 20th-century Black British feminist history. Her immersive theatrical experiences ignite engagement with Black diasporic history, empowering creative expression. Lamesha has had stage management roles on Hamilton West End and at the Royal Court Theatre and was Co-Executive Director of Boundless Theatre in 2023. She was formerly a producer at Luminato Festival Toronto 2024; General Manager at Shadowland Theatre; and is currently Development Coordinator at BAND Galley and an Access Support Worker for Arts Council England. Fun Fact when I was in primary school I trialled for Chelsea Girls FC. ',
        photo: './assets/caos_moto.jpg',
        linkedin: 'https://www.linkedin.com/in/lamesha-ruddock-600082156?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        instagram: 'blemmefataleproductions',
    },
    {
        id: '13',
        name: 'Libin Ahmed',
        description: '',
        largeImage: '../assets/kase_fenly.jpg',
        headline: 'Headline for Artist 2',
        detailDescription: '“How does a human take a thought and turn it into matter?” ',
        photo: './assets/kase_fenly.jpg',
        instagram: 'libin.archives',
    },
    {
        id: '14',
        name: 'Mamoundu Mardis-Chatwin',
        description: '',
        largeImage: '../assets/kase_fenly.jpg',
        headline: 'Web Creator',
        detailDescription: '“How does a human take a thought and turn it into matter?” ',
        photo: './assets/kase_fenly.jpg',
        instagram: 'mamoundu',
    },
    {
        id: '15',
        name: 'Michelle Hopkins',
        description: '',
        largeImage: '../assets/kase_fenly.jpg',
        headline: 'Singer/Songwriter',
        detailDescription: '“How does a human take a thought and turn it into matter?” ',
        photo: './assets/kase_fenly.jpg',
        instagram: 'Hopkiiins',
    },
    {
        id: '16',
        name: 'Momoh Kakulatombo-Misoi',
        description: '',
        largeImage: '../assets/kase_fenly.jpg',
        headline: 'Communications Professional',
        detailDescription: '“How does a human take a thought and turn it into matter?” ',
        photo: './assets/kase_fenly.jpg',
        instagram: 'iso_grains_of_tiwai',
    },
    {
        id: '17',
        name: 'Muhammad Mneina',
        description: '',
        largeImage: '../assets/kase_fenly.jpg',
        headline: 'Singer/Songwriter',
        detailDescription: 'Muhammad Mneina, known professionally as Saturn Blue, is a Libyan-Canadian singer, songwriter, and producer. Formerly performing under the name Kensho, he gained recognition in 2016 with his hit single "Breathe & Receive," which garnered millions of streams. After a seven-year hiatus, he returns with renewed focus and dedication to his craft as Saturn Blue.',
        photo: './assets/kase_fenly.jpg',
        instagram: 'muhammadmneina',
    },
    {
        id: '18',
        name: 'Parmis Beyzaei',
        description: '',
        largeImage: '../assets/kase_fenly.jpg',
        headline: 'Fashion Designer/Pattern Maker',
        detailDescription: '“How does a human take a thought and turn it into matter?” ',
        photo: './assets/kase_fenly.jpg',
        instagram: 'notparmis',
    },
    {
        id: '19',
        name: 'Sahil Kumar',
        description: '',
        largeImage: '../assets/kase_fenly.jpg',
        headline: 'Editor, Creative Director',
        detailDescription: '“How does a human take a thought and turn it into matter?” ',
        photo: './assets/kase_fenly.jpg',
        instagram: 'sunsetsahil',
    },
    {
        id: '20',
        name: 'Shyla Gray',
        description: '',
        largeImage: '../assets/kase_fenly.jpg',
        headline: 'Singer/Songwriter',
        detailDescription: '“How does a human take a thought and turn it into matter?” ',
        photo: './assets/kase_fenly.jpg',
        instagram: 'shylagray_',
    },
    {
        id: '21',
        name: 'Simon Mikre',
        description: '',
        largeImage: '../assets/kase_fenly.jpg',
        headline: 'Talent Management, Event Planning, Gaming',
        detailDescription: '“Simon is a music industry professional with experience in artist management, event planning, and marketing. He currently manages TRYZTN and Geneva Lei, focusing on everything from their branding and promotion to booking live shows. Hes worked on concert bookings, collaborated with venues and promoters, and developed marketing strategies to help artists grow. With a background in business and communications, hes skilled at building strong relationships in the live events world. Passionate about supporting emerging talent, hes driven to make an impact in the music scene and help artists thrive.” ',
        photo: './assets/kase_fenly.jpg',
        linkedin: 'https://www.linkedin.com/in/simonmikre/',
        instagram: 'simonmikre',
    },
    {
        id: '22',
        name: 'Sunday Kelvin',
        description: '',
        largeImage: '../assets/kase_fenly.jpg',
        headline: 'Musician/Artist/Singer',
        detailDescription: '“How does a human take a thought and turn it into matter?” ',
        photo: './assets/kase_fenly.jpg',
        instagram: 'redssunday',
    },
    {
        id: '23',
        name: 'Tamara Toussaint',
        description: '',
        largeImage: '../assets/kase_fenly.jpg',
        headline: 'Musician/Artist/Singer',
        detailDescription: 'Meet Toussaint: a genre-defying singer/songwriter, who merges electronica and alternative influences, shaped by classical piano training and diverse performing arts. Her debut EP, "Ethereal," and sold-out concert showcase her commitment to immersive storytelling. An alumna of RBC X Artscape Launchpad and Soundstock Academy shes both an artist and entrepreneur. In her quest for a debut album, Toussaint pushes artistic boundaries, inviting listeners into emotional landscapes. Her music, beyond melodies, celebrates individuality and empowers outcasts. With a vision to inspire self-expression, Toussaints world rejects conformity, championing uniqueness fearlessly.',
        photo: './assets/kase_fenly.jpg',
        linkedin: 'https://toussaint.cargo.site',
        instagram: 'toussvint',
    },
    {
        id: '24',
        name: 'Veeda Tanwir',
        description: '',
        largeImage: '../assets/kase_fenly.jpg',
        headline: 'Events Management, Visual Arts',
        detailDescription: '“How does a human take a thought and turn it into matter?” ',
        photo: './assets/kase_fenly.jpg',
        instagram: 'veedazzzz',
    },
    {
        id: '25',
        name: 'Zaenab Ojoawo',
        description: '',
        largeImage: '../assets/kase_fenly.jpg',
        headline: 'Community Organizer/Curator',
        detailDescription: '“How does a human take a thought and turn it into matter?” ',
        photo: './assets/kase_fenly.jpg',
        instagram: 'yourubadboii',
    }
];

// Function to create the links and bios
function createLinksAndBios() {
    const linksContainer = document.getElementById('links-container');

    artists.forEach(artist => {
        // Create link element
        const link = document.createElement('a');
        link.className = 'link';
        link.textContent = artist.name;
        link.href = '#';
        link.dataset.artistId = artist.id;

        // Create bio element
        const bio = document.createElement('div');
        bio.className = 'bio';
        bio.id = `bio-${artist.id}`;
        bio.innerHTML = `
            <h3>${artist.headline}</h3>
            <img src="../assets/toronto/${artist.name}.webp" alt="${artist.name}" class="bio-image" loading="lazy">
            <p>${artist.detailDescription}</p>
        `;

        // Create social links container
        const socialLinks = document.createElement('div');
        socialLinks.className = 'social-links';

        // Conditionally add social links
        if (artist.linkedin) {
            const linkedinLink = document.createElement('a');
            linkedinLink.href = artist.linkedin;
            linkedinLink.target = '_blank';
            linkedinLink.innerHTML = '<img src="../assets/icons/1.svg" alt="LinkedIn">';
            socialLinks.appendChild(linkedinLink);
        }

        if (artist.instagram) {
            const instagramLink = document.createElement('a');
            instagramLink.href = `https://www.instagram.com/${artist.instagram}`;
            instagramLink.target = '_blank';
            instagramLink.innerHTML = '<img src="../assets/icons/3.svg" alt="Instagram">';
            socialLinks.appendChild(instagramLink);
        }

        if (artist.tiktok) {
            const tiktokLink = document.createElement('a');
            tiktokLink.href = `https://www.tiktok.com/@${artist.tiktok}`;
            tiktokLink.target = '_blank';
            tiktokLink.innerHTML = '<img src="../assets/icons/2.svg" alt="TikTok">';
            socialLinks.appendChild(tiktokLink);
        }

        // Append social links to bio if any exist
        if (socialLinks.children.length > 0) {
            bio.appendChild(socialLinks);
        }

        // Append link and bio to the container
        linksContainer.appendChild(link);
        linksContainer.appendChild(bio);

        // Add click event to the link
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const bioElement = document.getElementById(`bio-${artist.id}`);
            bioElement.style.display = bioElement.style.display === 'none' || bioElement.style.display === '' ? 'block' : 'none';
        });
    });
}

// Initialize the links and bios on page load
document.addEventListener('DOMContentLoaded', createLinksAndBios);