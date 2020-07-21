import React from "react";
import Alert from "react-bootstrap/Alert";
import { connect } from "react-redux";

const AlertComponent = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <Alert clasName="alert" key={alert.id} variant={alert.alertType}>
      {alert.msg}{" "}
    </Alert>
  ));

const mapStateToProps = (state) => ({
  alerts: state.alertReducer,
});

export default connect(mapStateToProps)(AlertComponent);
