
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.modal__close-button');

const modal = document.querySelector('.modal');
const form = document.querySelector('.form');

const inputName = document.querySelector('.form__input_type_name');
const inputOccupation = document.querySelector('.form__input_type_occupation');

const profileName = document.querySelector('.profile__item-text_type_name');
const profileOccupation = document.querySelector('.profile__item-text_type_occupation');

function toggleModal() {
    modal.classList.toggle('modal__is-open');
    inputName.value = profileName.textContent;
    inputOccupation.value = profileOccupation.textContent;
}

editButton.addEventListener('click', toggleModal)
closeButton.addEventListener('click', toggleModal)

form.addEventListener('submit', (e) => {
    e.preventDefault();
    profileName.textContent = inputName.value;
    profileOccupation.textContent = inputOccupation.value;
    toggleModal();
})
