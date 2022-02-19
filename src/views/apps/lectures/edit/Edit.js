import React from "react";
import BreadCrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb";
import { Row, Col } from "reactstrap";
import WizardValidation from "./WizardValidation";
class Wizard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BreadCrumbs
          breadCrumbTitle="Edit Lecture"
          breadCrumbParent="Lectures"
          breadCrumbActive="Edit Lecture"
        />
        <Row>
          <Col sm="12">
            <WizardValidation />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
export default Wizard;
