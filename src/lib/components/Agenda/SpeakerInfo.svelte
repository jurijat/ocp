<script lang="ts">
  import { asset } from '$app/paths';

  interface Speaker {
    name: string;
    company: string;
    avatar?: string;
  }

  const { speaker } = $props<{ speaker: Speaker }>();
</script>

<div class="flex items-center gap-3">
  <!-- Avatar -->
  <div class="w-20 h-20 rounded-full overflow-hidden shrink-0">
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
  <div class="flex flex-col gap-0.5">
    <div
      class="text-lg font-bold text-text-primary uppercase tracking-widest group-hover:text-text-on-green"
    >
      {speaker.name}
    </div>
    <div
      class="text-xs text-text-muted uppercase group-hover:text-text-on-green tracking-widest"
    >
      {speaker.company}
    </div>
  </div>
</div>
