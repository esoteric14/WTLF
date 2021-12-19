import React from 'react';
import { BarChart, Bar,Tooltip, ResponsiveContainer,LabelList, Label } from 'recharts';

const Graph = () => {
    const data = [
        {
          name: "grades",
          gradeA: 3185,
          gradeB: 3741,
          gradeC: 2524,
          gradeS: 500,
          gradeX: 50,
        }
      ];  

      const dataLabels =[
          {
            name: "gradeValues",
            gradeA: 3185,
            gradeB: 3741,
            gradeC: 2524,
            gradeS: 500,
            gradeX: 50, 
        }
      ]

      const renderCustomizedLabelA = (props) => {
        const { content, ...rest } = props;
        return <Label {...rest} value={"Grade A - Awesome (3186)"} position="insideBottomLeft" fontSize="8" width="400" fill="#57e145" fontWeight="Bold" dx={-15} dy={5} />;
      };
      const renderCustomizedLabelB = (props) => {
        const { content, ...rest } = props;
        return <Label {...rest} value={"Grade B - Awesome 3186"} position="insideBottomLeft" fontSize="8" width="400" fill="#45e1db" fontWeight="Bold" dx={-15} dy={5} />;
      };
      const renderCustomizedLabelC = (props) => {
        const { content, ...rest } = props;
        return <Label {...rest} value={"Grade C - Common (2524)"} position="insideBottomLeft" fontSize="8" width="400" fill="#4583e1" fontWeight="Bold" dx={-15} dy={5} />;
      };
      const renderCustomizedLabelS = (props) => {
        const { content, ...rest } = props;
        return <Label {...rest} value={"Grade S - Special (500)"} position="insideBottomLeft" fontSize="8" width="400" fill="#e1df45" fontWeight="Bold" dx={-15} dy={5} />;
      };
      const renderCustomizedLabelX = (props) => {
        const { content, ...rest } = props;
        return <Label {...rest} value={"Grade X - Exclusive (50)"} position="insideBottomLeft" fontSize="8" width="400" fill="#e17a47" fontWeight="Bold" dx={-15} dy={5} />;
      };
      
      return (
        <div>
           <BarChart
            width={150}
            height={320}
            data={data}
            margin={{
            top: 10,
            right:-10,
            left: 0,
            bottom: 10
             }}
            //  barSize={50}
            >
            <Tooltip/>
            <Bar dataKey="gradeA" stackId="a" fill="#57e145"></Bar>
            <Bar dataKey="gradeB" stackId="a" fill="#45e1db"></Bar>
            <Bar dataKey="gradeC" stackId="a" fill="#4583e1"></Bar>
            <Bar dataKey="gradeS" stackId="a" fill="#e1df45"></Bar>
            <Bar dataKey="gradeX" stackId="a" fill="#e17a47"></Bar>
         </BarChart>
         <BarChart
            width={150}
            height={320}
            data={dataLabels}
            margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 10
             }}
            //  barSize={30}
            >
            <Bar dataKey="gradeA" stackId="a" fill="#ffffff">
            <LabelList
                dataKey="gradeA"
                // position="outsideRight"
                content={renderCustomizedLabelA}
              />
              </Bar>
            <Bar dataKey="gradeB" stackId="a" fill="#ffffff">
            <LabelList
                dataKey="gradeB"
                // position="insideBottom"
                content={renderCustomizedLabelB}
              />
              </Bar>
            <Bar dataKey="gradeC" stackId="a" fill="#ffffff">
            <LabelList
                dataKey="gradeC"
                // position="insideBottom"
                content={renderCustomizedLabelC}
              />
              </Bar>
            <Bar dataKey="gradeS" stackId="a" fill="#ffffff">
            <LabelList
                dataKey="gradeS"
                // position="insideBottom"
                content={renderCustomizedLabelS}
              />
              </Bar>
            <Bar dataKey="gradeX" stackId="a" fill="#ffffff">
            <LabelList
                dataKey="gradeX"
                // position="insideBottom"
                content={renderCustomizedLabelX}
              />
              </Bar>
         </BarChart>
        </div>
      );
};

export default Graph;