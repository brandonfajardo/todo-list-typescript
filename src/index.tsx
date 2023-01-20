import ReactDOM from 'react-dom/client';
import TodoApp from './components/TodoApp';

import { Provider } from 'react-redux'
import { store } from './state'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>
)
