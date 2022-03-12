import { useEffect, useState } from "react";
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
  errors,
  touched,
  onInputBlur,
  onStepChange,
}: {
  onValueChange: (key: string, value: string) => void;
  values: { [key: string]: any };
  errors: { [key: string]: string[] };
  touched: { [key: string]: boolean };
  onInputBlur: (key: string) => void;
  onStepChange: (step: number) => void;
}) => {
  const [next, setNext] = useState(true);
  const [empty, setEmpty] = useState<boolean>(false);

  // if any Errors - setEmpty to false
  // if all values & empty is true, setNext false (disabled=false)
  useEffect(() => {
    function isEmpty(errorsArr: any) {
      for (const key in errorsArr) {
        if (errorsArr[key].length) {
          setEmpty(false);
          break;
        } else setEmpty(true);
      }
    }
    const valueLength = Object.keys(values).length;
    if (valueLength === 11 && empty === true) {
      setNext(false);
    } else setNext(true);
    isEmpty(errors);
  }, [empty, errors, values]);

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
                        onBlur={() => onInputBlur("fullName")}
                        required
                      />
                    </label>
                    <div className="input-error">
                      {touched.fullName && errors.fullName?.map((error: string) => <span key={error}>{error}</span>)}
                    </div>
                    <label>
                      <FontAwesomeIcon icon={faEnvelope} />
                      Email
                      <input
                        type="email"
                        defaultValue={values.email}
                        onChange={(e) => onValueChange("email", e.target.value)}
                        onBlur={() => onInputBlur("email")}
                        required
                      />
                    </label>
                    <div className="input-error">
                      {touched.email && errors.email?.map((error: string) => <span key={error}>{error}</span>)}
                    </div>
                    <label>
                      <FontAwesomeIcon icon={faAddressCard} /> Address
                      <input
                        type="text"
                        defaultValue={values.address}
                        onChange={(e) => onValueChange("address", e.target.value)}
                        onBlur={() => onInputBlur("address")}
                        required
                      />
                    </label>
                    <div className="input-error">
                      {touched.address && errors.address?.map((error: string) => <span key={error}>{error}</span>)}
                    </div>
                    <label>
                      <FontAwesomeIcon icon={faInstitution} />
                      City
                      <input
                        type="text"
                        defaultValue={values.city}
                        onChange={(e) => onValueChange("city", e.target.value)}
                        onBlur={() => onInputBlur("city")}
                        required
                      />
                    </label>
                    <div className="input-error">
                      {touched.city && errors.city?.map((error: string) => <span key={error}>{error}</span>)}
                    </div>

                    <div className="row">
                      <div className="col-50">
                        <label>
                          Prov:
                          <Select
                            options={options}
                            defaultValue={options.find((key) => key.value === values.prov)}
                            onChange={(value: any) => onValueChange("prov", value?.value)}
                            className="select"
                            onBlur={() => onInputBlur("prov")}
                          />
                        </label>
                        <div className="input-error prov-error">
                          {touched.prov && !values.prov && <span>* Prov is required</span>}
                        </div>
                      </div>
                      <div className="col-50">
                        <label>
                          Postal Code
                          <input
                            type="text"
                            defaultValue={values.postal}
                            onChange={(e) => onValueChange("postal", e.target.value)}
                            onBlur={() => onInputBlur("postal")}
                            placeholder="x8x 8x8"
                            required
                          />
                        </label>
                        <div className="input-error">
                          {touched.postal && errors.postal?.map((error: string) => <span key={error}>{error}</span>)}
                        </div>
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
                        onBlur={() => onInputBlur("cardname")}
                        required
                      />
                    </label>
                    <div className="input-error">
                      {touched.cardname && errors.cardname?.map((error: string) => <span key={error}>{error}</span>)}
                    </div>
                    <label>
                      Credit card number
                      <input
                        type="text"
                        defaultValue={values.cardnumber}
                        name="cardnumber"
                        placeholder="1111-2222-3333-4444"
                        onChange={(e) => onValueChange("cardnumber", e.target.value)}
                        onBlur={() => onInputBlur("cardnumber")}
                        required
                      />
                    </label>
                    <div className="input-error">
                      {touched.cardnumber &&
                        errors.cardnumber?.map((error: string) => <span key={error}>{error}</span>)}
                    </div>
                    <div className="row">
                      <div className="col-50">
                        <label>
                          Exp Month
                          <input
                            type="text"
                            defaultValue={values.expmonth}
                            name="expmonth"
                            placeholder="03"
                            onChange={(e) => onValueChange("expmonth", e.target.value)}
                            onBlur={() => onInputBlur("expmonth")}
                            required
                          />
                        </label>
                        <div className="input-error">
                          {touched.expmonth &&
                            errors.expmonth?.map((error: string) => <span key={error}>{error}</span>)}
                        </div>
                        <label>
                          CVV
                          <input
                            type="text"
                            defaultValue={values.cvv}
                            name="cvv"
                            placeholder="352"
                            onChange={(e) => onValueChange("cvv", e.target.value)}
                            onBlur={() => onInputBlur("cvv")}
                            required
                          />
                        </label>
                        <div className="input-error">
                          {touched.cvv && errors.cvv?.map((error: string) => <span key={error}>{error}</span>)}
                        </div>
                      </div>
                      <div className="col-50">
                        <label>
                          Exp Year
                          <input
                            type="text"
                            defaultValue={values.expyear}
                            name="expyear"
                            placeholder="2018"
                            onChange={(e) => onValueChange("expyear", e.target.value)}
                            onBlur={() => onInputBlur("expyear")}
                            required
                          />
                        </label>
                        <div className="input-error">
                          {touched.expyear && errors.expyear?.map((error: string) => <span key={error}>{error}</span>)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="button-nav-container">
          <button type="button" className="next step-btn" disabled={next} onClick={onNext}>
            Continue to checkout
          </button>
          <button type="button" className="back step-btn" onClick={onBack}>
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default Billing;
