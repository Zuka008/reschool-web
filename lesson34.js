// async function getData(){
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
//     const data = await response.json();
//     console.log(data);
// }

// getData();



async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    const userListContainer = document.getElementById("user-list");
    users.forEach((user) => {
      const userDiv = `
                    <div id="user-item">
            <h2>Name: ${user.name}</h2>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Website: ${user.website}</p>
            <p>Company: ${user.company.name}</p>
        </div>
            `;
      userListContainer.innerHTML += userDiv;
    });
  } catch (error) {
    console.error(error);
  }
}

getData();

// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//       street: 'Kulas Light',
//       suite: 'Apt. 556',
//       city: 'Gwenborough',
//       zipcode: '92998-3874',
//       geo: [Object]
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//       name: 'Romaguera-Crona',
//       catchPhrase: 'Multi-layered client-server neural-net',
//       bs: 'harness real-time e-markets'
//     }
// },