from models import db, Contact, Artwork
from sqlalchemy.exc import IntegrityError

def create_contact(name, email, phone, favorite_artwork):
    """Create a new contact."""
    try:
        new_contact = Contact(name=name, email=email, phone=phone, favorite_artwork=favorite_artwork)
        db.session.add(new_contact)
        db.session.commit()
        return new_contact
    except Exception as e:
        db.session.rollback()
        print(f"Error: {e}")
        return None

def get_all_contacts():
    """Retrieve all contacts from the database."""
    return Contact.query.all()

def get_contact_by_id(contact_id):
    """Fetches a specific contact by ID."""
    return Contact.query.get(contact_id)

def update_contact(contact_id, name, email, phone, favorite_artwork):
    """Updates an existing contact."""
    contact = Contact.query.get(contact_id)
    print(f"Database Query for Contact ID {contact_id}: {contact}")  # Debugging
    if contact:
        try:
            contact.name = name
            contact.email = email
            contact.phone = phone
            contact.favorite_artwork = favorite_artwork
            db.session.commit()
            return {"success": True, "message": "Contact updated successfully"}
        except IntegrityError:
            db.session.rollback()
            return {"success": False, "message": "Error: Could not update contact"}
    return {"success": False, "message": "Error: Contact not found"}

def delete_contact(contact_id):
    """Deletes a contact by ID."""
    contact = Contact.query.get(contact_id)
    if contact:
        db.session.delete(contact)
        db.session.commit()
        return {"success": True, "message": "Contact deleted successfully"}
    return {"success": False, "message": "Error: Contact not found"}

#-----------Artworks--------------

def create_artwork(title, year, style, description, image_url):
    """Create a new artwork."""
    try:
        new_artwork = Artwork(title=title, year=year, style=style, description=description, image_url=image_url)
        db.session.add(new_artwork)
        db.session.commit()
        return new_artwork
    except Exception as e:
        db.session.rollback()
        print(f"Error: {e}")
        return None

def get_all_artworks():
    """Retrieve all artworks from the database."""
    return Artwork.query.all()

def get_artwork_by_id(artwork_id):
    """Fetch a specific artwork by ID."""
    return Artwork.query.get(artwork_id)

def update_artwork(artwork_id, title, year, style, description, image_url):
    """Update an existing artwork."""
    artwork = Artwork.query.get(artwork_id)
    if artwork:
        try:
            artwork.title = title
            artwork.year = year
            artwork.style = style
            artwork.description = description
            artwork.image_url = image_url
            db.session.commit()
            return {"success": True, "message": "Artwork updated successfully"}
        except IntegrityError:
            db.session.rollback()
            return {"success": False, "message": "Error: Could not update artwork"}
    return {"success": False, "message": "Error: Artwork not found"}

def delete_artwork(artwork_id):
    """Delete an artwork by ID."""
    artwork = Artwork.query.get(artwork_id)
    if artwork:
        db.session.delete(artwork)
        db.session.commit()
        return {"success": True, "message": "Artwork deleted successfully"}
    return {"success": False, "message": "Error: Artwork not found"}

