import { LitElement, PropertyValues, TemplateResult } from "lit";
import { html } from "lit/static-html.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { property, state, customElement } from "lit/decorators.js";

@customElement("plasmic-component")
export class PlasmicComponent extends LitElement {
  @property({ type: String }) projectId!: string;
  @property({ type: String }) publicApiToken!: string;
  @property({ type: String }) name!: string;
  @state() fetchedHtml: string | null = null;

  render(): TemplateResult {
    return html`${this.fetchedHtml ? unsafeHTML(this.fetchedHtml) : ""}`;
  }

  protected firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);

    if (!this.projectId) {
      console.error(`Property projectId is not set in plasmic-component with name '${this.name}'`);
      return;
    }

    if (!this.publicApiToken) {
      console.error(`Property publicApiToken is not set in plasmic-component with name '${this.name}'`);
      return;
    }

    if (!this.name) {
      console.error(`Property name is not set in plasmic-component`);
      return;
    }

    fetch(`https://codegen.plasmic.app/api/v1/loader/html/published/${this.projectId}/${this.name}?hydrate=1&embedHydrate=1`, {
      headers: { "x-plasmic-api-project-tokens": this.publicApiToken },
    }).then(res => res.json()).then(result => {
      this.fetchedHtml = result.html;
    }).catch(e => console.error(`Request to plasmic api fetching '${this.name}' component has failed`, e));
  }
}
