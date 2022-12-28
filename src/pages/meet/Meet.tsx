import './Meet.css';

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';

import { getPotentialMatchUser } from '../../api/UserAPI';
import UserCard from '../../components/shared/UserCard';
import User from '../../types/User';

const Meet: React.FC = () => {
  const [potentialMatchUser, setRecommendedUser] = useState<User>();

  useEffect(() => {
    featchPotentialMatch();
  }, []);

  const featchPotentialMatch = async () => {
    const result = await getPotentialMatchUser();
    setRecommendedUser(result);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Meet</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Meet</IonTitle>
          </IonToolbar>
        </IonHeader>
        {potentialMatchUser && <UserCard user={potentialMatchUser} />}
      </IonContent>
    </IonPage>
  );
};

export default Meet;
