const Button = require("../../components/Button")
const Logo = require("../../components/Logo")
const document = require("../../_document")

const Login = () => {

    const LoginHtml = 
    
    document(
        `<link rel="stylesheet" type="text/css" href="./screens/Login/styles.css">`,

        `
        <div class="form-login">
            ${Logo()}
            <form action="/data" method="POST">
                <div class="input-label">
                    <label for="nome" class="label-input">Usuário:</label>
                    <input type="text" id="nome" name="user" value="Filipe"/>
                </div>
                <div class="input-label">
                    <label for="email">Senha:</label>
                    <input type="password" id="password" name="password" value="123456"/>
                </div>
                <div class="button">
                    ${Button('Logar', '#1A202C', 'white')}
                </div>
            </form>
        </div>`
    )

    return LoginHtml
}

module.exports = Login