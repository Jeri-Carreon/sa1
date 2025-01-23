let toggle = true;
function changeBackgroundColor(backgroundColor, borderColor, textColor, backgroundColor2, borderColor2, textColor2) {
    if (toggle === true) {
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
    } else {
        document.querySelector('.top').style.backgroundColor = backgroundColor2;
        document.querySelector('.header-content').style.backgroundColor = backgroundColor2;
        document.querySelector('.info').style.backgroundColor = backgroundColor2;
        document.querySelectorAll('.row').forEach(element => {
            element.style.backgroundColor = backgroundColor2;
        })
    
        document.querySelector('.header-content').style.borderColor = borderColor2;
        document.querySelectorAll('.title').forEach(element => {
            element.style.borderRight = `2px solid ${borderColor}`
        })
    
        document.querySelectorAll('.title, .content, .info, a').forEach(element => {
            element.style.color = textColor2;
        });
    }

    toggle = !toggle;

}