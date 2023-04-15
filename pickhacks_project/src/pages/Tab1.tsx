import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonButton, IonIcon } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import {  IonItem, IonLabel } from '@ionic/react';
import './Tab1.css';
import { cloudDownloadOutline } from 'ionicons/icons';

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
            <IonCardTitle className="ion-text-center">CUFR Tree Carbon Calculator</IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="ion-text-center">
            <IonButton color="success" href="https://www.fs.usda.gov/ccrc/tool/cufr-tree-carbon-calculator-ctcc">
              click here to open Carbon Calculator 
            </IonButton>
            <IonButton color="success" href="https://drive.google.com/drive/folders/1PmwXa6yMfFY1frfOA8UiNYiZdM7eHlMB?usp=share_link">
              click here to open Help Folder
            </IonButton>
          </IonCardContent>
        </IonCard>

        <IonItem>
          <IonLabel>
            <div className="ion-text-wrap">
              <div className="ion-text-center">
                Planting trees helps the environment but planting forests is much more beneficial. While most 
                people do not have space for forests or small woodland areas, they are extremely effective carbon 
                sinks. One hectare can remove up to 40 tons of CO2 every year.
                If planted right, these areas can greatly benefit the surrounding environment and can remove 
                large amounts of CO2. Some things to consider are that soils and the forest floor store 60% of all 
                CO2 in the forest. Native trees function far better than their non native counterparts. Using 
                synthetic fertilizers are harmful for the forest area as a whole.
              </div>
            </div>
          </IonLabel>
        </IonItem>

      </IonContent>

      <IonFooter className='ion-padding'>
        test
      </IonFooter>

    </IonPage>
  );
};

export default Tab1;
