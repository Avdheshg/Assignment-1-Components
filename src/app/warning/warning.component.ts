import {Component} from "@angular/core";

@Component({
    selector: "app-warning",
    templateUrl: "./warning.component.html",
    styleUrls: ["./warning.component.css"]
})

export class WarningComponent {
    warningMess = "Warning message"
    definition = "a statement or event that warns of something or that serves as a cautionary example.";
}
