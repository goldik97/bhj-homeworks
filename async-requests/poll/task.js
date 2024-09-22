let pollTitle = document.getElementById('poll__title');
let pollAnswer = document.getElementById('poll__answers');
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll', true);

xhr.send();

xhr.onreadystatechange = function() {
    if(xhr.readyState != 4) 
        return;

    pollAnswer.innerHTML = '';

    if(xhr.status != 200) {
         alert(xhr.status + ': ' + xhr.statusText)
    }
    else {
        let pollJson = JSON.parse(xhr.responseText);
        let answerJson = pollJson.data.answers;
        pollTitle.innerText = pollJson.data.title
        for(let key in answerJson) {
            pollAnswer.innerHTML += `
            <button class="poll__answer" onclick="alert('Спасибо, ваш голос засчитан!');">
            ${answerJson[key]}
            </button>`
        }
    }
}   