import { Directive, inject, Input, TemplateRef } from "@angular/core";

@Directive({selector: '[appFiltersPanel]'})
export class FiltersPanelDirective {
  public readonly template = inject(TemplateRef<any>);

  @Input()
  public readonly title!: string;

  @Input()
  public readonly description!: string | number;
}
