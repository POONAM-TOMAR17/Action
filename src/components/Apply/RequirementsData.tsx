import React from 'react';

interface IRequirementsDataProps {
  data: string[][];
}

const RequirementsData = (props: IRequirementsDataProps) => {
  const { data } = props;
  return (
    <div className="w-full grid lg:grid-cols-2 xs:gap-1.5 lg:gap-8">
      {/* tslint:disable-next-line: no-any */}
      {data?.map((cols: string[], index: number) => {
        return (
          <ul key={index} className="flex-1 list-disc ml-5 space-y-1.5">
            {cols.map((items: string, i: number) => (
              <li key={i} className="w-full">
                {items}
              </li>
            ))}
          </ul>
        );
      })}
    </div>
  );
};

export default RequirementsData;
