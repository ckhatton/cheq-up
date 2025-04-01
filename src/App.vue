<template>
  <div class="max-w-4xl mx-auto py-8">
    <PurchaseConfirmation />
    <Warning />
  </div>
  <Footer />
</template>

<script setup lang="ts">
import PurchaseConfirmation from './components/BasePurchaseConfirmation.vue';
import Footer from './components/BaseFooter.vue';
import Warning from './components/BaseWarning.vue';
</script>
