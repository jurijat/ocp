<script lang="ts">
  import { asset } from "$app/paths";

  interface Speaker {
    name: string;
    company: string;
    avatar?: string;
  }

  const { speaker } = $props<{ speaker: Speaker }>();
</script>

<div
  class="flex gap-3 items-start desktop-xl:h-20 desktop-xl:items-center desktop-xl:-ml-6 desktop-xl:-mb-6"
>
  <!-- Avatar -->
  <div
    class="w-13 tablet:w-10 h-13 tablet:h-10 desktop-xl:h-20 desktop-xl:w-20 rounded-full overflow-hidden shrink-0"
  >
    {#if speaker.avatar}
      <img
        src={speaker.avatar}
        alt={speaker.name}
        class="w-full h-full object-cover"
      />
    {:else}
      <div
        class="w-full h-full flex items-center justify-center bg-text-muted/20 text-text-muted text-sm font-bold"
      >
        <img
          src={asset(`/images/face_${Math.random() < 0.5 ? 1 : 2}.png`)}
          alt={speaker.name}
          class="w-full h-full object-cover"
        />
      </div>
    {/if}
  </div>

  <!-- Speaker Details -->
  <div class="flex flex-col gap-0.5 desktop:gap-2 tablet:gap-0">
    <div
      class="text-[16px] desktop:text-xl desktop-xxl:text-[28px] leading-none py-1 tablet:py-0
       font-bold text-text-primary uppercase tracking-widest group-hover:text-text-on-green transition-colors duration-transition-base"
    >
      {speaker.name}
    </div>
    <div
      class="text-[13px] desktop:text-[13px] desktop-xxl:text-[16px] text-text-muted uppercase group-hover:text-text-on-green tracking-widest transition-colors duration-transition-base"
    >
      {speaker.company}
    </div>
  </div>
</div>
