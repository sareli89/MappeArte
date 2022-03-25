const BASE_URL = 'https://mappearte-eaf42-default-rtdb.firebaseio.com/'

export default {
    login: async userData => {
      let response = await fetch(
        `${BASE_URL}/users.json`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        );
        return await response.json()
    },
    getUsers: async () => {
      let response = await fetch(`${BASE_URL}/products.json`)
      return await response.json()
    }
    
}