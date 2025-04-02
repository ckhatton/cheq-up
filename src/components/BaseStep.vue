<template>
  <div
    :class="[stepStateColour]"
    class="step rounded-lg mb-6 pl-4 pr-8 py-5 flex"
    :aria-label="ariaLabel"
  >
    <div class="flex flex-row justify-start">
      <div>
        <div
          :class="[stepNumberStateColour]"
          class="step-number rounded-full w-16 h-16 mr-4 font-museo text-4xl flex items-center justify-center"
        >
          {{ step }}
        </div>
      </div>
      <div class="flex flex-col justify-center">
        <h2
          :class="{ 'text-white': state === 'completed' }"
          class="step-title font-museo text-md mb-2"
        >
          {{ fullTitle }}
        </h2>
        <slot v-if="state !== 'completed'"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    state: string;
    step?: number;
    title: string;
  }>(),
  {
    state: 'disabled',
    step: 1,
  }
);

const ariaLabel = computed(() => {
  return (
    `Step ${props.step}` +
    ({
      active: ' active',
      error: ' error',
      completed: ' completed',
      disabled: ' disabled',
    }[props.state] ?? ' disabled')
  );
});

const stepStateColour = computed<string>(() => {
  return (
    {
      active: 'border-2 border-cheq-up-green-dark',
      error: 'border-2 border-cheq-up-red',
      completed: 'bg-cheq-up-green-dark',
      disabled: 'disabled border-2 border-cheq-up-grey-light',
    }[props.state] ?? 'border-cheq-up-grey-light'
  );
});

const stepNumberStateColour = computed<string>(() => {
  return (
    {
      completed: 'bg-cheq-up-green-light text-cheq-up-green-dark',
      disabled: 'bg-cheq-up-grey-light text-white',
    }[props.state] ?? 'bg-cheq-up-green-dark text-white'
  );
});

const fullTitle = computed(() => {
  return props.title + (props.state === 'completed' ? ' Complete' : '');
});
</script>
