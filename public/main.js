async function init() {
    let rustApp = null;

    try {
        rustApp = await import('../pkg')
    } catch (e) {
        console.error(e);
        return;
    }

    console.log(rustApp);

    const file = document.getElementById('upload');
    const fileReader = new FileReader();
    
    fileReader.onload = () => {
        const base64 = fileReader.result.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');

        console.log(file.files[0])
        console.log(base64);
    }

    file.addEventListener('change', () => {
        fileReader.readAsDataURL(file.files[0])
    })
}

init();