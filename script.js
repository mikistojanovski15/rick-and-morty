document.addEventListener('DOMContentLoaded', async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      
      const usersContainer = document.getElementById('users-container');
  
      users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');
  
        const userName = document.createElement('h2');
        userName.textContent = user.name;
  
        const userPhone = document.createElement('p');
        userPhone.textContent = `Phone: ${user.phone}`;
  
        const userCompany = document.createElement('p');
        userCompany.textContent = `Company: ${user.company.name}`;
  
        userCard.appendChild(userName);
        userCard.appendChild(userPhone);
        userCard.appendChild(userCompany);
  
        usersContainer.appendChild(userCard);
      });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  });
  