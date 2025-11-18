<script lang="ts">
  const { title, timeRange } = $props<{ title: string; timeRange?: string }>();
</script>

<div
  class="w-full pt-8 tablet:pt-16 px-4 tablet:px-16 pb-6 tablet:pb-10 flex flex-col tablet:flex-row tablet:items-center tablet:justify-between border-t border-b border-border-primary gap-2 tablet:gap-0"
>
  <div
    class="text-3xl tablet:text-4xl font-bold text-text-primary uppercase tracking-wide"
  >
    {title}
  </div>
  {#if timeRange}
    <div class="text-sm text-text-muted uppercase tracking-widest">
      {timeRange}
    </div>
  {/if}
</div>
