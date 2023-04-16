import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonButton, IonIcon } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import {  IonItem, IonLabel } from '@ionic/react';
import './Tab2.css';
import { openOutline } from 'ionicons/icons';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Greenwood</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Soil</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonItem>
          <IonLabel>
            <div className="ion-text-wrap">
              <div className="ion-text-center">
                Soils are an often overlooked part of agriculture that is crucial to the health of our environment. 
                Healthy soils can store up to 60% of the total carbon in the forest or garden. With the proper 
                techniques, you can make your soils healthier and the planet happier.
              </div>
            </div>
          </IonLabel>
        </IonItem>

        <IonCard>
          <IonCardTitle className="ion-text-center">Practices To Avoid</IonCardTitle>
          <IonCardContent>
            <div className="ion-text-center">
              - Tilling the soil
            </div>
            <div className="ion-text-center">
              - Applying synthetic fertilizer
            </div>
            <div className="ion-text-center">
              - Plowing
            </div>
            <div className="ion-text-center">
              - Digging
            </div>
          </IonCardContent>
        </IonCard>

        <IonItem>
          <IonLabel>
            <div className="ion-text-wrap">
              <div className="ion-text-center">
                To properly care for your soil, the most important thing you can do is leave it alone. Left alone, a 
                soil can store carbon for thousands of years. Digging in the soil can expose microbes to air 
                breaking down the carbon, which is released in the atmosphere. 
              </div>
            </div>
          </IonLabel>
        </IonItem>

        <IonCard>
          <IonTitle className="ion-text-center">To Avoid Digging</IonTitle>
          <IonCardContent>
            <div className="ion-text-center">
              1: Remove weeds and vegetation
            </div>
            <div className="ion-text-center">
              2: Apply paper up to four sheets thick and wet it
            </div>
            <div className="ion-text-center">
              3: Add a layer of organic compost or mulch around 5 cm thick
            </div>
            <div className="ion-text-center">
              4: Start planting in the mulch after about a week
            </div>
            <div className="ion-text-center">
              5: Maintain the mulch layer and remove weeds if necessary
            </div>
          </IonCardContent>
        </IonCard>

        <IonItem lines="none">
          <IonLabel>
            <div className="ion-text-wrap">
              <div className="ion-text-center">
                Additionally over the winter to prevent soil nutrient loss, a protective layer of organic material 
                around 2 cm thick should cover the soil. You can also plant clover for the winter on top of the 
                soil. Clover is a legume, and as such it fertilizes the soil. If you plant clover over the winter, your 
                soil will be much healthier in the spring.
                Planting clover, no mow grass, or native plants is a great way to cultivate healthy soils whether it 
                is a lawn or a garden.
              </div>
            </div>
            <p>&nbsp;</p>
            <div className="ion-text-wrap">
              <div className="ion-text-center">
                When considering what plants or trees would work best for your garden, use native plants. 
                Native plants are best adapted for the environment they are in and will require less watering and 
                maintenance. Some native plants are also endangered and can be preserved by planting them in 
                your garden. To find out what plants are native to your geographic region, you can look at state or 
                federal organizations or follow the links below.
                <p>&nbsp;</p>
                <IonButton color="success" href="https://www.nwf.org/Garden-for-Wildlife/About/Native-Plants" target="_blank">
                  nwf.org &nbsp;
                  <IonIcon icon={openOutline}/>
                </IonButton>
              </div>
            </div>
          </IonLabel>
        </IonItem>

      </IonContent>

    </IonPage>
  );
};

export default Tab2;
