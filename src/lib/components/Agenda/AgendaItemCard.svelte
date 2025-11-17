<script lang="ts">
  import SpeakerInfo from "./SpeakerInfo.svelte";

  interface Speaker {
    name: string;
    company: string;
    avatar?: string;
  }

  interface AgendaItem {
    id: string;
    time: string;
    category: string;
    title: string;
    speakers?: Speaker[];
    badge?: string;
    icon?: string;
  }

  const { item, isLastInRow = false } = $props<{
    item: AgendaItem;
    isLastInRow?: boolean;
  }>();
</script>

<div
  class="bg-black border-b p-16 flex flex-col justify-between h-full hover:bg-primary transition-colors duration-transition-base cursor-pointer group {isLastInRow
    ? ''
    : 'border-r'} border-border-primary"
>
  <!-- Time and Category -->
  <div class="flex items-center justify-between mb-6">
    <div
      class="text-xs text-text-muted uppercase tracking-widest group-hover:text-text-on-green"
    >
      {item.time}
      {#if item.category}
        <span class="mx-2">/</span>
        <span>{item.category}</span>
      {/if}
    </div>
    {#if item.badge}
      <div
        class="text-xs text-text-muted uppercase tracking-widest group-hover:text-text-on-green"
      >
        {item.badge}
      </div>
    {/if}
  </div>

  <!-- Title -->
  <h2
    class="text-5xl font-bold text-primary uppercase tracking-tight leading-tight mb-8 grow group-hover:text-text-on-green transition-colors duration-transition-base"
  >
    {item.title}
  </h2>

  <!-- Bottom Section with Speakers and Icon -->
  <div class="flex items-end justify-between mt-auto">
    <!-- Speakers -->
    {#if item.speakers && item.speakers.length > 0}
      <div class="flex flex-col gap-3">
        {#each item.speakers as speaker}
          <SpeakerInfo {speaker} />
        {/each}
      </div>
    {/if}

    <!-- Icon (if present) - positioned at bottom right -->
    {#if item.icon}
      <div class="flex items-end justify-end shrink-0 ml-4">
        <img src={item.icon} alt="" class="w-26 h-auto" />
      </div>
    {/if}
  </div>
</div>
