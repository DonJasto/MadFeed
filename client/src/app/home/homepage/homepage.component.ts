import { Component, OnInit, HostListener } from "@angular/core";
import { Router } from "@angular/router";
import { Title, ɵDomRendererFactory2 } from "@angular/platform-browser";
import { HttpService } from "../../core/services/http/http.service";
import { madData } from "src/environments/mad_data";

@Component({
  selector: "ia-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"],
})
export class HomepageComponent implements OnInit {
  feedItems = [];
  initialFeed = 15;
  constructor(
    private router: Router,
    private titleService: Title,
    private httpService: HttpService
  ) {
    this.titleService.setTitle("Home");
  }

  ngOnInit() {
    this.getFeed();
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      console.log("at bottom");
      this.getFeed();
    }
  }

  getFeed() {
    if (this.feedItems && this.feedItems.length) {
      // not empty
      this.httpService.get(`GetFeed/${this.feedItems.length}`).subscribe(
        (res: any) => {
          console.log(res);
          this.feedItems.push(...res);
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.getFlattenJson();
      this.httpService.get(`GetFeed/${this.initialFeed}`).subscribe(
        (res: any) => {
          console.log(res);
          this.feedItems.push(...res);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  getFlattenJson() {
    var bb = madData;
    this.feedItems = bb.ids.map((id) => { 
      return  bb.byId[id];
      }  );

    for (let d in this.feedItems) {
      console.log(d);
    }
  }
}
