import React from "react";
import DateFnsUtils from '@date-io/date-fns';
// @material-ui/core
import {MuiPickersUtilsProvider, DatePicker} from '@material-ui/pickers';
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

export default function DateRangePicker(props) {
  const [selectedFromDate, setSelectedFromDate] = React.useState(new Date());
  const [selectedToDate, setSelectedToDate] = React.useState(new Date());

  const handleFromDateChange = (date) => {
      //console.log(date);
      setSelectedFromDate(date);
      props.handleFromDateChange(date);
  };
  
  const handleToDateChange = (date) => {
      //console.log(date);
      setSelectedToDate(date);
      props.handleToDateChange(date);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardBody>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  style={{margin:"10px"}}
                  label="From"
                  variant="inline"
                  inputVariant="outlined"
                  value={selectedFromDate}
                  format="MM/dd/yyyy"
                  onChange={handleFromDateChange}
                />
                <DatePicker
                  style={{margin:"10px"}}
                  label="To"
                  variant="inline"
                  inputVariant="outlined"
                  value={selectedToDate}
                  format="MM/dd/yyyy"
                  onChange={handleToDateChange}
                />
              </MuiPickersUtilsProvider>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}