import React from "react";
import { BarChart, Bar, LabelList, Label } from "recharts";

const Graph = () => {
  const data = [
    {
      name: "grades",
      gradeC: 3150,
      gradeB: 3150,
      gradeA: 3150,
      gradeS: 500,
      gradeX: 50,
    }
  ];

  const dataLabels = [
    {
      name: "gradeValues",
      gradeC: 3150,
      gradeB: 3150,
      gradeA: 3150,
      gradeS: 500,
      gradeX: 50,
    }
  ];

  const renderCustomizedLabelA = (props) => {
    const { content, ...rest } = props;
    return (
      <Label
        {...rest}
        value={"Grade A - Awesome (3150)"}
        position="insideBottomLeft"
        fontSize="9"
        width="400"
        fill="#57e145"
        fontWeight="Bold"
        dx={-15}
        dy={5}
      />
    );
  };
  const renderCustomizedLabelB = (props) => {
    const { content, ...rest } = props;
    return (
      <Label
        {...rest}
        value={"Grade B - Better (3150)"}
        position="insideBottomLeft"
        fontSize="9"
        width="400"
        fill="#45e1db"
        fontWeight="Bold"
        dx={-15}
        dy={5}
      />
    );
  };
  const renderCustomizedLabelC = (props) => {
    const { content, ...rest } = props;
    return (
      <Label
        {...rest}
        value={"Grade C - Common (3150)"}
        position="insideBottomLeft"
        fontSize="9"
        width="400"
        fill="#4583e1"
        fontWeight="Bold"
        dx={-15}
        dy={5}
      />
    );
  };
  const renderCustomizedLabelS = (props) => {
    const { content, ...rest } = props;
    return (
      <Label
        {...rest}
        value={"Grade S - Special (500)"}
        position="insideBottomLeft"
        fontSize="9"
        width="400"
        fill="#e1df45"
        fontWeight="Bold"
        dx={-15}
        dy={5}
      />
    );
  };
  const renderCustomizedLabelX = (props) => {
    const { content, ...rest } = props;
    return (
      <Label
        {...rest}
        value={"Grade X - Exclusive (50)"}
        position="insideBottomLeft"
        fontSize="9"
        width="400"
        fill="#e17a47"
        fontWeight="Bold"
        dx={-15}
        dy={5}
      />
    );
  };

  return (
    <div>
      <BarChart
        width={130}
        height={320}
        data={data}
        margin={{
          top: 25,
          right: -20,
          left: 10,
          bottom: 25,
        }}
        //  barSize={50}
      >
        {/* <Tooltip/> */}
        {/* <Bar dataKey="gradeA" stackId="a" fill="#57e145"></Bar> */}
        <Bar dataKey="gradeC" stackId="a" fill="#4583e1"></Bar>
        <Bar dataKey="gradeB" stackId="a" fill="#45e1db"></Bar>
        <Bar dataKey="gradeA" stackId="a" fill="#57e145"></Bar>
        <Bar dataKey="gradeS" stackId="a" fill="#e1df45"></Bar>
        <Bar dataKey="gradeX" stackId="a" fill="#e17a47"></Bar>
      </BarChart>
      <BarChart
        width={160}
        height={320}
        data={dataLabels}
        margin={{
          top: 25,
          right: 0,
          left: 0,
          bottom: 25,
        }}
        //  barSize={30}
      >
        <Bar dataKey="gradeC" stackId="a" fill="#ffffff">
          <LabelList dataKey="gradeC" content={renderCustomizedLabelC} />
        </Bar>
        <Bar dataKey="gradeB" stackId="a" fill="#ffffff">
          <LabelList dataKey="gradeB" content={renderCustomizedLabelB} />
        </Bar>
        <Bar dataKey="gradeA" stackId="a" fill="#ffffff">
          <LabelList dataKey="gradeA" content={renderCustomizedLabelA} />
        </Bar>
        <Bar dataKey="gradeS" stackId="a" fill="#ffffff">
          <LabelList dataKey="gradeS" content={renderCustomizedLabelS} />
        </Bar>
        <Bar dataKey="gradeX" stackId="a" fill="#ffffff">
          <LabelList dataKey="gradeX" content={renderCustomizedLabelX} />
        </Bar>
      </BarChart>
    </div>
  );
};

export default Graph;
