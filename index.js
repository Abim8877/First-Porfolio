const toggleOpen = document.querySelector('.open-btn');
const toggleClose = document.querySelector('.close-btn');
const toggleAll = document.querySelector('.links');

toggleOpen.addEventListener('click', () => {
    toggleAll.classList.add('open');
    toggleAll.classList.remove('close');
});
toggleClose.addEventListener('click', () => {
    toggleAll.classList.add('close');
    toggleAll.classList.remove('open');
});

