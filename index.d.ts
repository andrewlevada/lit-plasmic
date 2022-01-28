import { LitElement, PropertyValues, TemplateResult } from "lit";
export declare class PlasmicComponent extends LitElement {
    projectId: string;
    publicApiToken: string;
    name: string;
    fetchedHtml: string | null;
    render(): TemplateResult;
    protected firstUpdated(_changedProperties: PropertyValues): void;
}
//# sourceMappingURL=index.d.ts.map