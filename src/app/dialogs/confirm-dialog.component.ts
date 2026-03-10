import { Component, inject, TemplateRef } from "@angular/core";
import { MatButton } from "@angular/material/button";
import { MatDialogTitle, MatDialogContent, MatDialogActions, MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { NgTemplateOutlet } from '@angular/common';


export interface ConfirmDialogData<T> {
  title: string;
  contentRef: TemplateRef<{ $implicit: T }>;
  context:  T ;
}

export enum ConfirmDialogResult {
  CONFIRM = 'Confirm',
  CANCEL = 'Cancel',
}

@Component({
  selector:'app-confirm-dialog',
  templateUrl:'./confirm-dialog.component.html',
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    NgTemplateOutlet,
  ],
})
export class ConfirmDialogComponent<T> {
  readonly #dialogRef = inject<MatDialogRef<ConfirmDialogComponent<T>>>(MatDialogRef);
  protected readonly data = inject<ConfirmDialogData<T>>(MAT_DIALOG_DATA);

  constructor(){
    console.log(this.data);
  }


  onCancel(): void {
    this.#dialogRef.close(ConfirmDialogResult.CANCEL);
  }

  onConfirm(): void {
    this.#dialogRef.close(ConfirmDialogResult.CONFIRM);
  }
}


