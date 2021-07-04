const document = (css, body, js = '') => {
    
    const documentHtml = `
    <!DOCTYPE html>
    <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&family=Poppins:wght@400;700&display=swap" rel="stylesheet">

            <title>DocService | IT Solutions</title>

        </head>
        ${css}
        <link rel="stylesheet" type="text/css" href="globalstyles.css">

        <body>

            ${body}

        <scripts>
            ${js}
        </scripts>
        </body>
    </html>`
    
    return documentHtml
}

module.exports = document