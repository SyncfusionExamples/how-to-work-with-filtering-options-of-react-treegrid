import React from 'react';
import { TreeGridComponent, ColumnsDirective, ColumnDirective,
         Inject, Page, Filter } from '@syncfusion/ej2-react-treegrid';
import { summaryData } from './datasource';
import './App.css';

function App() {
  return (
    <TreeGridComponent dataSource={summaryData}
                       childMapping="subtasks"
                       treeColumnIndex={1}
                       allowPaging={true}
                       allowFiltering={true}
                       filterSettings={{
                         ignoreAccent: true,
                         type: "Excel",
                        // Uncomment below code to apply filtering at initial loading  
                        //  columns: [{
                        //    field: "taskName",
                        //    matchCase: false,
                        //    operator: "startswith",
                        //    predicate: "and",
                        //    value: "plan"
                        //  }]
                         hierarchyMode: "None"
                       }}>
      <Inject services={[Page, Filter]} />                   
      <ColumnsDirective>
        <ColumnDirective field="taskID" headerText="Task ID" 
        width='90' textAlign="Right" isPrimaryKey={true}>
        </ColumnDirective>
        <ColumnDirective field="taskName" headerText="Task Name">
        </ColumnDirective>
        <ColumnDirective field="startDate" headerText="Start Date" 
        format='yMd' editType="datepickeredit">
        </ColumnDirective>
        <ColumnDirective field="duration" headerText="Duration">
        </ColumnDirective>
        <ColumnDirective field="priority" headerText="Priority"
                         editType="dropdownedit">
        </ColumnDirective>
        <ColumnDirective field="approved" headerText="Approved"
                         editType="booleanedit">
        </ColumnDirective>
      </ColumnsDirective>
    </TreeGridComponent>
  );
}

export default App;
