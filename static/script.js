console.log("Script loaded successfully");

document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const artworks = document.querySelectorAll(".artwork-card");
    let index = 0;

    function updateGallery() {
        artworks.forEach((artwork, i) => {
            artwork.style.display = i === index ? "block" : "none";
        });
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", function () {
            index = (index > 0) ? index - 1 : artworks.length - 1;
            updateGallery();
        });

        nextBtn.addEventListener("click", function () {
            index = (index < artworks.length - 1) ? index + 1 : 0;
            updateGallery();
        });
    }

    updateGallery(); // Initialize gallery
});

//-------- Contact CRUD Handling ------------

// Show the Add Contact Form
function openAddContactForm() {
    document.getElementById("addContactForm").style.display = "block";
}

// Hide the Add Contact Form
function closeAddContactForm() {
    document.getElementById("addContactForm").style.display = "none";
}

// Handle Contact Form Submission
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(this);

        fetch("/manage_contact", {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                if (data.success) location.reload();
            })
            .catch(error => console.error("Error:", error));
    });
}

// Delete Contact
function deleteContact(contactId) {
    if (confirm("Are you sure you want to delete this contact?")) {
        fetch(`/delete_contact/${contactId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    document.getElementById(`contact-${contactId}`)?.remove();
                    alert("Contact deleted successfully.");
                } else {
                    alert("Error deleting contact.");
                }
            })
            .catch(error => console.error('Error:', error));
    }
}

// Edit Contact
function openEditContactForm(contactId) {

    fetch(`/get_contact/${contactId}`)
        .then(response => response.json())
        .then(data => {
            if (data.success === false) {
                alert("Contact not found.");
                return;
            }
            document.getElementById('edit-contact-id').value = data.id;
            document.getElementById('edit-name').value = data.name;
            document.getElementById('edit-email').value = data.email;
            document.getElementById('edit-phone').value = data.phone;
            document.getElementById('edit-favorite-artwork').value = data.favorite_artwork;

            document.getElementById('editContactForm').style.display = 'block';
        })
        .catch(error => console.error('Error:', error));
}

// Close Edit Contact Form
function closeEditContactForm() {
    document.getElementById('editContactForm').style.display = 'none';
}

// Update Contact
const editFormContact = document.getElementById('editFormContact');
if (editFormContact) {
    editFormContact.addEventListener("submit", function (event) {
        event.preventDefault();
        const contactId = document.getElementById('edit-contact-id').value;

        const updatedData = {
            name: document.getElementById('edit-name').value,
            email: document.getElementById('edit-email').value,
            phone: document.getElementById('edit-phone').value,
            favorite_artwork: document.getElementById('edit-favorite-artwork').value
        };

        fetch(`/update_contact/${contactId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData)
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Contact updated successfully.");
                    location.reload();
                } else {
                    alert("Error updating contact.");
                }
            })
            .catch(error => console.error("Error:", error));
    });
}

//-------- Artwork CRUD Handling ------------

// Show the Add Artwork Form
function openAddArtworkForm() {
    document.getElementById("addArtworkForm").style.display = "block";
}

// Hide the Add Artwork Form
function closeAddArtworkForm() {
    document.getElementById("addArtworkForm").style.display = "none";
}

// Handle Artwork Form Submission
const artworkForm = document.getElementById("artworkForm");
if (artworkForm) {
    artworkForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(this);

        fetch("/manage_artwork", {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                if (data.success) location.reload();
            })
            .catch(error => console.error("Error:", error));
    });
}

// Delete Artwork
function deleteArtwork(artworkId) {
    if (confirm("Are you sure you want to delete this artwork?")) {
        fetch(`/delete_artwork/${artworkId}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    document.getElementById(`artwork-${artworkId}`)?.remove();
                    alert("Artwork deleted successfully.");
                } else {
                    alert("Error deleting artwork.");
                }
            })
            .catch(error => console.error("Error:", error));
    }
}

// Edit Artwork
function openEditArtworkForm(artworkId) {
    fetch(`/get_artwork/${artworkId}`)
        .then(response => response.json())
        .then(data => {
            if (data.success === false) {
                alert("Artwork not found.");
                return;
            }

            document.getElementById("edit-artwork-id").value = data.id;
            document.getElementById("edit-title").value = data.title;
            document.getElementById("edit-year").value = data.year;
            document.getElementById("edit-style").value = data.style;
            document.getElementById("edit-description").value = data.description;
            document.getElementById("edit-image-url").value = data.image_url;

            document.getElementById("editArtworkForm").style.display = "block";
        })
        .catch(error => console.error("Error:", error));
}

// Close Edit Artwork Form
function closeEditArtworkForm() {
    document.getElementById("editArtworkForm").style.display = "none";
}

// Update Artwork
const editFormArtwork = document.getElementById("editFormArtwork");
if (editFormArtwork) {
    editFormArtwork.addEventListener("submit", function (event) {
        event.preventDefault();
        const artworkId = document.getElementById("edit-artwork-id").value;

        const updatedData = {
            title: document.getElementById("edit-title").value,
            year: document.getElementById("edit-year").value,
            style: document.getElementById("edit-style").value,
            description: document.getElementById("edit-description").value,
            image_url: document.getElementById("edit-image-url").value
        };

        fetch(`/update_artwork/${artworkId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData)
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Artwork updated successfully.");
                    location.reload();
                } else {
                    alert("Error updating artwork.");
                }
            })
            .catch(error => console.error("Error:", error));
    });
}
