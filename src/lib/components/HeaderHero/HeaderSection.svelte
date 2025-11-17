<script lang="ts">
  type IconType = "arrow-down" | "plus";

  const { title, iconType = "arrow-down" } = $props<{
    title: string;
    iconType?: IconType;
  }>();
</script>

<section class="p-16 flex flex-row flex-nowrap h-64 items-center bg-black">
  <!-- Left Content Container (2/3) -->
  <div class="flex w-9/10 flex-col gap-x-10">
    <!-- Section Title -->
    <div class="flex flex-col gap-y-4">
      <h1 class="text-9xl uppercase font-bold text-white tracking-wide">
        {title}
      </h1>
    </div>
  </div>
  <div class="flex w-1/10 items-center justify-end">
    <div
      class="w-24 h-24 bg-black rounded-full flex items-center justify-center border border-primary-green-muted cursor-pointer hover:border-primary-dark transition-colors duration-200"
    >
      {#if iconType === "arrow-down"}
        <!-- Arrow Down Icon -->
        <svg
          class="w-7 h-7 text-primary-green-muted"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M5 8h14l-7 11z" />
        </svg>
      {:else if iconType === "plus"}
        <!-- Plus Icon -->
        <svg
          class="w-7 h-7 text-primary-green-muted"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      {/if}
    </div>
  </div>
</section>
