import React from "react";
import { api } from "../../../util/api/api";
import "./AccountForm.css";

function AccountForm(props) {
  async function handleSubmit(e){
    e.preventDefault();

    const name = e.target.name.value;
    const lastname = e.target.lastname.value;
    const email = e.target.email.value;
    const cpf = e.target.cpf.value;
    const password = e.target.password1.value;

    const payload = {
      name,
      lastname,
      email,
      cpf,
      password,
    };

    const response = await api.buildApiPostRequest(
      api.createAccountUrl(),
      payload
    );

    const results = await response.json();
    console.log(results)

    if (response.status === 201) {
      props.history.push("/Login")
    }

  }

  return (
    <div className="accountForm">
      <form className="accountForm-form" onSubmit={handleSubmit}>
        <div className="accountForm-input">
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" />
        </div>
        <div className="accountForm-input">
          <label htmlFor="lastname">Sobrenome:</label>
          <input type="text" name="lastname" />
        </div>

        <div className="accountForm-input">
          <label htmlFor="email">e-mail:</label>
          <input type="email" name="email" />
        </div>
        <div className="accountForm-input">
          <label htmlFor="cpf">CPF:</label>
          <input type="number" name="cpf" />
        </div>
        <div className="accountForm-input">
          <label htmlFor="password1">Digite sua Senha:</label>
          <input type="password" name="password1" />

          <label htmlFor="password2">Digite a senha novamente:</label>
          <input type="password" name="password2" />
        </div>
        <div className="accountForm-input">
          <input type="submit" value="Enviar" />
          <input type="reset" value="Limpar" />
        </div>
      </form>
    </div>
  );
}

export default AccountForm;
