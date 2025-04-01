<template>
  <div
    v-if="steps > 0"
    class="warning border-2 border-cheq-up-yellow rounded-lg mb-6 pl-4 pr-5 py-5 flex"
    aria-label="Warning"
  >
    <div class="flex flex-row justify-start items-center">
      <div>
        <img src="../assets/images/triangleExclamationSolid.svg" alt="Warning" class="mr-4" />
      </div>
      <div class="flex flex-col justify-center">
        <h2 class="font-museo text-md mb-2">There is still more to do...</h2>
        <span class="font-poppins text-xs mb-1"
          >There is {{ stepText }} more {{ steps > 1 ? 'steps' : 'step' }} we need you to do before
          we can continue with your order.</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    steps?: number;
  }>(),
  {
    steps: 2,
  }
);

const stepText = computed<string>(() => {
  return (
    {
      1: 'ONE',
      2: 'TWO',
    }[props.steps] ?? 'TWO'
  );
});
</script>
