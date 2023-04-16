import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonButton, IonIcon } from '@ionic/react';
import { IonCard, IonCardContent, IonCardTitle } from '@ionic/react';
import {  IonItem, IonLabel } from '@ionic/react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import './Tab3.css';
import { openOutline } from 'ionicons/icons';

const Tab3: React.FC = () => {
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
            <IonTitle size="large">Wildlife</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonItem lines="none">
          <IonLabel>
            <div className="ion-text-wrap">
              <div className="ion-text-center">
                Due to human activities, there are many species of birds, bats, bees, and butterflies that are 
                endangered or threatened. Turning your garden into a habitat for these species can help take them 
                off the endangered species list and help them thrive for many years to come.
              </div>
            </div>
          </IonLabel>
        </IonItem>

        <IonGrid fixed={true}>
          <IonRow>
            <IonCol>
              <h4><b>Birds</b></h4>
              <div>
                Making a habitat for birds can be as simple as adding bird houses. However many species of 
                endangered birds require specialized infrastructure and food. For example:
                Hummingbirds feed on red and orange flowers with ample supplies of nectar.
                Some plants that attract and support hummingbirds are agastache, cardinal flowers, coral 
                bells, four o'clocks, lantana, salvia, petunias and more.
              </div>
              <div>&nbsp;</div>
              <IonButton color="success" href="https://www.thespruce.com/plants-that-attract-hummingbirds-1402212" target="_blank">
                Plants that attract hummingbirds &nbsp;
                <IonIcon icon={openOutline}/>
              </IonButton>
            </IonCol>
            <IonCol>
              <h4><b>Bats</b></h4>
              <div>
                Bats not only kill harmful insects, but are also pollinators. Bats can be supported through 
                specialized bat houses and bat friendly water sources, food sources specific to regional bats, 
                keeping pets indoors at night, and turning off outdoor lights at night.
              </div>
              <div>&nbsp;</div>
              <IonButton color="success" href="https://www.buckinghamshirelandscapegardeners.com/news/how-to-make-your-garden-bat-friendly" target="_blank">
                Making a bat friendly garden &nbsp;
                <IonIcon icon={openOutline}/>
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <h4><b>Bees</b></h4>
              <div>
                Solitary and native bees are just as important for the enviroment as honeybees.
                Many of them are also threatened and to make matters worse, the specific plants 
                they pollinate are also endangered. To make your garden suitable for bees, install 
                bee houses and plant native plants specific to native bees in your area.
              </div>
              <div>&nbsp;</div>
              <IonButton color="success" href="https://modernfarmer.com/2017/02/build-native-bee-hotel/" target="_blank">
                How to build a native bee hotel &nbsp;
                <IonIcon icon={openOutline}/>
              </IonButton>
            </IonCol>
            <IonCol>
              <h4><b>Butterflies</b></h4>
              <div>
                Monarch butterflies have unfortunately been listed as endangered since 2020. 
                To support monarch population you can plant yarrow and milkweed plants in your garden. Just 
                remember a structured garden works many times better than scattered plants.
              </div>
              <div>&nbsp;</div>
              <IonButton color="success" href="https://herebydesign.net/how-to-build-the-perfect-monarch-butterfly-garden/" target="_blank">
                How to build a butterfly garden &nbsp;
                <IonIcon icon={openOutline}/>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
