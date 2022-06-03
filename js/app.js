// nav bar
const mobileMenu = document.querySelector('.mobile-menu');
const topnav = document.querySelector('.topnav');


mobileMenu.addEventListener('click', ()=>{
    topnav.classList.toggle('show-nav');
})


// copyright
const copy = document.querySelector('.copy');

const copyDate = new Date();
const copyYear = copyDate.getFullYear();

copy.innerHTML = `Copyright <span>&copy</span> ${copyYear} <a href="https://github.com/MaureenMOguche">Maureen Oguche</a>`;


// fetch('https://fakestoreapi.com/products')
//     .then((response)=>{
//         response.json();
//         console.log("congrats", response);
//     }).catch((error)=>{
//         console.log('failed', error);
//     });

    function person(fname, lname, age, hobby, changedname){
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
        this.hobby = hobby;
        this.changeName = changedName;
        this.changeAge = function(changedAge){
            return this.age = changedAge;
        }
    }

    function changedName(newLastName){
        return this.lastName = newLastName;
    }

    const p1 = new person('Maureen', 'Oguche', 30, 'writing codes');

    console.log(p1.lastName);

    p1.changeName('Twar');

    console.log(p1.lastName);

    console.log(p1.age);
p1.changeAge(45);
console.log(p1.age)
    