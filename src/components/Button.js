const Button = (title, backgroundColor, fontColor) => {
    return `
    <button type="submit" 
    style="
        background: ${backgroundColor};
        border-radius: 4px;
        color: ${fontColor};
        ">
        ${title}
    </button>
    `
}

module.exports = Button