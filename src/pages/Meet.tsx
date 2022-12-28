import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Meet.css';

const Meet: React.FC = () => {
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
        <ExploreContainer name="Meet" />
      </IonContent>
    </IonPage>
  );
};

export default Meet;
