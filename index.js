const initialCards = [
    {
        name: "Yosemite Valley",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
        name: "Lake Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
        name: "Bald Mountains",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
        name: "Vanoise National Park",
        link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
    },
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
];

//Modal Windows (wrappers)
const addCardModalWindow = document.querySelector('.modal_type_add-card');
const editProfileModalWindow = document.querySelector('.modal_type_edit-profile');
const imageModalWindow = document.querySelector('.modal_type_image');

//Open Buttons
const profileEditButton = document.querySelector('.profile__edit-button');
const addCardModalButton = document.querySelector('.profile__add-button');

//Close Buttons
const closeAddCardModalButton = addCardModalWindow.querySelector('.modal__close-button');
const modalCloseButton = editProfileModalWindow.querySelector('.modal__close-button');
const imageCloseButton = imageModalWindow.querySelector('.modal__close-button');

//Form Submit Buttons
const editProfileSubmitForm = document.querySelector('.form');
const addCardSubmitForm = document.querySelector('.form__save-button');//not working

//Profile on Site
const profileName = document.querySelector('.profile__item-text_type_name');
const profileOccupation = document.querySelector('.profile__item-text_type_occupation');

//Profile Name and Occupation Form Inputs from User
const inputName = document.querySelector('.form__input_type_name');
const inputOccupation = document.querySelector('.form__input_type_occupation');

//Add card form inputs from User
const newCardTitle = document.querySelector('.form__input_type_card-title');
const newCardUrl = document.querySelector('.form__input_type_url');

function toggleModalWindow(modal) {
    modal.classList.toggle('modal__is-open');
    inputName.value = profileName.textContent;
    inputOccupation.value = profileOccupation.textContent;
}

//Event Listeners
profileEditButton.addEventListener('click', () => {
    toggleModalWindow(editProfileModalWindow);
})

modalCloseButton.addEventListener('click', () => {
    toggleModalWindow(editProfileModalWindow);
})

imageCloseButton.addEventListener('click', () => {
    toggleModalWindow(imageModalWindow);
})

//not working
editProfileSubmitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    profileName.textContent = inputName.value;
    profileOccupation.textContent = inputOccupation.value;
    toggleModal(editProfileModalWindow);
})

addCardModalButton.addEventListener('click', () => {
    toggleModalWindow(addCardModalWindow);
})

closeAddCardModalButton.addEventListener('click', () => {
    toggleModalWindow(addCardModalWindow);
})

const cardTemplate = document.querySelector('.card-template').content.querySelector('.card');
const list = document.querySelector('.cards');

initialCards.forEach(data => {
    addCard(data.name, data.link);
});


function addCard(title, image) {

    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const cardLikeButton = cardElement.querySelector('.card__like-button');
    const cardDeleteButton = cardElement.querySelector('.card__delete-button');

    cardTitle.textContent = title;
    cardImage.style.backgroundImage = `url(${image})`;
    cardImage.setAttribute("alt", title);

    cardLikeButton.addEventListener('click', () => {
        cardLikeButton.classList.toggle("card__like-button_active");
    });

    cardDeleteButton.addEventListener('click', (e) => {
        e.stopPropagation();
        e.target.closest(".card").remove();
    });

    cardImage.addEventListener('click', () => {
        const modalImage = imageModalWindow.querySelector('.modal__image');
        const modalImageTitle = imageModalWindow.querySelector('.modal__image-title');
        modalImage.src = image;
        modalImageTitle.textContent = title;
        toggleModalWindow(imageModalWindow)
    });

    list.prepend(cardElement);
}

//Event to add new card
addCardSubmitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addCard(newCardTitle.value, newCardUrl.value);
    toggleModalWindow(addCardModalWindow);
    title = "";
    image = "";
});

