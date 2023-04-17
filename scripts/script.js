log('scripts.js loaded');
new WOW().init();
let scroll = new SmoothScroll('a[href*="#"]'),
    burger = doc.querySelector('.burger'),
    nav = doc.querySelector('#navbarBasicExample');

burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
});
let carousels = bulmaCarousel.attach();
let snackbar = (text, time) => {
    var ele = id('snackbar');
    ele.innerText = text;
    ele.className = "show";
    setTimeout(function() { ele.className = ele.className.replace('show', ''); }, time);
}
const addtoCal = () => {
        window.open('https://calendar.google.com/event?action=TEMPLATE&tmeid=MGo4bGFxOWlqNnQ3ZGUzc2dkZzY2NGU5dDggY3NjbHViQHNic2Nob29scy5vcmc&tmsrc=csclub%40sbschools.org')
    },
    db = firebase.database();

window.setInterval(function() {
    let idschool = id('schoooool').value;
    let idotherSchool = id('otherSchoolCon');
    if (idschool === 'Other (enter below)') {
        idotherSchool.style.display = 'block';
    } else {
        idotherSchool.style.display = 'none';
    }
}, 1000);
const submit = () => {
    console.log("HISDHFOIDSLHFJDSKFHKJ");
    console.log(!id('code_of_conduct').checked || ! id('privacy').checked);
    if(!id('code_of_conduct').checked || ! id('privacy').checked) {
        snackbar("Please agree to the MLH Code of Conduct and Privacy Policy", 3000);
        console.log("hsjkdfhkjsd");
        return;
    }
    let firstName = id('firstName').value,
        lastName = id('lastName').value,
        email = id('email').value,
        grade = id('grade').value,
        school = id('schoooool').value,
        otherSchool = id('otherSchool').value,
        VegOrNon = id('veg').value,
        notes = id('notes').value,
        phone = id('phone').value,
        finalSchool;
    if (school === 'South Brunswick High School') {
        finalSchool = school;
    } else {
        finalSchool = otherSchool;
    }
    console.log("hi");
    db.ref(`registrations/${(new Date()).getFullYear()}`).push({
        first: firstName,
        last: lastName,
        email: email,
        grade: grade,
        school: finalSchool,
        veg: VegOrNon,
        notes: notes,
        phone: phone
        // came: "yes"
    }).then(ref => {
        console.log('Added doc to database with doc id: ', ref.id);
        window.location.href = '/yes.html';
    }).catch(err => {
        let obj = {
            first: firstName,
            last: lastName,
            email: email,
            grade: grade,
            school: finalSchool,
            veg: VegOrNon,
            notes: notes,
            phone: phone
        };
        let convert = key => {
            switch (key) {
                case "first":
                    return "First Name";
                case "last":
                    return "Last Name";
                case "email":
                    return "Email";
                case "grade":
                    return "Grade";
                case "school":
                    return "School";
                case "veg":
                    return "Vegatarian Status";
                case "phone":
                    return "Phone Number";
                case "notes":
                    "";
            }
            return "Field";
        }
        let arr = [];
        for (let a in obj) {
            if (!obj[a])
                arr.push(convert(a))
        }

        snackbar("Please Fill Out Your " + arr.join(', '), 3000);
    });
}
let toggleModal = () => {
    //snackbar('Sorry, Signups didn');
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSf4wmh5HOpv_rn01JHnGWVol4OD57ZAosCw6LrNHJ8-XMTevA/viewform');
    //let ele = id('signup-modal');
    //ele.classList.toggle("is-active");
}
// LINE#2 zscqizmyqewvltjswkoepislhrgayz
window.onscroll = function() {
    document.getElementsByClassName('navbar')[0].style.background = '';
}
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 4
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.41688713582503595,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 80,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
