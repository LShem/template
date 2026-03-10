import { inject, Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmDialogComponent, ConfirmDialogData, ConfirmDialogResult } from "../dialogs/confirm-dialog.component";
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DialogService {
    readonly #dialog = inject(MatDialog);

    async openDialog<T>(data: ConfirmDialogData<T>) {
      const dialogRef = this.#dialog.open<ConfirmDialogComponent<T>, ConfirmDialogData<T>, ConfirmDialogResult>(
        ConfirmDialogComponent,
        {
          minWidth: '800px',
          data,
        });

      return await firstValueFrom(dialogRef.afterClosed())
    }
}