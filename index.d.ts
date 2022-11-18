import { LitElement, PropertyValues, TemplateResult } from "lit";
export type Version = "published" | "preview";
export type PlasmicLoadedEvent = "loaded";
export declare class PlasmicComponent extends LitElement {
    projectId: string;
    publicApiToken: string;
    name: string;
    version: Version;
    hydrate: boolean;
    embedHydrate: boolean;
    componentProps: any | null;
    globalVariants: ArrayLike<any> | null;
    fetchedHtml: string | null;
    render(): TemplateResult;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    protected updated(_changedProperties: PropertyValues): void;
}
//# sourceMappingURL=index.d.ts.map