import { Fab, Grid, InputLabel, MenuItem, Select } from "@material-ui/core";
import PublicIcon from '@material-ui/icons/Public';
import EmailIcon from '@material-ui/icons/Email';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { inject, observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import apiManager from "../../api";
import Sales from "./Sales";
import TopEmployees from "./TopEmployees";
import purple from '@material-ui/core/colors/purple';


function Dashboard(props) {
  const { countrieStore, ownerStore, emailTypeStore,clientsStore } = props;

  const [salesByDate, setSalesByDate] = useState([]);
  const [salesByEmployees, setSalesByEmployees] = useState([]);
  const [salesByMonth, setSalesByMonth] = useState([]);
  const [salesByEmail, setSalesByEmail] = useState([]);
  const [salesByCountry, setSalesByCountry] = useState([]);
  const [filter, setFilter] = useState("email");

  const filterHandler = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value);
  };

  const filterType = {
    email: salesByEmail,
    country: salesByCountry,
    employees: salesByEmployees,
    "months(all time)": salesByMonth,
  };

  const gridProps = {
    direction: "row",
    justify: "center",
    alignItems: "center",
    xs: 6,
  };

  const state = (color,icon,title,data) => (
    <div>
        <Fab color={color}>
          {icon}
        </Fab>
        <div>
            <h5>{title}</h5>
            <h5>{data}</h5>
        </div>
    </div>
  )

  useEffect(() => {
    apiManager.dash_salesByDate().then(setSalesByDate).catch(console.log)
    apiManager.dash_salesByMonth().then((data) => setSalesByMonth(data.map((d) => {return { sales: parseInt(d.sales), key: d.month }}))).catch(console.log)
  }, []);
  useEffect(() => {
    apiManager.dash_salesByEmployee().then((data) => setSalesByEmployees(data.map((d) => {return {sales: parseInt(d.sales),key: ownerStore.byId(d.owner_id)}}))).catch(console.log);
  }, [ownerStore.owners]);

  useEffect(() => {apiManager.dash_salesByEmail().then((data) =>setSalesByEmail(data.map((d) => {return {sales: parseInt(d.sales),key: emailTypeStore.byId(d.email_type_id)}}))).catch(console.log);
  }, [emailTypeStore.types]);

  useEffect(() => {apiManager.dash_salesByCountry().then((data) =>setSalesByCountry(data.map((d) => {return {sales: parseInt(d.sales),key: countrieStore.byId(d.country_id)}}))).catch(console.log);
  }, [countrieStore.countries]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <h2>Top employees</h2>
        <TopEmployees
          data={salesByEmployees && salesByEmployees.slice(0, 3)}
          clr="#65743A"
        />
      </Grid>
      <Grid item xs={6}>
        <h2>
          Sales by{" "}
          <Select value={filter} onChange={filterHandler}>
            {Object.keys(filterType).map((k) => (
              <MenuItem key={k} value={k}>
                {k}
              </MenuItem>
            ))}
          </Select>
        </h2>
        <TopEmployees data={filterType[filter]} />
      </Grid>
      <Grid item xs={6}>
        <h2>Last 30 documented days</h2>
        <Sales salesByDate={salesByDate && salesByDate.slice(0, 30)} />
      </Grid>
      <Grid item container xs={6}>
        <Grid item container {...gridProps}>
            {state("secondary",<AttachMoneyIcon/>,"outstanding clients",clientsStore.outstanding_clients)}
        </Grid>
        <Grid item container {...gridProps}>
            {state("primary",<PublicIcon/>,"is the hottest country",salesByCountry[0] && salesByCountry[0].key)}
        </Grid>
        <Grid item container {...gridProps}>
            {state("secondary",<EmailIcon/>,"Emails sent",clientsStore.emails_sent)}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default inject("countrieStore","ownerStore","emailTypeStore","clientsStore")(observer(Dashboard));
