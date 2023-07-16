<template>
  <ion-page>
    <Header></Header>
    <ion-content :fullscreen="true">
      <div style="padding:1rem 0.3rem;">
        <ion-grid>
          <ion-row class="row__style">
            <ion-col>
              <div class="item__button__layer">
                <button class="item__button" @click="tempFnc">
                  <div class="item__container">
                    <font-awesome-icon :icon="['fas', 'truck-ramp-box']" class="item__icon" />
                    <label class="item__title">입고</label>
                  </div>
                </button>
              </div>
            </ion-col>
            <ion-col>
              <div class="item__button__layer">
                <button class="item__button">
                  <div class="item__container">
                    <font-awesome-icon :icon="['fas', 'truck']" class="item__icon" />
                    <label class="item__title">출고</label>
                  </div>
                </button>
              </div>
            </ion-col>
            <ion-col>
              <div class="item__button__layer">
                <button class="item__button">
                  <div class="item__container">
                    <font-awesome-icon :icon="['fas', 'box-open']" class="item__icon" />
                    <label class="item__title">재고</label>
                  </div>
                </button>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
    <Footer></Footer>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonItem, IonGrid, IonRow, IonCol, IonButton } from '@ionic/vue';
import Header from '@/components/header/Header.vue';
import Footer from '@/components/footer/Footer.vue';

const tempFnc: any = () => {
  console.log(`click..`);
}

</script>

<style scoped>

#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}

.item__button__layer {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.row__style {
  background-color: transparent;
  align-content: center;
}

/* Button */

.item__button {
  border: 2px solid black;
  border-radius: 10px;
  background-color: #C5DFF8;
  box-shadow: 1px 1px 1px 1px gray;

  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
  background-image: linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673);
  box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
}

.item__button:hover {
    background-position: 100% 0;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}

.item__button:focus {
    outline: none;
}

.item__container {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  min-width: 67px;
  min-height: 50px;
  margin: 0.2rem;
  padding: 0.2rem;
  background-color: inherit;
  background-image: inherit;
  color: black;
}

.item__title {
  font-size: small;
  margin-top: 2px;
  font-weight: bold;
}

.item__icon {
  font-size: 1.5rem;
  background-color: transparent;
}

</style>
