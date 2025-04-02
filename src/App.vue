<template>
  <div class="max-w-4xl mx-auto py-8">
    <PurchaseConfirmation order-number="CHEQ-5763" />

    <Warning :steps="steps" /><!-- steps: 0, 1, 2, 3 -->

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

    <Step state="disabled" :step="2" title="Head-to-Toe Picture">
      <!-- state: 'active', 'error', 'completed', 'disabled' -->
      <p class="font-poppins text-xs mb-3">
        We ask for a recent photo that shows you from head-to-toe. The photo can be taken against a
        mirror but must show you from head-to-toe. Please wear clothing that clearly shows your body
        shape (no baggy clothes please).
      </p>
      <p class="font-poppins text-xs underline mb-1">
        Click here to see what images we will accept.
      </p>
      <p class="font-poppins text-xs underline mb-1">Why do we ask?</p>
      <div class="flex justify-start items-center mt-3">
        <div class="button input shrink-0">Choose image</div>
        <input type="file" accept="image/*" />
      </div>
      <div class="flex justify-start items-center mt-3">
        <div class="button">Upload</div>
      </div>
    </Step>

    <div class="flex justify-center items-center my-12 px-16 text-center">
      <p v-if="steps === 0" class="font-museo text-cheq-up-purple text-5xl">
        Thank you for taking the time to complete the extra steps.
      </p>
    </div>
  </div>

  <Footer />
</template>

<script setup lang="ts">
import Footer from './components/BaseFooter.vue';
import PurchaseConfirmation from './components/BasePurchaseConfirmation.vue';
import Step from './components/BaseStep.vue';
import Warning from './components/BaseWarning.vue';

import { ref } from 'vue';

const steps = ref(2); // 0, 1, 2, 3
</script>
