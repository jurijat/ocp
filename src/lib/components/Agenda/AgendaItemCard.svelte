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

  const {
    item,
    isLastInRow = false,
    disableHover = false,
  } = $props<{
    item: AgendaItem;
    isLastInRow?: boolean;
    disableHover?: boolean;
  }>();
</script>

<div
  class="bg-black border-b tablet:border-0 tablet:border-b py-8 px-4 tablet:p-4 desktop:p-16 flex flex-col justify-between h-full transition-colors duration-transition-base {disableHover
    ? ''
    : 'hover:bg-primary group'} {isLastInRow
    ? ''
    : 'tablet:border-r'} border-border-primary"
>
  <!-- Time and Category -->
  <div class="flex items-center justify-between mb-2">
    <div
      class="text-xs text-white tablet:text-text-muted desktop:text-xl uppercase tracking-widest group-hover:text-text-on-green transition-colors duration-transition-base"
    >
      {item.time}
      {#if item.category}
        <span class="mx-3 text-text-muted">/</span>
        <span class="text-primary group-hover:text-text-on-green font-medium"
          >{item.category}</span
        >
      {/if}
    </div>
    {#if item.badge}
      <div
        class="hidden tablet:block text-xs text-text-muted desktop:text-xl uppercase tracking-widest group-hover:text-text-on-green transition-colors duration-transition-base"
      >
        {item.badge}
      </div>
    {/if}
  </div>

  <!-- Title -->
  <div
    class="text-2xl desktop-xl:text-5xl font-bold text-primary uppercase tracking-tight leading-tight mb-8 tablet:mb-8 grow group-hover:text-text-on-green transition-colors duration-transition-base desktop:text-[clamp(32px,2vw+16px,48px)]"
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
              class="w-12 h-12 tablet:w-12 tablet:h-12 desktop-xl:w-12 desktop-xl:h-12 rounded-full overflow-hidden shrink-0 z-10"
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
              class="w-12 h-12 tablet:w-12 tablet:h-12 desktop-xl:w-12 desktop-xl:h-12 rounded-full overflow-hidden shrink-0 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-full"
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
          <div class="flex flex-col gap-0.5 ml-3 leading-sm">
            <div
              class="text-sm tablet:text-lg desktop:text-xl font-bold text-text-primary uppercase tracking-widest group-hover:text-text-on-green transition-colors duration-transition-base"
            >
              {item.speakers[0].name}
            </div>
            <div
              class="text-sm tablet:text-lg desktop:text-xl font-bold text-text-primary uppercase tracking-widest group-hover:text-text-on-green transition-colors duration-transition-base"
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
          class="tablet:hidden text-xs text-text-muted desktop:text-xl uppercase tracking-widest group-hover:text-text-on-green transition-colors duration-transition-base"
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
