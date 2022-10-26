const path = 'http://www.filltext.com/?rows=9&fname={firstName}&lname={lastName}&pretty=true';

const container = document.getElementById('container');

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
            userCard.getAttribute('category')

            let userAvatar = document.createElement('div');
            userAvatar.classList.add('user-avatar');
            userAvatar.innerText = user.fname[0]+user.lname[0];
            userAvatar.setAttribute('categoryAtt', category);
            
            let userName = `${user.fname} ${user.lname}`;

            userCard.append(userAvatar, userName);
            container.append(userCard);

        };
    };