let contactList = [];
const fetchData = async () => {
    let response = await fetch("https://s3.amazonaws.com/technical-challenge/v3/contacts.json");
    contactList = await response.json();
    return contactList;
}

export const getContactList = async () => {
    if (!contactList || contactList.length < 1) {
        try {
            let data = await fetchData();
            return data;
        } catch(err) {
        }
    } else {
        return contactList;
    }
}

export const splitContactsByFavorite = () => {
    let splittedContacts = [
        { title: "FAVORITE CONTACTS", data: [] },
        { title: "OTHER CONTACTS", data: []}
    ];
    contactList.forEach((contact)=> {
        if (contact.isFavorite) splittedContacts[0].data.push(contact);
        else splittedContacts[1].data.push(contact);
    });
    
    return splittedContacts;
}


export const setFavorite = (cont) => {
    contactList.forEach((contact) => {
        if(contact.id === cont.id) {
            contact.isFavorite = !contact.isFavorite;
        }
    });
}

