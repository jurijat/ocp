<script lang="ts">
  const { title, timeRange, activeBorder } = $props<{
    title: string;
    timeRange?: string;
    activeBorder?: boolean;
  }>();
</script>

<div
  class="w-full pt-12 desktop:pt-16 px-4 desktop:px-16 pb-6 desktop:pb-10 desktop-xxl:px-24 flex flex-col desktop:flex-row desktop:items-center desktop:justify-between border-b border-border-primary gap-2.5 desktop:gap-0"
  class:border-t={activeBorder}
>
  <div
    class="text-3xl tablet:text-4xl desktop-xxl:text-6xl font-bold text-text-primary uppercase tracking-wide"
  >
    {title}
  </div>
  {#if timeRange}
    <div class="text-sm text-text-muted uppercase tracking-widest leading-none">
      {timeRange}
    </div>
  {/if}
</div>
