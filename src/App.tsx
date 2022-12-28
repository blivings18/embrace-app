import './theme/variables.css';
import '@ionic/react/css/core.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/typography.css';

import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { chatbox, people, settings } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';

import Explore from './pages/Meet';
import Messages from './pages/Messages';
import Settings from './pages/Settings';

/* Core CSS required for Ionic components to work properly */
/* Basic CSS for apps built with Ionic */
/* Optional CSS utils that can be commented out */
/* Theme variables */
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/meet">
            <Explore />
          </Route>
          <Route exact path="/messages">
            <Messages />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route exact path="/">
            <Redirect to="/explore" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="meet" href="/meet">
            <IonIcon icon={people} />
            <IonLabel>Meet</IonLabel>
          </IonTabButton>
          <IonTabButton tab="messages" href="/messages">
            <IonIcon icon={chatbox} />
            <IonLabel>Messages</IonLabel>
          </IonTabButton>
          <IonTabButton tab="settings" href="/settings">
            <IonIcon icon={settings} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
