<template>
  <ion-page>
    <Header></Header>
    <ion-content :fullscreen="true">
      <div style="padding:1rem 0.3rem;">
        <b-container>
            <b-row style="background-color: red; align-content: center;">
              <b-col>1 of 3</b-col>
              <b-col>2 of 3</b-col>
              <b-col>3 of 3</b-col>
            </b-row>
            <b-row style="background-color: yellow;">
              <b-col>1 of 3</b-col>
              <b-col>2 of 3</b-col>
              <b-col>3 of 3</b-col>
            </b-row>
        </b-container>
      </div>
    </ion-content>
    <Footer></Footer>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import Header from '@/components/header/Header.vue';
import Footer from '@/components/footer/Footer.vue';


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
</style>
