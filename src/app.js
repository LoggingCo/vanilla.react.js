import { useEffect, useState } from '../@react/hook.js';
import { render } from '../@react/dom.js';

function App() {
  const [state, setState] = useState('test');

  return render(`<div>${state}</div>`);
}
export default App;
