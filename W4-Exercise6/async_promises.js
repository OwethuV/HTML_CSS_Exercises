// TODO: Create a Promise that simulates fetching user data 
// - The Promise should resolve after 1.5 seconds 
// - If userId is positive, resolve with user data object 
// - If userId is negative or zero, reject with an error 
// - User data  should include: id, name, email, and registrationDate
function fetchData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve({
          id: userId,
          username: `User${userId}`,
          email: `user${userId}@email.com`,
          registrationDate: new Date().toISOString()
        });
      } else {
        reject(new Error("Invalid user ID"));
      }
    }
      , 1500);
  });
}

// TODO: Create a function that uses template literals for HTML generation 
//This was in the last exercise so I'm assuming it's a mistake

// TODO: Create a Promise that simulates fetching user posts 
// - Should resolve after 1 second 
// - Return an array of post objects 
// - Each post should have: id, title, content, and userId 
// - If userId doesn't exist, reject with error 
function fetchPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve([
          {
            id: 1,
            title: "Post One",
            content: "This is the first post.",
            userId: userId,
          },
          {
            id: 2,
            title: "Post Two",
            content: "This is the second post.",
            userId: userId,
          },
          {
            id: 3,
            title: "Post Three",
            content: "This is the last post.",
            userId: userId,
          }
        ]);
      } else {
        reject(new Error("Posts not found for this user"));
      }
    }, 1000);
  });
}

// TODO: Create a function that chains multiple Promises together 
// - First fetch user data 
// - Then fetch their posts 
// - Combine the data into a single object 
// - Handle any errors that occur in the chain 

function getUserWithPosts(userId) {
  return fetchData(userId)
    .then(user => {
      return fetchPosts(user.id)
        .then(posts => {
          return { user, posts };
        });
    })
    .catch(error => console.error("Error:", error.message));
}

// TODO: Convert the above Promise chain to use async/await
// - Use try/catch for error handling
// - Log each step of the process
// - Return combined user and posts data

async function getUserWithPostsAsync(userId) {
  try {

    console.log("Fetching user data...");
    let user = await fetchData(userId);
    console.log("User data fetched:", user);

    console.log("Fetching posts...");
    let posts = await fetchPosts(user.id);
    console.log("Posts fetched:", posts);

    let combinedData = { user, posts };
    console.log("Combined data:", combinedData);

    return combinedData;

  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
}

// TODO: Create a function that fetches multiple users in parallel 
// - Take an array of userIds 
// - Fetch all users simultaneously using Promise.all 
// - Handle errors for individual user fetches 
// - Return array of successfully fetched users 
async function fetchMultipleUsers(userIds) {
  try {
    console.log(`Starting parallel user fetches`);
    let promises = userIds.map(id => fetchData(id));//map splits each array function
    let users = await Promise.all(promises);
    console.log(`Successfully fetch ${users.length}users`);
    return users;
  } catch (e) {
    console.error(`Error in fetching multiple users: ${e.message}`);
    return [];
  }
}

// TODO: Create a function that fetches users and their posts in parallel 
// - Fetch user data for multiple users 
// - Once user data is received, fetch all their posts in parallel 
// - Combine user and posts data 
// - Handle errors appropriately 
async function fetchUsersAndPost(userIds) {
  try {
    console.log("Fetching users and posts");
    let users = await fetchMultipleUsers(userIds);
    let userPostPromises = users.map(user =>
      fetchPosts(user.id)
        .then(posts => ({ user, posts }))
        .catch(e => {
          console.error(`Error fetching posts user ${user.id}: ${e.message}`);
          return { ...user, post: [] };
        })
    );
    let userWithPosts = await Promise.all(userPostPromises)
    return userWithPosts;

  } catch (e) {
    console.error(`Error in fetchUserAndPost: ${e.message}`);
    return [];

  }
}

// TODO: Test success cases
// - Test single user fetch
// - Test multiple user fetch
// - Test error handling
async function runTests(){
  try{
      // test 01 : Fetch single user
    console.log(`Test 01 :Fetching single user data`);
    let userData = await getUserWithPostsAsync(1);
    console.log(`Single user data : ${userData}`);

    //Test 02 : fetch multiple users
    console.log(`Test 02: Fetching multiple users data`);
    let mutltipleUser = await fetchMultipleUsers([1,2,3]);
    console.log(`Multiple users result: ${mutltipleUser}`);

    //Test 03 : User with posts
    console.log(`Test 03: Fetch users with their posts`);
    let fetchUserWithPosts = await fetchUsersAndPost([1,2]);
    console.log(`Users with posts result: ${fetchUserWithPosts}`);

    //Test 04 : Error Handling
    console.log("\n Test 4: Testing error handling");
    let errorHandling = await getUserWithPostsAsync(-1);
    console.log(`Error occured: ${errorHandling}`);
    

  }catch(e){
    console.error(`Test suite error: ${e.message}`);
    
  }
}  
// Run the tests
runTests();