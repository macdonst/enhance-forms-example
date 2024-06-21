export default function MyHeader({ html, state }) {
  const { store = {} } = state
  const { one = '', two = '', three = '' } = store

  console.log(store)

  return html`
<style>
  :host {
    --_accent: var(--accent, royalblue);
    --_fore: var(--fore, black);
    --_back: var(--back, white);
  }
  :host button {
    color: var(--_back);
    background-color: var(--_accent, var(--_fore));
    border: 1px solid transparent;
  }
  :host button:active {
    color: var(--_fore);
    background-color: var(--_accent, var(--_back));
    border: 1px solid var(--_fore);
  }
  :host button:disabled {
    color: var(--_accent, var(--_fore));
    background-color: var(--_fore);
    border: 1px solid var(--_accent, var(--_back));
  }
</style>
  <h1>Checkbox Form</h1>
  <form action="/" method="POST">
    <label>One
      <input type="checkbox" name="one" ${one ? 'checked' : ''}/>
    </label>
    <label>Two
      <input type="checkbox" name="two" ${two ? 'checked' : ''}/>
    </label>
    <label>Three
      <input type="checkbox" name="three" ${three ? 'checked' : ''}/>
    </label>
    <button type="submit" class="
    whitespace-no-wrap
    pb-3
    pi0
    font-semibold
    radius0">Save</button>
  </form>
    `
}
