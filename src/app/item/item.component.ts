import { Component, OnInit, Input } from "@angular/core";
import { HNAPIService } from "../hn-api.service";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"]
})
export class ItemComponent implements OnInit {
  @Input() itemID: number;
  item;
  constructor(private _hnApiService: HNAPIService) {}

  ngOnInit() {
    this._hnApiService.fetchItem(this.itemID).subscribe(
      item => {
        console.log(item);
        this.item = item;
      },
      error => console.error("Error fetching items")
    );
  }
}
