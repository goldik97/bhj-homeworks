const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.onload = () => {
        console.log(xhr.response);
    }

    xhr.upload.addEventListener('progress', (e) => {
        console.log(e);
        progress.value = e.loaded / e.total;
    });

    xhr.send(formData);
})