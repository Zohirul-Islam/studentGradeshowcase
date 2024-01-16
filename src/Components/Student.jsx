import React from "react";
import { studentOfClassOne ,studentOfClassTwo} from "../data";
import Tabledata from "./Tabledata";
import TableHeader from "./TableHeader";
export default function Student() {
  const NstudentOne = studentOfClassOne.map((v) => {
    return <Tabledata v={v}/>
  });


  return (
    <tbody>
        <TableHeader header="classOne"/>
        {NstudentOne}
      <TableHeader header="classTwo"/>
        
    </tbody>
  );
}
