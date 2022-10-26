const path = 'http://www.filltext.com/?rows=9&fname={firstName}&lname={lastName}&pretty=true';

const container = document.getElementById('container');
const category_1 = document.getElementById('category_1');
const category_2 = document.getElementById('category_2');

let userCards = [];

    fetch(path).then((data)=>{
    return data.json()
    }).then((objectData)=>{
        renderUsers(objectData)
    });

    function renderUsers(usersdata){
        for(user of usersdata){

            let category;
            let x = Math.floor(Math.random()*10);

            x > 5? category = 1: category = 2;

            let userCard = document.createElement('div');
            userCard.classList.add('user-card');
            userCard.classList.add('user-card');
            userCard.setAttribute('category', category);
            userCard.getAttribute('category');
            userCard.setAttribute('categoryAtt', category);

            let userAvatar = document.createElement('div');
            userAvatar.classList.add('user-avatar');
            userAvatar.innerText = user.fname[0]+user.lname[0];
            // userAvatar.setAttribute('categoryAtt', category);
            
            let userName = `${user.fname} ${user.lname}`;

            userCard.append(userAvatar, userName);
            container.append(userCard);

            userCards.push(userCard);
        };
    };


category_1.addEventListener('click', ()=>{
    userCards.forEach(element => {
        console.log(element.getAttribute('category'))
        element.getAttribute('category') == 1? element.style.display = 'flex' : element.style.display = 'none';
    });
    
});

category_2.addEventListener('click', ()=>{
    userCards.forEach(element => {
        console.log(element.getAttribute('category'))
        element.getAttribute('category') == 2? element.style.display = 'flex' : element.style.display = 'none';
    });
    
});