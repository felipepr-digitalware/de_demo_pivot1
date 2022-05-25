import { NgModule, Component, ViewChild, enableProdMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { DxPivotGridModule } from "devextreme-angular";
import { Service, Sale } from "./app.service";

@Component({
  selector: "demo-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [Service]
})
export class AppComponent {
  sales: Sale[];

  dataSource: any;

  constructor(service: Service) {
    this.dataSource = {
      fields: [
        {
          caption: "Region",
          width: 120,
          dataField: "region",
          area: "row",
          expanded: "true"
        },
        {
          caption: "City",
          dataField: "city",
          width: 150,
          area: "row",
          selector: this.citySelector
        },
        {
          dataField: "date",
          dataType: "date",
          area: "column",
          groupName: "Date",
          expanded: "true"
        },
        {
          groupName: "Date",
          groupInterval: "day",
          groupIndex: 0
        },
        {
          groupName: "Date",
          groupInterval: "month",
          groupIndex: 1,
          format: "HH:mm",
          selector: function (data) {
            return new Date(data.date);
          }
        },
        {
          caption: "Sales",
          dataField: "amount",
          dataType: "number",
          summaryType: "sum",
          area: "data"
        }
      ],
      store: service.getSales()
    };
  }

  citySelector(data) {
    return `${data.city}`;
  }

  paipillaSelector(data) {
    return "Hoola";
  }
}

@NgModule({
  imports: [BrowserModule, DxPivotGridModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
