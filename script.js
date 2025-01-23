function changeBackgroundColor(backgroundColor, borderColor, textColor) {
    document.querySelector('.top').style.backgroundColor = backgroundColor;
    document.querySelector('.header-content').style.backgroundColor = backgroundColor;
    document.querySelector('.info').style.backgroundColor = backgroundColor;
    document.querySelectorAll('.row').forEach(element => {
        element.style.backgroundColor = backgroundColor;
    })

    document.querySelector('.header-content').style.borderColor = borderColor;
    document.querySelectorAll('.title').forEach(element => {
        element.style.borderRight = `2px solid ${borderColor}`
    })

    document.querySelectorAll('.title, .content, .info, a').forEach(element => {
        element.style.color = textColor;
    });
}