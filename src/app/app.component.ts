import { NgModule, Component, ViewChild, enableProdMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import {
  DxDataGridComponent,
  DxDataGridModule,
  DxPivotGridModule,
  DxPopupModule,
  DxTemplateModule
} from "devextreme-angular";
import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
import { Service, Sale } from "./app.service";

@Component({
  selector: "demo-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [Service]
})
export class AppComponent {
  @ViewChild("drillDownDataGrid") drillDownDataGrid: DxDataGridComponent;

  sales: Sale[];

  dataSource: any;

  drillDownDataSource: any;

  salesPopupVisible = false;

  salesPopupTitle = "";

  constructor(service: Service) {
    this.dataSource = new PivotGridDataSource({
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
          groupIndex: 0,
          selector: function (data) {
            return new Date(data.date).toLocaleDateString("es-CO");
          }
        },
        {
          groupName: "Date",
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
    });
  }

  citySelector(data) {
    return `${data.city}`;
  }

  onPivotCellClick(e) {
    if (e.area == "data") {
      const rowPathLength = e.cell.rowPath.length;
      const rowPathName = e.cell.rowPath[rowPathLength - 1];

      this.drillDownDataSource = this.dataSource.createDrillDownDataSource(
        e.cell
      );
      this.salesPopupTitle = `${rowPathName || "Total"} Drill Down Data`;
      this.salesPopupVisible = true;
    }

    if (e.area == "row" && e.cellElement.className === "dx-last-cell") {
      console.log(e.cell.text);
    }
  }

  onPopupShown() {
    this.drillDownDataGrid.instance.updateDimensions();
  }
}

@NgModule({
  imports: [
    DxPivotGridModule,
    BrowserModule,
    DxTemplateModule,
    DxPopupModule,
    DxDataGridModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
