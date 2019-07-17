import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Query, DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { AutoCompleteComponent } from '@syncfusion/ej2-angular-dropdowns';
import { CheckBoxComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'autocomplete-text-angular';
  @ViewChild('remote')
  public remoteObj: AutoCompleteComponent;
  
    public data: DataManager = new DataManager({
      url: 'https://ej2services.syncfusion.com/production/web-services/api/Employees',
      adaptor: new WebApiAdaptor,
      crossDomain: true
  });

  public suggestionCount: number = 5;
    public query: Query = new Query().select(['FirstName', 'EmployeeID']).take(10).requiresCount();
    public remoteFields: Object = { value:'FirstName' };
    public remoteWaterMark: string = 'e.g. Andrew Fuller';
    public onChange(): void {
        this.remoteObj.autofill = true;
    }
}
