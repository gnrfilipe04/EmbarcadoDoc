const document = require("../../_document")

const home = (userName) => {

    const arr = [
        {
            name: 'joao'
        },
        {
            name: 'pedro'
        },
        {
            name: 'roberto'
        },
        {
            name: 'gabriel'
        }
    ]

    const showUsers = (users) => {
        let listUsers = users.map(user => (
            `<ul>
                <li>
                    ${user.name}
                </li>
            </ul>`    
        ))
        
        return listUsers.join("")
    }

    const HomeHtml =

        document(
            `<link rel="stylesheet" type="text/css" href="styles.css">`,
            
            `seu nome é: ${userName}<br>
            ${showUsers(arr)}`,

        )

    return HomeHtml
}

module.exports = home