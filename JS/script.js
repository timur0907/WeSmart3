document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.header_list').classList.toggle('active');
    document.querySelector('.burger').classList.toggle('active');
    document.querySelector('.nav').classList.toggle('active');
    document.querySelector('.body').classList.toggle('active');
});
