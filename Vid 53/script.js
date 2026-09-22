class Shows {
    constructor(image, title, genres, description) {
        this.image = image;
        this.title = title;
        this.genres = genres;
        this.description = description;
    }

    get getImage() {
        return this.image;
    }
    get getTitle() {
        return this.title;
    }
    get getGenres() {
        return this.genres;
    }
    get getDescription() {
        return this.description;
    }
}

const shows = [
    new Shows("assets/shows/show1.webp", "Musafir Cafe", ["2026", "U/A 13+", "Show", "Romance", "Dramas"], "Chander feels an undeniable connection with Sudha. Years later, he builds a new life in the hills with Preeti, but memories of the past linger."),
    new Shows("assets/shows/show2.webp", "Lock Upp", ["2026", "U/A 16+", "Show", "Reality Programming"], "Fifteen celebrity inmates face judgement day in a new-age prison, where a game of power and redemption determines who stays or goes."),
    new Shows("assets/shows/show3.webp", "Gatta Kusthi", ["2026", "U/A 13+", "Movie", "Comedies", "Dramas"], "After backing his wife's wrestling career, a stay-at-home father must overcome troublesome critics, parenting woes and new hurdles in his marriage."),
    new Shows("assets/shows/show4.webp", "Operation Safed Sagar", ["2026", "U/A 13+", "Show", "Action", "Dramas"], "As the Kargil War erupts between India and Pakistan, the Golden Arrows squadron of the Air Force takes flight on a dangerous mission behind enemy lines."),
    new Shows("assets/shows/show5.webp", "Ikka", ["2026", "U/A 16+", "Movie", "Thrillers", "Dramas"], "With a loved one's life at stake, a celebrated lawyer must defend a man he suspects is guilty — battling his conscience every step of the way."),
    new Shows("assets/shows/show6.webp", "Peddi", ["2026", "U/A 16+", "Movie", "Dramas"], "In a village that doesn't officially exist, a laborer's unmatched athletic talent becomes his weapon to fight for his people's right to be recognized."),
    new Shows("assets/shows/show7.webp", "Bhooth Bangla", ["2026", "U/A 16+", "Movie", "Horror", "Comedies"], "When a man inherits a palace, he plans to host his sister's wedding there — but the venue's dark past threatens to ruin the celebration."),
    new Shows("assets/shows/show8.webp", "Main Vaapas Aaunga", ["2026", "U/A 16+", "Movie", "Romance", "Dramas"], "An aspiring comedian seeks to solve the mystery of his dying grandfather's lost love and bring closure to a story rooted in the 1947 Partition of India."),
    new Shows("assets/shows/show9.webp", "Blast", ["2026", "U/A 16+", "Movie", "Action", "Dramas"], "A seemingly ordinary family must unleash their hidden martial arts skills when they clash with a ruthless criminal gang tied to corruption and violence."),
    new Shows("assets/shows/show10.webp", "Idhayam Murali", ["2026", "U/A 16+", "Movie", "Romance", "Dramas"], "Flying from New York to Chennai for his wedding, a man recalls the memories of friendship, first love and heartbreak that have shaped his life.")
];

function changeEmailUi(div, event) {
    const clicked = div.contains(event.target);
    let emailDetails = div.children;

    if (clicked) {
        emailDetails.item(0).classList.add('active');
        emailDetails.item(1).classList.add('active');
        emailDetails.item(1).focus();
    } else if (emailDetails.item(1).value.length > 0) {
        emailDetails.item(0).classList.add('active');
        emailDetails.item(1).classList.add('active');
    } else {
        emailDetails.item(0).classList.remove('active');
        emailDetails.item(1).classList.remove('active');
    }
}

document.addEventListener("click", function (event) {
    changeEmailUi(document.getElementById("topMail"), event);
    changeEmailUi(document.getElementById("bottomMail"), event);
});

function populateSeries(index) {
    let series = document.querySelector(".shows");
    let show = document.createElement("div");
    show.className = "show";
    show.innerHTML = `<div id="show${index}" class="showCard"><img src="assets/images/series${index}.webp" width="170px" /><h1>${index}</h1></div>`;
    series.append(show);
}

function populateTrends() {
    for (let i = 1; i <= 10; i++) {
        populateSeries(i);
    }
}

function displayShow() {
    const overlay = document.getElementById('overlay');

    for (let i = 1; i <= 10; i++) {
        document.getElementById(`show${i}`).addEventListener("click", () => {
            document.body.style.overflowY = "hidden";

            overlay.classList.add('active');
            let card = document.createElement("div");
            card.id = "showCard";
            card.classList.add("cardOverlay");
            overlay.append(card);

            let show = shows[i - 1];

            const img = document.createElement("img");
            img.setAttribute("src", show.getImage);
            card.append(img);

            const title = document.createElement("h2");
            title.innerHTML = show.getTitle;
            card.append(title);

            const genres = document.createElement("div");
            genres.classList.add("genres");
            show.getGenres.forEach(element => {
                const genre = document.createElement("h4");
                genre.innerHTML = element;
                genres.append(genre);
            });
            card.append(genres);

            const description = document.createElement("p");
            description.innerHTML = show.getDescription;
            card.append(description);

            const button = document.createElement("button");
            button.innerHTML = "Try 14 Days for ₹0 &nbsp; >";
            button.classList.add("try");
            card.append(button);

            const last = document.createElement("h5");
            last.innerHTML = "New members only. Terms below.";
            card.append(last);

            const cross = document.createElement("div");
            cross.id = "cross";
            cross.innerHTML = `<img src="assets/images/plus.svg" />`
            card.append(cross);

            document.getElementById("cross").addEventListener('click', () => {
                document.body.style.overflowY = "visible";

                overlay.removeChild(document.getElementById("showCard"));
                overlay.classList.remove('active');
            });
        });
    }

    overlay.addEventListener('click', function (event) {
        console.log(event, event.target);
        if (event.target == overlay) {
            document.body.style.overflowY = "visible";

            overlay.removeChild(document.getElementById("showCard"));
            overlay.classList.remove('active');
        }
    });
}

function showButtonActivity() {
    let first = document.getElementById("show1");
    let last = document.getElementById("show10");

    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting)
                document.getElementById("trendLeft").style.visibility = "hidden";
            else
                document.getElementById("trendLeft").style.visibility = "visible";
        });
    });

    observer.observe(first);

    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting)
                document.getElementById("trendRight").style.visibility = "hidden";
            else
                document.getElementById("trendRight").style.visibility = "visible";
        });
    });

    observer.observe(last);
}

function moveShowsRight() {
    let shows = document.querySelector(".shows");
    shows.scrollLeft += shows.clientWidth;
}

function moveShowsLeft() {
    let shows = document.querySelector(".shows");
    shows.scrollLeft -= shows.clientWidth;
}

function toggleExpand(question) {
    while (question.parentElement.className != "questions")
        question = question.parentElement;
    if (question.classList.contains('active')) {
        question.classList.remove('active');
        return;
    }

    let questions = document.getElementsByClassName("question");

    for (const element of questions) {
        if (element.classList.contains('active'))
            element.classList.remove('active');
    }

    question.classList.add('active');
}

populateTrends();

document.getElementById("trendRight").addEventListener("click", moveShowsRight);
document.getElementById("trendLeft").addEventListener("click", moveShowsLeft);

document.getElementById("questionare").addEventListener("click", function (e) {
    const clicked = e.target;
    toggleExpand(clicked);
});

showButtonActivity();

displayShow();