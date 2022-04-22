import React from "react";
import InputField from "../../component/InformationComponent/InputField";
import { Button } from "react-rainbow-components";

function index() {
  return (
    <div>
      <h1 style={{ marginTop: "80px" }}>กรอกข้อมูลส่วนตัว</h1>
      <div style={{ width: "800px", margin: "auto", marginTop: "50px" }}>
        <InputField
          lable={"ชื่อ-สกุล"}
          placeholder={"กรุณากรอกชื่อจริงและนามสกุล...."}
        />
        <InputField lable={"KKU-Mail"} placeholder={"กรุณากรอก KKU-Mail...."} />
        <InputField
          lable={"รหัสนักศึกษา (มีขีด)"}
          placeholder={"กรุณากรอกรหัสนักศึกษาแบบมีขีด...."}
        />
        <InputField
          lable={"เลขบัตรประจำตัวประชาชน"}
          placeholder={"กรุณากรอกเลขบัตรประจำตัวประชาชน...."}
        />
      </div>
      <div style={{margin: "100px 0 0 0"}}>
        <Button
          label="ยืนยันข้อมูล"
          variant="brand"
          className="rainbow-m-around_medium"
          size="medium"
        />
      </div>
    </div>
  );
}

export default index;
