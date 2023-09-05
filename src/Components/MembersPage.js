import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

export default function MembersPage(props) {
  const { memberData, editMember } = props;
  return (
    <div>
      <div className="member-container">
        {memberData.map((member) => (
          <Card>
            <img src={member.img} />
            <CardBody>
              <CardTitle>
                {member.name}
                {member.surname}
              </CardTitle>
              <CardSubtitle>{member.role}</CardSubtitle>
              <CardText>{member.email}</CardText>
              <Button onClick={() => editMember(member)}>Edit</Button>
            </CardBody>
          </Card>
        ))}
      </div>
      <button onClick={() => {}}>ADD NEW MEMBER</button>
    </div>
  );
}
