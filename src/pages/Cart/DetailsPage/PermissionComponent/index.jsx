import { NewHeader } from '../../../../components/NewHeader';
import { Container } from './styles';

export function PermissionComponent() {
  return (
    <>
      <NewHeader />
      <Container>
        <h1>Para continuar a compra</h1>
        <h2>Você precisa fazer Login</h2>

        <a href="user/login"><button>Ir para Login</button></a>
      </Container>
    </>
  );
}