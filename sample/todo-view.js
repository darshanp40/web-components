import { LitElement, html, css } from 'lit-element';
import { FILTERS } from './constants';

class TodoView extends LitElement {
    static get styles() {
        return css`
            :host {
                display: block;
            }
        `;
    }

    static get properties() {
        return {
            title: {
                type: String,
            },
            todos: {
                type: Array,
            },
            filter: {
                type: String,
            },
            task: {
                type: String,
            },
        };
    }

    constructor() {
        super();
        this.todos = [];
        this.filter = FILTERS.SHOW_ALL;
        this.task = '';
    }
    setTodo(event) {
        this.task = event.target.value;
    }
    addTodo() {
        this.todos = [ ...this.todos, this.task ];
    }
    render() {
        return html`
        <input type="text" @input="${this.setTodo}"></input>
        <button @click="${this.addTodo}">ADD TODO</button>
        <ul>
            ${this.todos.map((item) => html`<li>${item}</li>`)}
        </ul>
    `;
    }
}

customElements.define('todo-view', TodoView);
