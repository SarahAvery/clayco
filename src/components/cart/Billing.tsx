import React, { useState } from "react";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faAddressCard, faInstitution, faCreditCard } from "@fortawesome/free-solid-svg-icons";

const options = [
  { value: "AB", label: "AB" },
  { value: "BC", label: "BC" },
  { value: "MB", label: "MB" },
  { value: "NB", label: "NB" },
  { value: "NL", label: "NL" },
  { value: "NS", label: "NS" },
  { value: "NT", label: "NT" },
  { value: "NU", label: "NU" },
  { value: "ON", label: "ON" },
  { value: "PE", label: "PE" },
  { value: "QC", label: "QC" },
  { value: "SK", label: "SK" },
  { value: "YT", label: "YT" },
];

const Billing = ({
  onValueChange,
  values,
}: {
  onValueChange: (key: string, value: string) => void;
  values: { [key: string]: any };
}) => {
  return (
    <>
      <h1>Billing</h1>
      <div className="billing">
        <div className="row">
          <div className="col-75">
            <div className="container">
              <form>
                <div className="row">
                  <div className="col-50">
                    <h3>Billing Address</h3>
                    <label>
                      <FontAwesomeIcon icon={faUser} />
                      Full Name
                      <input
                        type="text"
                        defaultValue={values.fullName}
                        onChange={(e) => onValueChange("fullName", e.target.value)}
                        required
                      />
                    </label>
                    <label>
                      <FontAwesomeIcon icon={faEnvelope} />
                      Email
                      <input
                        type="email"
                        defaultValue={values.email}
                        onChange={(e) => onValueChange("email", e.target.value)}
                        required
                      />
                    </label>
                    <label>
                      <FontAwesomeIcon icon={faAddressCard} /> Address
                      <input
                        type="text"
                        defaultValue={values.address}
                        onChange={(e) => onValueChange("address", e.target.value)}
                        required
                      />
                    </label>
                    <label>
                      <FontAwesomeIcon icon={faInstitution} />
                      City
                      <input
                        type="text"
                        defaultValue={values.city}
                        onChange={(e) => onValueChange("city", e.target.value)}
                        required
                      />
                    </label>

                    <div className="row">
                      <div className="col-50">
                        <label>
                          Prov:
                          <Select
                            options={options}
                            defaultValue={
                              (values.prov && {
                                label: values.prov.label,
                                value: values.prov.value,
                              }) || { label: "Please select", value: "" }
                            }
                            onChange={(value: any) => onValueChange("prov", value)}
                            className="select"
                          />
                        </label>
                      </div>
                      <div className="col-50">
                        <label>
                          Postal Code
                          <input
                            type="text"
                            defaultValue={values.postal}
                            onChange={(e) => onValueChange("postal", e.target.value)}
                            placeholder="x8x 8x8"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-50">
                    <h3>
                      Payment <FontAwesomeIcon icon={faCreditCard} />
                    </h3>
                    <label>
                      Name on Card
                      <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
                    </label>
                    <label>
                      Credit card number
                      <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                    </label>
                    <label>
                      Exp Month
                      <input type="text" id="expmonth" name="expmonth" placeholder="September" />
                    </label>
                    <div className="row">
                      <div className="col-50">
                        <label>
                          Exp Year
                          <input type="text" id="expyear" name="expyear" placeholder="2018" />
                        </label>
                      </div>
                      <div className="col-50">
                        <label>
                          CVV
                          <input type="text" id="cvv" name="cvv" placeholder="352" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <label>
                  <input type="checkbox" name="sameadr" /> Shipping address same as billing
                </label>
                {/* <input type="submit" value="Continue to checkout" className="btn" /> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Billing;
