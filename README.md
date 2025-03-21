# ✨ Physiotherapy MongoDB Integration ✨

## 📚 About the Project

This repository contains the backend setup for a Physiotherapy platform that connects to a MongoDB database. In the contact section, after the user fills the form and sends the message, an email is sent to the physiotherapist and the same time the user's info are stored to a MongoDB Schema. 

## 🛠️ Tech Stack
* Frontend: HTML, CSS, JavaScript
* Backend: Node/Express.js, MongoDB

## Requirements

Before setting up and running the project, make sure you have the following installed:

- **Node.js** (version >= 14)
- **MongoDB** (local or MongoDB Atlas)
- **npm** (Node Package Manager)
- **Postman** or any API testing tool (for testing your API endpoints)

## MongoDB Setup

### 1. **MongoDB Atlas Setup** (for cloud database)
1. Create a free account at [MongoDB Atlas](https://cloud.mongodb.com/).
2. Create a new cluster and database.
3. Generate a connection string by clicking the "Connect" button in your cluster.
4. You will need the connection string to connect your backend to the database. Replace `<username>`, `<password>`, and `<dbname>` with your database username, password, and the name of the database you're using (I used "patients").

# 💻 Installation 

## 1. Clone the Project

```bash
git clone https://github.com/TsiouMiouPiou/GPhysicalTherapy.git
```
## 2.Install Dependencies

```bash
npm install
```

## 3. Change directory

```bash
cd backend
```

## 4. Start the server

```bash
npm start
```

## 5. Navigate to the link 
Go to the http://localhost:5000
Navigate to the contact from nav-bar, fill your information and sent the message.

## 6. Check your MongoDB Schema.

