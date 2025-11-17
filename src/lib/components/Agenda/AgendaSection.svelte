<script lang="ts">
  const { title, timeRange } = $props<{ title: string; timeRange?: string }>();
</script>

<div
  class="w-full pt-16 px-16 pb-10 flex items-center justify-between border-t border-b border-border-primary"
>
  <h2 class="text-5xl font-bold text-text-primary uppercase tracking-wide">
    {title}
  </h2>
  {#if timeRange}
    <div class="text-sm text-text-muted uppercase tracking-widest">
      {timeRange}
    </div>
  {/if}
</div>
