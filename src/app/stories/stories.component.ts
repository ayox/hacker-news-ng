import { Component, OnInit } from "@angular/core";
import { HNAPIService } from "../hn-api.service";

@Component({
  selector: "app-stories",
  templateUrl: "./stories.component.html",
  styleUrls: ["./stories.component.scss"]
})
export class StoriesComponent implements OnInit {
  items;
  constructor(private _hnApiService: HNAPIService) {}

  ngOnInit() {
    this._hnApiService.fetchStories().subscribe(
      items => {
        // console.log(items);
        this.items = items;
      },
      error => console.error("Error fetching stories")
    );
  }
}
