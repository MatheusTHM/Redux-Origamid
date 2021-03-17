import React from 'react';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { incrementar, reduzir } from './store/contador';
// import { abrir, fechar } from './store/modal';
import { login } from './store/login';

function App() {
  // const { contador, modal } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login({ username, password }));
  }

  return (
    <div>
      {/* <h1>Total: {contador.total}</h1>
      <button onClick={() => dispatch(incrementar())}>Incrementar</button>
      <button onClick={() => dispatch(reduzir())}>Reduzir</button>
      <h1>Modal: {modal ? <span>Aberto</span> : <span>Fechado</span>}</h1>

      <button onClick={() => dispatch(abrir())}>Abrir</button>
      <button onClick={() => dispatch(fechar())}>Fechar</button> */}

      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block' }} htmlFor="username">
          Usuário
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <label style={{ display: 'block' }} htmlFor="password">
          Senha
        </label>
        <input
          id="password"
          type="text"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default App;
