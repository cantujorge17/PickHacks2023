import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonButton, IonIcon } from '@ionic/react';
import {  IonItem, IonLabel } from '@ionic/react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import './Tab3.css';
import { openOutline } from 'ionicons/icons';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center"><b>Greenwood</b></IonTitle>
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

        <IonItem lines="none">
          <IonLabel>
            <div className="ion-text-wrap">
              <div className="ion-text-center">
                There are many other habitat features to add to your garden. Those include adding brush piles, 
                avoiding pesticides, removing invasive species, replacing turf grass with native lawns, reducing 
                fertilizer, and adding water sources.
              </div>
            </div>
          </IonLabel>
        </IonItem>

        <IonGrid fixed={true}>
          <IonRow>
            <IonCol>
              <h4><b>Brush Piles</b></h4>
              <div>
                Brush piles are zero cost structures consisting of small sticks, twigs, and leaves. Many insects, small
                mammals, and birds nest in brush piles. They also provide food sources for other wildlife. Overall, 
                brush piles add to the biodiversity of your garden.
              </div>
              <div>&nbsp;</div>
              <IonButton color="success" href="https://portal.ct.gov/DEEP/Wildlife/Fact-Sheets/Brush-Piles-for-Wildlife" target="_blank">
                Information on Brush Piles &nbsp;
                <IonIcon icon={openOutline}/>
              </IonButton>
            </IonCol>
            <IonCol>
              <h4><b>Removing Invasive Species</b></h4>
              <div>
                Many species of plants that look and smell nice are harmful for ecosystems. Some of these include 
                honeysuckle, bradford pears, english ivy, and wisteria. These plants outcompete native plants in 
                your garden and can spread to neighboring areas, leading to a loss in biodiversity. To learn more, 
                click the link below.
              </div>
              <div>&nbsp;</div>
              <IonButton color="success" href="https://www.invasivespeciesinfo.gov/" target="_blank">
                National Invasive Species Information Center &nbsp;
                <IonIcon icon={openOutline}/>
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
            <h4><b>Reducing Fertilizer</b></h4>
              <div>
                Synthetic fertilizer not only requires large amounts of electricity to produce and is a major 
                contributor to greenhouse gasses, but it is harmful for soil ecosystems and can release more soil CO2 
                into the environment than the plants can consume. Some alternatives to synthetic mulch are natural mulch, organic 
                material, and compost. Compost is food waste that decomposes into organic matter. Leftover 
                food contributes to methane emissions in landfills, but recycling it in your garden is an effective 
                way to tackle food waste and climate change at once.
              </div>
              <div>&nbsp;</div>
              <IonButton color="success" href="https://www.epa.gov/recycle/composting-home#whatcom" target="_blank">
              Composting at home &nbsp;
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
