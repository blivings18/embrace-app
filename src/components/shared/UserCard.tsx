import { IonCard, IonCardHeader } from "@ionic/react";
import React from "react";
import styled from "styled-components";
import User from "../../types/User"

type UserCardProps = {
  user: User
};

const StyledIonCard = styled(IonCard)`
  height: 70vh;
`;

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
      <StyledIonCard>
        <IonCardHeader>
          {user.name}
        </IonCardHeader>
      </StyledIonCard>
  );
}

export default UserCard;
