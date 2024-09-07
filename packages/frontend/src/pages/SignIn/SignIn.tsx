import { useState } from "react";
import { Navigate } from "react-router-dom";
import logo from "../../assets/logo_bondy_white.svg";
import { Button, Input } from "../../components";
import { useMutation, gql } from "@apollo/client";
import { getToken, setToken, setUser } from "../../utils";

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
        name
        company
      }
    }
  }
`;

export const SignIn = () => {
  const token = getToken();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { loading, error }] = useMutation(LOGIN, {
    onCompleted: (data) => {
      const { user, token } = data.login;

      setToken(token);
      setUser(user);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ variables: { email, password } });
  };

  if (token) return <Navigate to="/home" />;

  return (
    <div className="flex h-screen">
      <div className="bg-[#342FEA] w-full flex flex-col gap-6 justify-center px-20 text-white">
        <img src={logo} alt="Bondy Logo" className="w-40" />
        <h1 className="text-2xl font-semibold max-w-[450px]">
          Boas vindas! Informe suas credenciais para proseguir.
        </h1>
      </div>
      <div className="w-[80%] px-20 flex justify-center gap-10 flex-col">
        <div>
          <h1 className="text-2xl font-bold text-gray-700">Boas-vindas!</h1>
          <p className="text-gray-600 text-sm font-medium mt-1">
            Por favor, digite suas credenciais para prosseguir.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            label="E-mail"
            type="email"
            placeholder="Informe seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Senha"
            type="password"
            placeholder="Informe a sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Carregando..." : "Entrar"}
          </Button>

          {error && <p>Ocorreu um erro: {error.message}</p>}
        </form>
      </div>
    </div>
  );
};
