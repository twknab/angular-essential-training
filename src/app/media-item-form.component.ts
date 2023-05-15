import { Component, OnInit, Inject } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { Router } from "@angular/router";
import { MediaItemService } from "./media-item.service";
import { lookupListToken } from "./providers";

@Component({
  selector: "media-item-form",
  templateUrl: "./media-item-form.component.html",
  styleUrls: ["./media-item-form.component.css"],
})
export class MediaItemFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private mediaItemService: MediaItemService,
    @Inject(lookupListToken) public lookupLists, // Best practices is to use a injection token rather than hardcoded string
    private router: Router
  ) {}

  ngOnInit() {
    // Use form groups and form controls to define the models you'll be using
    this.form = this.formBuilder.group({
      medium: this.formBuilder.control("Movies"),
      name: this.formBuilder.control(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[\\w\\-\\s\\/]+"),
        ])
      ),
      category: this.formBuilder.control(""),
      year: this.formBuilder.control("", this.yearValidator),
    });
  }

  // Custom validator
  yearValidator(control: FormControl) {
    if (control.value.trim().length === 0) {
      return null;
    }
    const year = parseInt(control.value, 10);
    const minYear = 1900;
    const maxYear = 2100;
    if (year >= minYear && year <= maxYear) {
      return null;
    } else {
      return {
        year: {
          min: minYear,
          max: maxYear,
        },
      };
    }
  }

  onSubmit(mediaItem) {
    console.log(mediaItem);
    this.mediaItemService.add(mediaItem).subscribe(() => {
      // First paramater is base parameter, the second value is the route parameter
      this.router.navigate(["/", mediaItem.medium]);
    });
  }
}
