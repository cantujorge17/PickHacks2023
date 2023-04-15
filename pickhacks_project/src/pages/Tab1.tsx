import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import {  IonItem, IonLabel } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <div className="ion-text-center">
              CO2 Removal
            </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">CO2 Removal</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonItem>
          <IonLabel>
            <div className="ion-text-wrap">
              <div className="ion-text-center">
                Planting trees is the focus of many environmental efforts, but few discuss the environmental
                impact of planting techniques. Many species of trees store little carbon and some live too short to 
                make a difference. With the CUFR tree carbon calculator provided by the department of 
                agriculture, you can evaluate the impact of each tree you plant.
              </div>
            </div>
          </IonLabel>
        </IonItem>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>--Card Title--</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <p>I made a paragraph</p>
            <p>Graphic design is my passion</p>
          </IonCardContent>
        </IonCard>
      </IonContent>

      <IonFooter className='ion-padding'>
        test
      </IonFooter>

    </IonPage>
  );
};

export default Tab1;
