import { useNavigate } from "react-router-dom";
import { Button } from "../../components";
import { getUser } from "../../utils";
import { useQuery, gql } from "@apollo/client";

const GET_USERS = gql`
  query {
    users {
      id
      name
      email
      company
    }
  }
`;

export const Home = () => {
  const user = getUser();
  const { loading, error, data } = useQuery(GET_USERS);
  const navigate = useNavigate();

  return (
    <main>
      <header className="flex items-center gap-4 justify-between py-4 px-6 border-b">
        <div className="flex gap-2 items-center">
          <div className="w-14 h-14 bg-gray-300 rounded-full" />
          <div>
            <h2 className="text-lg font-bold text-gray-700">{user.name}</h2>
            <p className="text-gray-600 text-xs font-semibold">
              Empresa {user.company}
            </p>
            <p className="text-gray-600 text-xs">{user.email}</p>
          </div>
        </div>
        <Button size="small" onClick={() => navigate("/logout")}>
          Sair da aplicação
        </Button>
      </header>
      <div className="px-6 py-4">
        <h1 className="text-gray-700 font-semibold text-lg">
          Boas vindas a aplicação!
        </h1>

        <div className="mt-8 flex flex-col gap-4">
          <span className="text-gray-700 font-medium">
            Listagem de usuários
          </span>

          {error && (
            <p className="text-red-700 font-medium">
              Ops, ocorreu um erro ao listar usuários
            </p>
          )}

          {loading && (
            <p className="text-gray-600 font-medium">Carregando...</p>
          )}

          {data?.users && (
            <ul className="flex flex-col gap-4">
              {data?.users?.map((user: any) => (
                <li key={user.id} className="bg-gray-200 rounded-lg p-4">
                  <strong className="text-gray-800">{user.name}</strong>
                  <p className="text-gray-600 font-medium text-sm">
                    Email: {user.email}
                  </p>
                  <p className="text-gray-600 font-medium text-sm">
                    Empresa: {user.company}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
};
