import { useState } from '../@react/hook.js';
import { render } from '../@react/render.js';

function App() {
  const a = useState();

  return render(`<div>test</div>`);
}
export default App;
