// Define artist data (customize as needed)
const artists = [
    {
        id: '1',
        name: 'Alefiya Hassonjee',
        description: 'artist + psychotherapist',
        headline: 'Painting, Digital Art',
        detailDescription: `Alefiya is an abstract contemporary artist with a 
        Bachelor of Fine Arts in Drawing and Painting, specializing in Digital 
        Painting and Expanded Animation from OCAD University. Her art is a deeply 
        personal exploration of self, existentialism, and contemporary societal values. 
        Through her creations, Alefiya crafts a nuanced dialogue inspired by the human 
        experience, inviting viewers to reflect on the profound questions that shape 
        our existence. Continuously exploring the limitless possibilities of creative 
        expression, her work seamlessly blends traditional and digital media, mirroring 
        her journey through the intersection of analog and digital art forms.`,
        instagram: 'leafya_a',
        linkedin: 'https://www.linkedin.com/in/alefiyahassonjee/',
        pronouns: 'She/Her',
    },
    {
        id: '2',
        name: 'Angela Feng',
        headline: 'Writer/Filmmaker',
        detailDescription: `Angela Feng is a Toronto-based writer 
        and filmmaker currently working as a script editor and freelance 
        screenwriter. She's so tired right now, and unable to think of a 
        fun fact about herself. Possibly that she falls in love with any man 
        who can tread water for longer than 30 seconds? It's a problem.`,
        instagram: 'angelafengg',
        pronouns: 'She/Her',
    },
    {
        id: '3',
        name: 'Angella Fajardo',
        headline: 'Entrepreneur - event consultant',
        detailDescription: `Angella Fajardo is the Founder of Ella Events & Marketing, an agency 
        dedicated to cultivating communities both online and offline. Angella’s passion lies in
         creating immersive, memorable, and innovative experiences. She also leads Weddings 
         & Proposals by Ella, celebrating life’s most precious moments. Previously, she 
         held a senior role in public relations, artist management in entertainmment and 
         literature, and beauty. Her interests lie at the intersections of storytelling, 
         activism, big-picture ideation, and then, points A to Z execution. Angella pushes 
         boundaries by harnessing curiosity and creativity  to accelerate positive change.`,
        linkedin: 'https://www.linkedin.com/in/angellafajardo/',
        instagram: 'angellaamri',
        pronouns: 'She/Her',
    },
    {
        id: '4',
        name: 'Antoinette Johnson',
        headline: 'Wardrobe Stylist',
        detailDescription: `Antoinette Johnson is a 2x award-nominated fashion stylist & 
        creative director based in Toronto, Canada. Antoinette entered the fashion world 
        as a blogger in 2014 with a passion for inclusive fashion. They quickly fell in 
        love with styling and transitioned from style blogger to fashion styling. Antoinette 
        has utilized their expertise in the fashion, music, and film industry by creating 
        exceptional and vibrant looks. Antoinette worked has been featured in Complex Canada, 
        CBC, CTV News, Rolling Loud and much more. `,
        linkedin: 'https://www.linkedin.com/in/antoinette-johnson-3b774825a/',
        instagram: 'antistyledit',
        pronouns: 'They/She',
    },
    {
        id: '5',
        name: 'Arlesque',
        detailDescription: `Arlesque is an alternative artist whose sound is defined by melancholic inflections and introspective lyrics. By blending genres seamlessly, he creates rich, atmospheric soundscapes just as he imagines them.
        His lyrics explore themes of romance, drawing inspiration from personal experiences and the nuances of life. Arlesque’s music captures the beauty of vulnerability and the complexity of human emotions.
        <br><br>His debut single, “Everything You Do,” is out now on all major platforms!`,
        largeImage: '../assets/drakes.jpg',
        headline: 'Music/Writing',
        photo: './assets/drakes.jpg',
        instagram: 'arlesque',
    },
    {
        id: '6',
        name: 'Artin Avaznia',
        headline: 'Dance/Entrepreneurship/ Video Editing & Producing',
        detailDescription: 'As a solo dance artist, and creative director, Artin Avaznia is revolutionizing the way dance is perceived and consumed. As dance is most often relegated to the shadows, Artin has been advocating and leading a career that is proving dancers can be headliners and main acts in their own right. Artin became the first solo dance artist in history to perform Fierte Montreal, Pride Toronto, and Ottawas Westfest. Additionally with the support of Red Bull Canada, HVO Vodka, and Sapsuckers, Artin sold-out his first headlining show. Artin has been featured on CTVs Etalk, BlogTO, CTV News, CityNews, CBC Radio.',
        instagram: 'artin613',
        linkedin: 'https://ca.linkedin.com/in/artin-avaznia-a4952a145',
        pronouns: 'He/Him',
    },
    {
        id: '7',
        name: 'Denis Wong',
        headline: 'Actor',
        detailDescription: 'Becoming the number one DJ in the Czech Republic.',
        instagram: 'deniswongg',
    },
    {
        id: '8',
        name: 'Faith Omorodion',
        headline: 'Youtuber, Upcycled Arist',
        detailDescription: `My name is Faith Omorodion AKA Luswaattaa. I am a Nigerian Female multidisciplinary artist. 
        I live in Toronto and I attend the Toronto Metropolitan University where I am studying to be an urban planner. 
        I also run a food catering business and create content on social media; there’s a link to my profile where 
        you we can connect further ! I am passionate about sustainability and advocacy; the art collection I am 
        exhibiting today are a part of my story and were made with up cycled materials. I can’t wait to share this 
        with you! Thank you for your support.`,
        instagram: 'luswaattaa',
    },
    {
        id: '9',
        name: 'Herman Justino',
        headline: 'Founder/Tech Professional',
        detailDescription: `As a digital native with a passion for understanding technology's 
        impact on society, Herman brings a unique perspective to our collective. With a background 
        in full-stack development and a current pursuit of a master's degree in data science, Herman 
        is dedicated to exploring the ethical implications of AI and the power of recommender algorithms. 
        His entrepreneurial spirit and experience in both freelancing and founding a software development 
        firm equip him to contribute innovative solutions to our creative endeavors. 
        <br><br>Notably, Herman developed the very website you're reading, showcasing his technical skills and commitment to crafting digital experiences.`,
        linkedin: 'https://www.linkedin.com/in/hermanjustino/',
        instagram: 'hermanjustino',
        pronouns: 'He/Him',
    },
    {
        id: '10',
        name: 'Jada-Hope Croasdale',
        headline: 'Singer/Song Writer',
        detailDescription: `Born Jada Hope, she is an alternative R&B & Rap, 
        singer/songwritter. Her voice captivates with a lustrous, edgy tone 
        and a dazed delivery that effortlessly floats above any beat. Influenced 
        by legends such as Sade, Billie Holiday, Eve and Erykah Badu, she has 
        always had a passion for blending genres and carving out her own unique 
        path. Pulling from her Caribbean roots, she is inspired by the different 
        melodies, songs and beats of genres like reggae and calypso; Jada Hope 
        authentically intrigues any audience with originality. With her latest 
        single Boy From Sauga, a dark, melodic Rap, it tells a very honest story 
        of deceit and love,that will definitly just be the beginning for this icon in the making !`,
        linkedin: 'iamjadahope',
        instagram: 'Toronto',
        pronouns: 'she/her',
    },
    {
        id: '11',
        name: 'Kadija Osman',
        headline: 'Screenwriting/Writer',
        detailDescription: 'From burning and selling CD’s for $5 to curating NYC events.',
        instagram: 'kadija.osman',
    },
    {
        id: '12',
        name: 'Lamesha Ruddock',
        headline: 'Cultural Producer/Performance Artist',
        detailDescription: `Lamesha Ruddock, a cultural producer, stage manager, performance artist, 
        and dedicated historian, specialises in 20th-century Black British feminist history. Her
         immersive theatrical experiences ignite engagement with Black diasporic history, 
         empowering creative expression. Lamesha has had stage management roles on Hamilton 
         West End and at the Royal Court Theatre and was Co-Executive Director of Boundless 
         Theatre in 2023. She was formerly a producer at Luminato Festival Toronto 2024; 
         General Manager at Shadowland Theatre; and is currently Development Coordinator at 
         BAND Galley and an Access Support Worker for Arts Council England. Fun Fact when I 
         was in primary school I trialled for Chelsea Girls FC.`,
        linkedin: 'https://www.linkedin.com/in/lamesha-ruddock-600082156?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        instagram: 'blemmefataleproductions',
        pronouns: 'she/her',
    },
    {
        id: '13',
        name: 'Libin Ahmed',
        headline: 'Headline for Artist 2',
        detailDescription: `Libin considers herself an “adjustable puzzle piece,” with a diverse 
        skill set shaped by various unique roles and experiences. Passionate about community engagement, s
        ocial justice, and the arts, she has over five years of experience working with non-profits and 
        diverse communities to drive tangible social change.
        Holding a Social Service Work diploma and a Bachelor of Child and Youth Care from Humber College, Libin is 
        currently exploring the intersection of arts and social justice in her postgraduate studies in Professional 
        Writing and Communications. Her professional journey includes creating arts programs, providing 
        administrative support, writing grants, coordinating events, and advocating for marginalized populations.
        As a poet, author, and photographer, Libin is a two-time official selection at international 
        film festivals. She thrives on building meaningful connections that foster partnerships and spark 
        social change, reinforcing her belief in care-driven action`,
        instagram: 'libin.archives',
    },
    {
        id: '14',
        name: 'Mamoundu Mardis-Chatwin',
        headline: 'Web Creator',
        detailDescription: `Mamoundu Mardis-Chatwin is an emerging 
        photographer originally from British Columbia and currently 
        based in Toronto, ON. With a specialization in portrait and 
        editorial photography, Mamoundu's artistic journey revolves 
        around the exploration of words and their transformation into 
        visual expressions. Through her work, she seeks to share her unique interpretations and 
        understanding of written pieces, infusing her art with a poetic and narrative essence.  
        `,
        instagram: 'mamoundu',
        linkedin: 'https://www.linkedin.com/in/mamoundu-mardis-chatwin-618199232/',
        pronouns: 'She/Her',
    },
    {
        id: '15',
        name: 'Michelle Hopkins',
        headline: 'Singer/Songwriter',
        detailDescription: `Michelle Hopkins writes emotive, introspective lyrics, exploring themes of love, loss, and personal growth. She creates R&B, Soul, Folk, and Afro-Pop inspired music, inspired by artists like Tems, Adele, and Ed Sheeran. 

Hopkins is a Tanzanian-Canadian artist determined to introduce Swahili to the West. She grew up in Dar-Es-Salaam and moved to Toronto when she was fifteen. Hopkins remains deeply connected to her culture infusing her lyrics with Swahili and Tanzanian influences.  

Beautiful Places is a blend of alternative R&B and Folk melodies unified by Hopkins' choice of descriptive language. "'Beautiful Places' is a reminder to myself that the journey matters more than the destination." Hopkins chuckles. "It's hard being a hopeless romantic when you're also a control freak."   

Hopkins secured FACTOR funding for her single “One Hour on Earth” (2023) and OAC funding for the creation of her debut EP “How Did We Get Here?” (2025). 

Hopkins was awarded “Best New Solo Artist” at the Mississauga Music awards (2024).
`,
        instagram: 'Hopkiiins',
        pronouns: 'she/her',
    },
    {
        id: '16',
        name: 'Momoh Kakulatombo-Misoi',
        headline: 'Communications Professional',
        detailDescription: `Momoh (he/him) is an interdisciplinary Kenyan Sierra Leonean creative 
        non-fiction writer and professional cook living and working within the Dish With One Spoon 
        Wampum Belt Covenant territory Tkaronto. His creative writing practices draws inspiration 
        from the nested set of relationships between the built environment and human life and the 
        dimensions of understanding between them. Follow his creative studio projects at 
        \nwww.njanejourney.com`,
        instagram: 'iso_grains_of_tiwai',
        pronouns: 'He/Him',
    },
    {
        id: '17',
        name: 'Muhammad Mneina',
        headline: 'Singer/Songwriter',
        detailDescription: `Muhammad Mneina, known professionally as Saturn Blue, 
        is a Libyan-Canadian singer, songwriter, and producer. Formerly performing 
        under the name Kensho, he gained recognition in 2016 with his hit single 
        "Breathe & Receive," which garnered millions of streams. After a seven-year 
        hiatus, he returns with renewed focus and dedication to his craft as Saturn Blue.`,
        instagram: 'muhammadmneina',
        pronouns: 'He/Him',
    },
    {
        id: '18',
        name: 'Parmis Beyzaei',
        headline: 'Fashion Designer/Pattern Maker',
        detailDescription: `Parmis Beyzaei is a Toronto-based pattern-maker. 
        With extensive experience in the luxury sector as a buyer, Parmis 
        combines her industry knowledge with technical expertise to create refined, 
        contemporary patterns. She works as a freelance patternmaker and recently 
        launched her own collection of patterns, available on her Etsy shop.`,
        instagram: 'notparmis',
    },
    {
        id: '19',
        name: 'Sahil Kumar',
        headline: 'Editor, Creative Director',
        detailDescription: `Sahil Kumar is a Video Director, Creative Director and Editor based in
        Toronto, ON. Working mainly in the commercial and music industry -
he directs, shoots and edit both music video and corporate content,
as well as social media campaigns.
Sahil’s main goal is to bring unique and impactful content through
collaborating with like-minded creatives and companies and bringing
their best creative ideas to life.`,
        instagram: 'sunsetsahil',
    },
    {
        id: '20',
        name: 'Shyla Gray',
        headline: 'Singer/Songwriter',
        detailDescription: `Shyla Gray is a Toronto-based singer/songwriter known for her soulful voice 
        and uplifting energy. With a sound rooted in old-school soul and jazz, she brings light and 
        positivity to her audience. Shyla has collaborated with Grammy-nominated producer Mike Hector 
        on her recent single “Nobody Else” gained recognition with her debut single, which received 
        multiple playlist features on Apple Music and Spotify. She has performed at notable venues 
        like KOKO London and the Drake Hotel in Toronto, and she is currently working on her first 
        project set to release in 2025`,
        instagram: 'shylagray_',
    },
    {
        id: '21',
        name: 'Simon Mikre',
        headline: 'Talent Management, Event Planning, Gaming',
        detailDescription: `Simon is a music industry professional with experience 
        in artist management, event planning, and marketing. He currently manages 
        TRYZTN and Geneva Lei, focusing on everything from their branding and promotion 
        to booking live shows. He's worked on concert bookings, collaborated with venues 
        and promoters, and developed marketing strategies to help artists grow. With a 
        background in business and communications, he’s skilled at building strong relationships 
        in the live events world. Passionate about supporting emerging talent, he’s driven to 
        make an impact in the music scene and help artists thrive.`,
        linkedin: 'https://www.linkedin.com/in/simonmikre/',
        instagram: 'simonmikre',
        pronouns: 'He/Him',
    },
    {
        id: '22',
        name: 'Sunday Kelvin',
        headline: 'Musician/Artist/Singer',
        detailDescription: `Ssunday is a Neo Soul singer and visual artist from Toronto. He draws inspiration from his
southern Nigerian upbringing to shape his soulful sound and reflective stories. Influenced by
artists like Asa, Victor Uwaifo, and D'Angelo and Frank Ocean, Ssunday’s music creates
soothing, nostalgic, and intimate experiences on stage. He collaborates closely with Bass player
Malcolm Hillier and drummer Michael Mintchev. In August 2023, he released his debut EP, "Blue
Sunday."`,
        instagram: 'redssunday',
    },
    {
        id: '23',
        name: 'Tamara Toussaint',
        headline: 'Musician/Artist/Singer',
        detailDescription: `Meet Toussaint: a genre-defying singer/songwriter, 
        who merges electronica and alternative influences, shaped by classical 
        piano training and diverse performing arts. Her debut EP, "Ethereal," and 
        sold-out concert showcase her commitment to immersive storytelling. An alumna 
        of RBC X Artscape Launchpad and Soundstock Academy she's both an artist and 
        entrepreneur. In her quest for a debut album, Toussaint pushes artistic boundaries, 
        inviting listeners into emotional landscapes. Her music, beyond melodies, celebrates 
        individuality and empowers outcasts. With a vision to inspire self-expression, Toussaint's 
        world rejects conformity, championing uniqueness fearlessly.`,
        linkedin: 'https://toussaint.cargo.site',
        instagram: 'toussvint',
        pronouns: 'She/They',
    },
    {
        id: '24',
        name: 'Veeda Tanwir',
        headline: 'Events Management, Visual Arts',
        detailDescription: `Veeda is a Toronto based artist and illustrator. Her work explores her Central Asian 
        heritage and the immigrant/refugee experience. She seeks inspiration from her roots, often combining 
        elements from her ethnic background with western pop-culture. She does not limit herself when it 
        comes to choice of artistic mediums, working with paint, textiles, pen, pencil and digital media. Her 
        passion for social justice and arts and culture is strongly reflected in her work. Her work aims to 
        encourage challenging conversations regarding culture and social issues.
        In the last 5 years, Veeda has been an active participant in community initiatives involving youth, arts, 
        and professional skill building programs. She has hosted and participated in multiple exhibits 
        and has coordinated multiple youth programs across the city.
`,
        instagram: 'veedazzzz',
    },
    {
        id: '25',
        name: 'Zaenab Ojoawo',
        headline: 'Community Organizer/Curator',
        detailDescription: `Zayn is an experienced and uniquely skilled poet and spoken word artist. 
        Hailing from a long lineage of storytellers and born into a history of orature, Zayn has been 
        weaving magic with her voice on and off the stage for many lifetimes. With a gentle romance 
        that leaves audiences more tender than before, Zayn unfolds the careful stories planted deep 
        in her blood. Half poetic expose, half religious confession, Zayn blesses the stage and her 
        audiences with each poem. With years of experience working to create opportunities and spaces 
        for Black and Indigenous youth voices in the city, Zayn is intimately familiar with the many 
        faces of love, loss, survival, and reunion in the city.
        Having spent years competing in the Canadian Slam Scene under a different name from a different life, 
        Zayn has lived both as a Canadian Individual Poetry Slam Champion as well as an ArtworxTO Year 
        of Public Art Grant Recipient. In her time and capacity holding both these titles, Zayn was 
        responsible for creating and executing an all Black and Indigenous mentorship program for 
        youth poets from marginalized communities  in Toronto. Under Zayn’s direction, the mentorship 
        program went on to produce a feature film that screened in Regent Park for 4 weeks in 2021.
        Having lived more lives than she cares to admit, Zayn has learned what is most important 
        to her and has dedicated her life and her work to the collective liberation of her people. 
        With only her words, and the love for her people that bleeds out onto every stage, Zayn is a 
        magical new voice in poetry and an unstoppable force to be reckoned with.
`,
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

        // Conditionally add pronouns
        if (artist.pronouns) {
            const pronouns = document.createElement('h4');
            pronouns.textContent = artist.pronouns;
            bio.insertBefore(pronouns, bio.querySelector('img')); // Insert pronouns before the image
        }

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