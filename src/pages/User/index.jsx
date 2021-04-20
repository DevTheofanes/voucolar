import { useUser } from '../../hooks/useUser'

import { NewHeader } from '../../components/NewHeader'

export function UserData() {
  const { user, LogoutSession } = useUser()

  return (
    <>
      <NewHeader />

      <h1>Dados do usuario</h1>
      <p>nome: {user.name}</p>
      <p>email: {user.email}</p>
      <button onClick={LogoutSession}>Log out</button>
    </>
  );
}
