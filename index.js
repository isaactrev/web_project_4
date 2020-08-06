//wrappers
const addCardModalWindow = document.querySelector('.modal_type_add-card');
const editProfileModalWindow = document.querySelector('.modal_type_edit-profile');
const imageModalWindow = document.querySelector('.modal_type_image');

//Open Buttons
const profileEditButton = document.querySelector('.profile__edit-button');
const addCardModalButton = document.querySelector('.profile__add-button');

//Close Buttons
const closeAddCardModalButton = addCardModalWindow.querySelector('.modal__close-button');
const modalCloseButton = editProfileModalWindow.querySelector('.modal__close-button');


//buttons and other DOM elements

const form = document.querySelector('.form');

//Profile
const profileName = document.querySelector('.profile__item-text_type_name');
const profileOccupation = document.querySelector('.profile__item-text_type_occupation');

//Form Inputs
const inputName = document.querySelector('.form__input_type_name');
const inputOccupation = document.querySelector('.form__input_type_occupation');

function toggleModalWindow(modal) {
    modal.classList.toggle('modal__is-open');
    inputName.value = profileName.textContent;
    inputOccupation.value = profileOccupation.textContent;
}

profileEditButton.addEventListener('click', () => {
    toggleModalWindow(editProfileModalWindow);
})
modalCloseButton.addEventListener('click', () => {
    toggleModalWindow(editProfileModalWindow);
})

form.addEventListener('submit', (e) => {
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

const cardTemplate = document.querySelector('.card-template').content.querySelector('.card');
const list = document.querySelector('.cards');

initialCards.forEach(data => {

    const cardElement = cardTemplate.cloneNode(true);

    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const cardLikeButton = cardElement.querySelector('.card__like-button');
    const cardDeleteButton = cardElement.querySelector('.card__delete-button');

    cardTitle.textContent = data.name;
    cardImage.style.backgroundImage = `url(${data.link})`;

    cardLikeButton.addEventListener('click', () => {

    })

    cardDeleteButton.addEventListener('click', () => {

    })

    cardImage.addEventListener('click', () => {
        const modalImage = imageModalWindow.querySelector('.modal__image');
        const modalImageTitle = imageModalWindow.querySelector('.modal__image-title');
        modalImage.src = data.link;
        modalImageTitle.textContent = data.name;
        toggleModalWindow(imageModalWindow)
    })

    list.prepend(cardElement);
})
