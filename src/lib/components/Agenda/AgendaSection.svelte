<script lang="ts">
  const { title, timeRange } = $props<{ title: string; timeRange?: string }>();
</script>

<div
  class="w-full pt-12 tablet:pt-16 px-4 desktop:px-16 pb-6 tablet:pb-10 flex flex-col tablet:flex-row tablet:items-center tablet:justify-between border-t border-b border-border-primary gap-2.5 tablet:gap-0"
>
  <div
    class="text-3xl tablet:text-4xl desktop-xl:text-6xl font-bold text-text-primary uppercase tracking-wide"
  >
    {title}
  </div>
  {#if timeRange}
    <div class="text-sm text-text-muted uppercase tracking-widest leading-none">
      {timeRange}
    </div>
  {/if}
</div>
