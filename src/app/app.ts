import { Component, Directive, inject, input, TemplateRef, viewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { DialogService } from './services/dialog.service';
import { TypedContextDirective } from './directives/typed-context.directive';

interface DocumentContext {
  $implicit: Document;
}

interface Document {
  name: string
}


@Component({
  selector: 'app-root',
  imports: [MatButton, TypedContextDirective],
  templateUrl: './app.html',
})
export class App {
  readonly #dialogService = inject(DialogService);

  protected readonly typedContext!: DocumentContext;

  protected readonly contentRef = viewChild.required<TemplateRef<DocumentContext>>('contentRef');


  protected async onClick(){
    const document : Document = { name: 'name of the document'}

    await this.#dialogService.openDialog({
      title:'try',
      contentRef: this.contentRef(),
      context:  document 
    });    
  }
}

