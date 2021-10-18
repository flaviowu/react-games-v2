import React from 'react'

function AccountForm() {
    
    function handleSubmit(){
        return
    }

    return (
        <div className="accountForm">
            <form className="accountForm-form" onSubmit={handleSubmit}>
                <input type="text" name="name"/>
                <input type="text" name="lastname"/>
                <input type="email" name="email"/>
                <input type="text" name="cpf"/>
                <input type="password" name="password1"/>
                <input type="password" name="password2"/>
                <input type="submit" value="Enviar"/>
                <input type="reset" value="Limpar"/>
            </form>
            
        </div>
    )
}

export default AccountForm
