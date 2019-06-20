import { Component, OnInit } from "@angular/core";
import { HNAPIService } from "../hn-api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-stories",
  templateUrl: "./stories.component.html",
  styleUrls: ["./stories.component.scss"]
})
export class StoriesComponent implements OnInit {
  typeSub: any;
  pageSub: any;
  items = [];
  storiesType;
  isLoading = true;
  pageNum: number;
  listStart: number;
  constructor(
    private _hnApiService: HNAPIService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.typeSub = this.route.data.subscribe(
      data => (this.storiesType = (data as any).storiesType)
    );
    this.pageSub = this.route.params.subscribe(params => {
      this.pageNum = +params.page ? +params.page : 1;
      this.isLoading = true;
      this._hnApiService.fetchStories(this.storiesType, this.pageNum).subscribe(
        items => {
          this.isLoading = false;
          this.items = items;
        },
        error => {
          console.log("Error fetching" + this.storiesType + "stories");
          this.isLoading = false;
        },
        () => {
          this.listStart = (this.pageNum - 1) * 30 + 1;
          this.isLoading = false;
        }
      );
    });
  }
}
