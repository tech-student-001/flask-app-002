# Flask App - Lesson 4 Final Activity  

A **Flask-based portfolio website** with full **CRUD operations** for managing **artworks** and **contacts**.

## Features & Functionalities  
- ✅ View artworks on the homepage.  
- ✅ Submit contact details via a form.  
- ✅ Anyone can view, add, edit, and delete the data instances
---

## 📂 Project Structure  
```
/flask-app
│-- static/
│   │-- style.css                    # CSS for styling
│   │-- script.js                    # JavaScript for interactivity
│-- templates/
│   │-- index.html                   # Homepage
│   │-- contact.html                 # Contact page
│   │-- manage_contact.html          # to manage contact database
│   │-- manage_artwork.html          # to manage artworks database
│-- app.py                           # Flask backend for routing and logic control
│-- crud.py                          # program script for crud operation on the models
│-- models.py                        # defining the models
│-- seed.py                          # sample data / passing data from the backend
│-- requirements.txt                 # Dependencies
```

---

## 🚀 Installation Guide  

### 1️⃣ Install Python & Git  
Make sure **Python** and **Git** are installed:  
```bash
python --version
git --version
```
🔹 If missing, download from:  
- [Python](https://www.python.org/downloads/)  
- [Git](https://git-scm.com/downloads)  

### 2️⃣ Clone the Repository  
```bash
git clone https://github.com/tech-student-001/flask-app-002.git
cd flask-app-002
```

### 3️⃣ Create a Virtual Environment  
```bash
python -m venv venv
```
- **Activate** the environment:  
  - **Windows**: `venv\Scripts\activate`
  - **Mac/Linux**: `source venv/bin/activate`

### 4️⃣ Install Dependencies  
```bash
pip install -r requirements.txt
```

### 5️⃣ Set Up the Database  
```bash
flask shell
```
Then, enter:  
```python
from app import db
db.create_all()
exit()
```

### 6️⃣ Run the Flask App  
```bash
flask run
```
OR
```bash
python app.py
```
📌 The app will be running at: **http://127.0.0.1:5000/**  

---

## 🗃 CRUD Operations  

### Management  
- Any User can **Add, Edit, Delete** artworks and contacts.  
- Artworks are displayed on **`index.html`** and in a tabular form in **`manage_artwork.html`. 
- Contacts are displayed on **`manage_contact.html`**.

---

## 🎭 Styling & Interactivity  
- **CSS** for a responsive design.  
- **JavaScript** for interactive popups & validation.  

---

## 🎉 Done! Enjoy Your Flask App! 🚀🌟  
Need help? Open an issue on GitHub!

