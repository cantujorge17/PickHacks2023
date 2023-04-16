import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonButton, IonIcon } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import {  IonItem, IonLabel } from '@ionic/react';
import './Tab1.css';
import { openOutline, logoLinkedin } from 'ionicons/icons';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center"><b>Greenwood</b></IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
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
            <IonButton color="success" href="https://www.fs.usda.gov/ccrc/tool/cufr-tree-carbon-calculator-ctcc" target="_blank">  
              Click Here To Open Carbon Calculator &nbsp;
              <IonIcon icon={openOutline} />
            </IonButton>
            <IonButton color="success" href="https://drive.google.com/drive/folders/1PmwXa6yMfFY1frfOA8UiNYiZdM7eHlMB?usp=share_link" target="_blank">
              Click Here To Open Help Files &nbsp; 
              <IonIcon icon={openOutline} />
            </IonButton>
          </IonCardContent>
        </IonCard>

        <IonItem lines="none">
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

        <IonItem lines="none">
          <IonLabel>
            <div className="ion-text-wrap">
              <div className="ion-text-center">
                Planting trees in the right areas can also reduce building energy costs. Since trees store large 
                quantities of water, they cool the surrounding areas by several degrees through evaporative 
                cooling. Additionally, trees planted south, east and west can reduce air conditioning in the 
                summer while evergreens planted in the north can reduce energy consumption in the winter by 
                acting as windbreaks. Planting trees accordingly can help buildings reduce their electricity 
                consumption and become more efficient.
              </div>
            </div>
            <p>&nbsp;</p>
            <div className="ion-text-center">
                <img alt="TreePlanting" src="src/assets/TreePlacement.png" width="300" height="500"/>
            </div>
          </IonLabel>
        </IonItem>

        <IonFooter>
          <IonToolbar className="ion-text-center">
            Project created by &nbsp;
            <a href = "https://www.linkedin.com/in/jorge-cantu-677ab8271?trk=people-guest_people_search-card" target="_blank">
              Jorge Cantu &nbsp;
              <IonIcon icon={logoLinkedin}/>
            </a> &nbsp; and &nbsp;
            <a href="https://www.linkedin.com/in/alexander-saigh-399001238" target="_blank">
              Alexander Saigh &nbsp;
              <IonIcon icon={logoLinkedin}/>
            </a>
          </IonToolbar>
        </IonFooter>

      </IonContent>

    </IonPage>
  );
};

export default Tab1;
