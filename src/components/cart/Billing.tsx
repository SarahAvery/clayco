import React, { useEffect, useState } from "react";
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
  onStepChange,
}: {
  onValueChange: (key: string, value: string) => void;
  values: { [key: string]: any };
  onStepChange: (step: number) => void;
}) => {
  const [next, setNext] = useState(false);
  const [empty, setEmpty] = useState<boolean>();

  // if no value - isEmpty is true
  useEffect(() => {
    for (const [key, value] of Object.entries(values)) {
      if (value === null || value === "") {
        setEmpty(true);
      } else setEmpty(false);
    }
    Object.keys(values).length >= 11 && empty === false ? setNext(false) : setNext(true);
  }, [empty, values]);

  const onNext = (e: any) => {
    e.preventDefault();
    onStepChange(3);
  };

  const onBack = (e: any) => {
    e.preventDefault();
    onStepChange(1);
  };

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
                            required
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
                      <input
                        type="text"
                        defaultValue={values.cardname}
                        name="cardname"
                        placeholder="John More Doe"
                        onChange={(e) => onValueChange("cardname", e.target.value)}
                        required
                      />
                    </label>
                    <label>
                      Credit card number
                      <input
                        type="text"
                        defaultValue={values.cardnumber}
                        name="cardnumber"
                        placeholder="1111-2222-3333-4444"
                        onChange={(e) => onValueChange("cardnumber", e.target.value)}
                        required
                      />
                    </label>
                    <label>
                      Exp Month
                      <input
                        type="text"
                        defaultValue={values.expmonth}
                        name="expmonth"
                        placeholder="September"
                        onChange={(e) => onValueChange("expmonth", e.target.value)}
                        required
                      />
                    </label>
                    <div className="row">
                      <div className="col-50">
                        <label>
                          Exp Year
                          <input
                            type="text"
                            defaultValue={values.expyear}
                            name="expyear"
                            placeholder="2018"
                            onChange={(e) => onValueChange("expyear", e.target.value)}
                            required
                          />
                        </label>
                      </div>
                      <div className="col-50">
                        <label>
                          CVV
                          <input
                            type="text"
                            defaultValue={values.cvv}
                            name="cvv"
                            placeholder="352"
                            onChange={(e) => onValueChange("cvv", e.target.value)}
                            required
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="button-nav-container">
          <button type="button" className="back step-btn" onClick={onBack}>
            Back
          </button>
          <button type="button" className="next step-btn" disabled={next} onClick={onNext}>
            Continue to checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Billing;
