async function fetchUserData() {
  try {
    const response = await fetch(`https://dummyjson.com/users`);
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error(`HTTP Error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
  } finally {
    console.log('დასასრული');
  }
}

fetchUserData();