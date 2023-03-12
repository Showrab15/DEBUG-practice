
let num = 0;
const numberCountFunction = () => {
    num += 1;
    document.getElementById('number').innerText = num;
    localStorage.setItem('Number', num);
}