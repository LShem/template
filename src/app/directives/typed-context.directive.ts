import { Directive, input } from "@angular/core";

@Directive({ standalone: true, selector: 'ng-template[typedContext]' })
export class TypedContextDirective<T> {
  static ngTemplateContextGuard<T>(
    _: TypedContextDirective<T>,
    _ctx: unknown
  ): _ctx is T {
    return true;
  }
  typedContext = input.required<T>();
}