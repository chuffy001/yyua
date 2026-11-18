let getUser = fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(data => {
        let user = data.users
        console.log(user);
        let wrapper = document.querySelector('.wrapper')
        user.forEach((element) => {
            let div = document.createElement('div')
            div.classList = 'card'
            div.innerHTML = `
        
        <p class="title">${element.firstName}</p>
        <p class="descp">${element.lastName}</p>
        <p class="price">${element.age}</p>
        <p class="reyting">${element.gender}</p>
        <p class="discaunt">${element.email}</p>
        <p class="phone">${element.phone}</p>`

            wrapper.append(div)
        });
    })