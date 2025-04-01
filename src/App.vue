<template>
  <div class="max-w-4xl mx-auto py-8">
    <PurchaseConfirmation order-number="CHEQ-5763" />

    <Warning :steps="3" /><!-- steps: 0, 1, 2, 3 -->

    <Step state="active" :step="1" title="ID Verification">
      <!-- state: 'active', 'error', 'completed', 'disabled' -->
      <p class="font-poppins text-xs mb-1">
        To comply with UK medicines regulations, we need to confirm the identity of all our clients
        - this includes verifying your ID and your current height and weight. This information is
        for prescribing purposes only.
      </p>
      <div class="flex justify-start items-center mt-2">
        <div class="button mr-4">Verify</div>
        <span class="font-poppins text-xs font-bold">Verification ID with Persona</span>
      </div>
    </Step>
  </div>

  <Footer />
</template>

<script setup lang="ts">
import Footer from './components/BaseFooter.vue';
import PurchaseConfirmation from './components/BasePurchaseConfirmation.vue';
import Step from './components/BaseStep.vue';
import Warning from './components/BaseWarning.vue';
</script>
