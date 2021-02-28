import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import * as Bucket from "@spica-devkit/bucket";
import { NumberComponent } from "src/app/inputs/number/number.component";
import { StorageComponent } from "src/app/inputs/storage/storage.component";
import { TextComponent } from "src/app/inputs/text/text.component";
import { TextareaComponent } from "src/app/inputs/textarea/textarea.component";
import { FormGroup } from "@angular/forms";
import { QuestionControlService } from "src/app/services/question-control.service";
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: "page-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
  private formBucket = "603b8f981f7cc7002cebe96c";
  private formFields;
  
  components = {
    string: TextComponent,
    number: NumberComponent,
    textarea: TextareaComponent,
    storage: StorageComponent,
  };

  form: FormGroup;
  @ViewChild("fields", { read: ViewContainerRef, static: false })
  entry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver,
    private qcs: QuestionControlService,
    private _snackBar: MatSnackBar
  ) {}

  async ngOnInit() {
    Bucket.initialize({
      publicUrl: "https://test-4061d.hq.spicaengine.com/api",
      apikey: "fyve9e1kfwmh1wl",
    });
    this.formFields = await Bucket.get(this.formBucket);

    let formatFields = Object.entries(this.formFields.properties).map(
      (fields: [any, any]) => {
        return {
          ...fields[1],
          key: fields[0],
          required: this.formFields.required.includes(fields[0]),
        };
      }
    );

    this.form = this.qcs.toFormGroup(formatFields);
    setTimeout(() => {
      this.createComponents(this.formFields.properties);
    }, 100);
  }

  createComponents(fields) {
    Object.entries(fields).forEach(([key, value]: [string, any]) => {
      const factory = this.resolver.resolveComponentFactory(
        this.components[value.type]
      );
      const componentRef = this.entry.createComponent(factory) as any;
      componentRef.instance.form = this.form;
      componentRef.instance.key = key;
      componentRef.instance.label = value.title;
      componentRef.instance.options = [];
    });
  }
  async onSubmit() {
    await Bucket.data.insert(this.formBucket, this.form.getRawValue()).then(() => {
      this._snackBar.open("Thank you for your contribution", "Close", {
        duration: 3000
      });
    }).catch(() => {
      this._snackBar.open("An error occured. Please take a screenshot and contact with your representative", "Close", {
        duration: 7500
      });
    })

  }
}
