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

      const renderCustomizedLabel = (props) => {
        const { content, ...rest } = props;
      
        return <Label {...rest} fontSize="12" fill="#FFFFFF" fontWeight="Bold" />;
      };
      
      
      return (
        <div>
           <BarChart
            width={320}
            height={320}
            data={data}
            margin={{
            top: 30,
            right: 0,
            left: 0,
            bottom: 30
             }}
            //  barSize={100}
            >
            <Tooltip/>
            <Bar dataKey="gradeA" stackId="a" fill="#57e145" />
            <LabelList
                dataKey="gradeA"
                position="center"
                content={renderCustomizedLabel}
              />
            <Bar dataKey="gradeB" stackId="a" fill="#45e1db" />
            <LabelList
                dataKey="gradeA"
                position="center"
                content="its working"
              />
            <Bar dataKey="gradeC" stackId="a" fill="#4583e1" />
            <LabelList
                dataKey="gradeA"
                position="center"
                content="its working"
              />
            <Bar dataKey="gradeS" stackId="a" fill="#e1df45" />
            <LabelList
                dataKey="gradeA"
                position="center"
                content="its working"
              />
            <Bar dataKey="gradeX" stackId="a" fill="#e17a47" />
            <LabelList
                dataKey="gradeA"
                position="center"
                content="its working"
              />
         </BarChart>
        </div>
      );
};

export default Graph;