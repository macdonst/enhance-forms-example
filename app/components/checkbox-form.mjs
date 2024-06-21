/* globals customElements */
import CustomElement from '@enhance/custom-element'

export default class CheckboxForm extends CustomElement {
  constructor() {
    super()
    this.form = this.querySelector('form')
    // JS is enabled so hide the submit button
    this.querySelector('button').classList.add('hidden')
    this.checkboxChanged = this.checkboxChanged.bind(this)
  }

  connectedCallback() {
    this.addEventListener('change', this.checkboxChanged)
  }

  disconnectedCallback() {
    this.removeEventListener('change', this.checkboxChanged)
  }

  checkboxChanged(evt) {
    console.log('got a checkbox change', evt)
    let body =
      JSON.stringify(Object.fromEntries(new FormData(this.form))) // 4
    fetch(this.form.action, { // 5
      method: this.form.method,
      body,
      headers: {
        "Content-Type": "application/json"
      },
    }).then(() => {
      console.log('from submit successful')
    }).catch(error => {
      console.log('got an error', error)
    })

  }

  render({ html, state }) {
    const { store = {} } = state
    const { one = '', two = '', three = '' } = store

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
}

customElements.define('checkbox-form', CheckboxForm)
