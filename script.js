const wrapper = document.querySelector('.wrapper');
const generateBtn = wrapper.querySelector('button');
const valueInput = wrapper.querySelector('input');
const qrImage = wrapper.querySelector('#imgQrCode');

generateBtn.addEventListener('click', () => {
    let qrValue = valueInput.value;

    if (qrValue === '') {
        return wrapper;
    }
    generateBtn.innerText = 'Gerando QR Code...'

    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`
    
    qrImage.addEventListener('load', () => {
        wrapper.classList.add('active');
        generateBtn.innerText = 'QR Code Gerado!'
    })
    wrapper.classList.add('active');
});