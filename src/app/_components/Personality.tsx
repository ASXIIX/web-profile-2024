import React from "react";
import Card from "./common/Card";
import Badge from "./common/Badge";

type Props = {};

const Personality = (props: Props) => {
  return (
    <Card title="Personality">
      <div>
        <p className="text-lg">Advocate (INFJ)</p>
        <p className="pb-2">
        is perhaps the rarest personality type. But they definitely left their mark for us to see. 
        They have ideals and principles. Supporters are not content to just take life one day at a 
        time. They want to take a stand and make a difference in the world. For this supportive 
        personality type Success doesn't come from money or status. But it comes from seeking 
        fulfillment. helping others and being a force for good in the world
        </p>
        <div className="flex gap-1">
          <Badge>INTROVERTED</Badge>
          <Badge>INTUITION</Badge>
          <Badge>FEELING</Badge>
          <Badge>JUDGING</Badge>
        </div>
      </div>
    </Card>
  );
};

export default Personality;
