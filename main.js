const path = 'http://www.filltext.com/?rows=9&fname={firstName}&lname={lastName}&pretty=true';


    fetch(path).then((data)=>{
    return data.json()
    }).then((objectData)=>{
        renderUsers(objectData)
    });
