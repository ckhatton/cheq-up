<template>
  <div
    class="confirmation bg-cheq-up-green-dark h-21 rounded-lg mb-6 px-5 text-white flex flex-col justify-center"
    aria-label="Purchase Confirmation"
  >
    <h2 class="font-museo text-md mb-2">Thank you for your purchase</h2>
    <span class="font-poppins text-xs mb-1">Your order number is {{ orderNumber }}.</span>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    orderNumber?: string;
  }>(),
  {
    orderNumber: 'CHEQ-0000',
  }
);
</script>
