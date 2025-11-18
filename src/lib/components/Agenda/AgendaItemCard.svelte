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
  class="bg-black border tablet:border-0 tablet:border-b p-4 tablet:p-16 flex flex-col justify-between h-full hover:bg-primary transition-colors duration-transition-base cursor-pointer group {isLastInRow
    ? ''
    : 'tablet:border-r'} border-border-primary"
>
  <!-- Time and Category -->
  <div class="flex items-center justify-between mb-6">
    <div
      class="text-xs text-white tablet:text-text-muted uppercase tracking-widest group-hover:text-text-on-green"
    >
      {item.time}
      {#if item.category}
        <span class="mx-2">/</span>
        <span>{item.category}</span>
      {/if}
    </div>
    {#if item.badge}
      <div
        class="hidden tablet:block text-xs text-text-muted uppercase tracking-widest group-hover:text-text-on-green"
      >
        {item.badge}
      </div>
    {/if}
  </div>

  <!-- Title -->
  <div
    class="text-2xl tablet:text-3xl font-bold text-primary uppercase tracking-tight leading-tight mb-4 tablet:mb-8 grow group-hover:text-text-on-green transition-colors duration-transition-base"
  >
    {item.title}
  </div>

  <!-- Bottom Section with Speakers/Badge and Icon -->
  <div class="flex items-end justify-between mt-auto">
    <!-- Speakers or Badge (mobile) -->
    <div class="flex flex-col gap-3">
      {#if item.speakers && item.speakers.length === 2}
        <div class="flex items-center">
          <div class="flex items-center -space-x-6">
            <div
              class="w-12 h-12 tablet:w-20 tablet:h-20 rounded-full overflow-hidden shrink-0 z-10 border-2 border-black"
            >
              {#if item.speakers[0].avatar}
                <img
                  src={item.speakers[0].avatar}
                  alt={item.speakers[0].name}
                  class="w-full h-full object-cover"
                />
              {:else}
                <div class="w-full h-full bg-text-muted/20"></div>
              {/if}
            </div>
            <div
              class="w-12 h-12 tablet:w-20 tablet:h-20 rounded-full overflow-hidden shrink-0 border-2 border-black transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-full"
            >
              {#if item.speakers[1].avatar}
                <img
                  src={item.speakers[1].avatar}
                  alt={item.speakers[1].name}
                  class="w-full h-full object-cover"
                />
              {:else}
                <div class="w-full h-full bg-text-muted/20"></div>
              {/if}
            </div>
          </div>
          <!-- Names stacked -->
          <div class="flex flex-col gap-0.5 ml-3">
            <div
              class="text-sm tablet:text-lg font-bold text-text-primary uppercase tracking-widest group-hover:text-text-on-green"
            >
              {item.speakers[0].name}
            </div>
            <div
              class="text-sm tablet:text-lg font-bold text-text-primary uppercase tracking-widest group-hover:text-text-on-green"
            >
              {item.speakers[1].name}
            </div>
          </div>
        </div>
      {:else if item.speakers && item.speakers.length > 0}
        {#each item.speakers as speaker}
          <SpeakerInfo {speaker} />
        {/each}
      {:else if item.badge}
        <!-- Badge shown at bottom left on mobile -->
        <div
          class="tablet:hidden text-xs text-text-muted uppercase tracking-widest group-hover:text-text-on-green"
        >
          {item.badge}
        </div>
      {/if}
    </div>

    <!-- Icon (if present) - positioned at bottom right -->
    {#if item.icon}
      <div class="flex items-end justify-end shrink-0 ml-4">
        <img src={item.icon} alt="" class="w-16 tablet:w-26 h-auto" />
      </div>
    {/if}
  </div>
</div>
