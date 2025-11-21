<script lang="ts">
  import { asset } from "$app/paths";

  interface Speaker {
    name: string;
    company: string;
    job?: string;
    avatar?: string;
    linkedin?: string;
  }

  const { speaker } = $props<{ speaker: Speaker }>();

  let isPressed = $state(false);
</script>

{#if speaker.linkedin}
  <div
    class="flex gap-3 items-start desktop-xl:h-20 desktop-xl:items-center desktop-xl:-ml-6 desktop-xl:-mb-6 desktop-xxl:-ml-12 desktop-xxl:-mb-12"
  >
    <!-- Avatar with Link -->
    <div class="w-13 tablet:w-12 h-13 tablet:h-12 desktop-xl:h-20 desktop-xl:w-20 shrink-0">
      <a
        href={speaker.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        onmousedown={() => (isPressed = true)}
        onmouseup={() => (isPressed = false)}
        onmouseleave={() => (isPressed = false)}
        class="block w-full h-full relative group/avatar transition-transform duration-300 ease-out hover:scale-105 {isPressed ? 'scale-95' : ''}"
      >
        <div class="w-full h-full rounded-full overflow-hidden relative">
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

          <!-- Dark Overlay -->
          <div
            class="absolute inset-0 transition-all duration-300 ease-out opacity-0 group-hover/avatar:opacity-100 {isPressed ? 'bg-black/80' : 'bg-black/48'}"
          ></div>

          <!-- LinkedIn Icon -->
          <div
            class="absolute inset-0 flex items-center justify-center opacity-0 scale-0 group-hover/avatar:opacity-100 group-hover/avatar:scale-100 transition-all duration-300"
          >
            <img
              src={asset("/images/linkedin_overlay.svg")}
              alt="LinkedIn"
              class="w-6 h-6 tablet:w-7 tablet:h-7 desktop-xl:w-6 desktop-xl:h-6"
            />
          </div>
        </div>
      </a>
    </div>

    <!-- Speaker Details -->
    <div class="flex flex-col gap-0.5 desktop:gap-2 tablet:gap-0">
      <div
        class="text-[16px] desktop:text-xl desktop-xxl:text-[28px] leading-none py-1 tablet:py-0
         font-bold text-text-primary uppercase tracking-widest group-hover:text-text-on-green transition-colors duration-200 ease-in-out"
      >
        {speaker.name}
      </div>
      <div
        class="text-[13px] desktop:text-[13px] desktop-xxl:text-[16px] text-text-muted uppercase group-hover:text-text-on-green tracking-widest transition-colors duration-200 ease-in-out"
      >
        {speaker.job ? `${speaker.job}, ${speaker.company}` : speaker.company}
      </div>
    </div>
  </div>
{:else}
  <div
    class="flex gap-3 items-start desktop-xl:h-20 desktop-xl:items-center desktop-xl:-ml-6 desktop-xl:-mb-6 desktop-xxl:-ml-12 desktop-xxl:-mb-12"
  >
    <!-- Avatar -->
    <div
      class="w-13 tablet:w-12 h-13 tablet:h-12 desktop-xl:h-20 desktop-xl:w-20 rounded-full overflow-hidden shrink-0"
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
         font-bold text-text-primary uppercase tracking-widest group-hover:text-text-on-green transition-colors duration-200 ease-in-out"
      >
        {speaker.name}
      </div>
      <div
        class="text-[13px] desktop:text-[13px] desktop-xxl:text-[16px] text-text-muted uppercase group-hover:text-text-on-green tracking-widest transition-colors duration-200 ease-in-out"
      >
        {speaker.job ? `${speaker.job}, ${speaker.company}` : speaker.company}
      </div>
    </div>
  </div>
{/if}
