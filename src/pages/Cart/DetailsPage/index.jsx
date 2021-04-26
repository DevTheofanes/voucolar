import { NewHeader } from '../../../components/NewHeader';
// import { useCart } from '../../../hooks/useCart';
import { useUser } from '../../../hooks/useUser';

import { PermissionComponent } from './PermissionComponent'

export function DetailsCartPage() {
  const { user } = useUser()

  return (
    <>
      {
        user ? (
          <>
            <NewHeader />
            <h1>Continuar Compra</h1>
          </>
        ) : <PermissionComponent />}
    </>
  );
}
