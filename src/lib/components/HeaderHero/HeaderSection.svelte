<script lang="ts">
  type IconType = "arrow-down" | "plus";

  const {
    title,
    iconType = "arrow-down",
    href = "#",
  } = $props<{
    title: string;
    iconType?: IconType;
    href?: string;
  }>();
</script>

<section
  class="p-4 desktop:p-16 flex flex-row flex-nowrap py-8 tablet:py-12 tablet:h-32 desktop-xl:h-64 items-center bg-black"
>
  <!-- Left Content Container -->
  <div class="flex w-full tablet:w-9/10 flex-col gap-x-10">
    <!-- Section Title -->
    <div class="flex flex-col gap-y-4">
      <h1
        class="text-4xl tablet:text-5xl tablet:pt-4 desktop-xl:text-9xl uppercase font-bold text-white tracking-tighter"
      >
        {title}
      </h1>
    </div>
  </div>
  <div class="flex w-2/10 tablet:w-1/10 items-center justify-end">
    <div
      class="w-10 h-10 tablet:w-16 tablet:h-16 desktop-xl:w-24 desktop-xl:h-24 bg-black rounded-full flex items-center justify-center border border-primary-green-muted hover:border-primary-dark transition-colors duration-200"
    >
      {#if iconType === "arrow-down"}
        <!-- Arrow Down Icon -->
        <svg
          class="w-5 h-5 tablet:w-5 tablet:h-5 desktop-xl:w-7 desktop-xl:h-7 text-primary-green-muted"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M5 8h14l-7 11z" />
        </svg>
      {:else if iconType === "plus"}
        <!-- Plus Icon -->
        <svg
          class="w-5 h-5 tablet:w-5 tablet:h-5 desktop-xl:w-7 desktop-xl:h-7 text-primary-green-muted"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      {/if}
    </div>
  </div>
</section>
