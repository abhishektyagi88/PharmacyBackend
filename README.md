The Pharmacy Management System Backend is a Node.js and Express-based application that uses MongoDB to digitize the operations of pharmacy retailers. 
The system facilitates user authentication, pharmacy and medicine management, pharmacy listings, and implements caching and security measures.

**Key Features**
1. User Authentication:

* Registration: Users can register by providing their name, email, and password.
* Login: Users can log in using their email and password, receiving a JWT token for authenticated requests.

2. Pharmacy Management:

* Register Pharmacy: APIs allow the registration of pharmacies with details such as name, address, and contact information.
* CRUD Operations for Medicines: Pharmacies can create, read, update, and delete medicines, providing details like name, description, price, and discount.

3. Pharmacy Listings:

* List All Pharmacies: APIs provide a list of all registered pharmacies.
* Search Pharmacies by Name: Users can search for pharmacies by name.

4. Caching:

* Node-cache: Frequently accessed data, like pharmacy listings, are cached to improve performance and reduce database load.

5. Security:

* Secure Password Storage: Passwords are hashed using bcrypt before being stored in the database.
* JWT Protection: APIs are protected using JWT to ensure secure access to endpoints.

**Technical Stack**
* Backend: Node.js, Express
* Database: MongoDB
* Caching: Node-cache (optionally Redis)
* Authentication: JWT

