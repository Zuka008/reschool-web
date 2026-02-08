//  1
async function getAlbumPhotos(albumId) {
  try {
    // API-ზე ვთხოვთ ალბომის ფოტოების ჩამოტვირთვას
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
    const photos = await response.json();

    // ვქმნით HTML კონტეინერს, სადაც ფოტოები გამოჩნდება
    const photoListContainer = document.getElementById("photo-list");

    // წინა კონტენტის გასუფთავება
    photoListContainer.innerHTML = "";

    // ფოტოების რაოდენობის ჩვენება
    const countText = `<h2>Total Photos: ${photos.length}</h2>`;
    photoListContainer.innerHTML += countText;

    // ფოტოების ჩვენება
    photos.forEach((photo) => {
      const photoDiv = `
        <div class="photo-item">
          <img src="https://source.unsplash.com/150x150/?nature&sig=${photo.id}" alt="${photo.title}">
          <p>${photo.title}</p>
        </div>
      `;
      photoListContainer.innerHTML += photoDiv;
    });

    // პირველი 5 ფოტოს სათაურების დაბეჭდვა
    const titlesContainer = document.createElement("div");
    titlesContainer.id = "first-five-titles";
    const firstFiveTitles = photos.slice(0, 5).map(photo => `<li>${photo.title}</li>`).join("");
    titlesContainer.innerHTML = `
      <h3>First 5 Photo Titles:</h3>
      <ul>${firstFiveTitles}</ul>
    `;

    // სიის ფოტოებიდან დაშორება
    photoListContainer.insertAdjacentElement("afterend", titlesContainer);

    // გადაყვება for-ით ლისთს და პირველ 5-ს გამოიტანს კონსოლში
    console.log("First 5 photo titles:");
    photos.slice(0, 5).forEach((photo, index) => {
      console.log(`${index + 1}. ${photo.title}`);
    });

  } catch (error) {
    // შეცდომის დაჭერა და კონსოლში ჩვენება
    console.error("Error fetching photos:", error);
  }
}


// 2
async function getUserCompleteInfo(userId) {
  try {
    // API-დან მომხმარებლის ინფორმაციის მიღება
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await userResponse.json();

    // API-დან მომხმარებლის პოსტების მიღება
    const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = await postsResponse.json();

    // პირველი პოსტის კომენტარების მიღება
    let firstPostComments = [];
    if (posts.length > 0) {
      const firstPostId = posts[0].id;
      const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${firstPostId}`);
      firstPostComments = await commentsResponse.json();
    }

    // კონტეინერი სადაც ინფორმაცია განთავსდება
    const userInfoContainer = document.getElementById("user-info");
    userInfoContainer.innerHTML = ""; // წინა კონტენტის გასუფთავება

    // მომხმარებლის ინფორმაციის ჩვენება
    const userDiv = `
      <h2>User Information</h2>
      <p><strong>Name:</strong> ${user.name}</p>
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Phone:</strong> ${user.phone}</p>
      <p><strong>Website:</strong> ${user.website}</p>
      <p><strong>Company:</strong> ${user.company.name}</p>
      <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
    `;
    userInfoContainer.innerHTML += userDiv;

    // მომხმარებლის ყველა პოსტის ჩვენება
    let postsHTML = `<h2>Posts (${posts.length})</h2>`;
    posts.forEach(post => {
      postsHTML += `
        <div class="user-post">
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        </div>
      `;
    });
    userInfoContainer.innerHTML += postsHTML;

    // პირველი პოსტის კომენტარების ჩვენება
    if (firstPostComments.length > 0) {
      let commentsHTML = `<h3>Comments on First Post ("${posts[0].title}")</h3>`;
      firstPostComments.forEach(comment => {
        commentsHTML += `
          <div class="post-comment">
            <p><strong>${comment.name}</strong> (${comment.email}): ${comment.body}</p>
          </div>
        `;
      });
      userInfoContainer.innerHTML += commentsHTML;
    }

  } catch (error) {
    // შეცდომის დაფიქსირება
    console.error("მომხმარებლის ინფორმაციის მიღების შეცდომა:", error);
  }
}

// მომხმარებლის ინფორმაციის ჩვენება/დამალვა(თუ ინფორმაცია ჩანს ხელმეორედ დაჭერისას დავმლავთ)
function toggleUserInfo(userId) {
  const userInfoContainer = document.getElementById("user-info");
  const button = document.getElementById("toggle-user-btn");

  if (userInfoContainer.style.display === "none" || userInfoContainer.style.display === "") {
   
    getUserCompleteInfo(userId);
    userInfoContainer.style.display = "block";
    button.textContent = "Close User Info";
  } else {
    
    userInfoContainer.style.display = "none";
    button.textContent = "Show User Info";
  }
}

// ინფუთიდან მომხმარებლის ID-ს წამოღება
function fetchUserByInput() {
  const userId = document.getElementById("user-id-input").value;
  if (userId >= 1 && userId <= 10) {
    toggleUserInfo(userId);
  } else {
    alert("გთხოვთ ჩაწეროთ ვალიდური მომხმარებლის ID 1-დან 10-მდე");
  }
}
