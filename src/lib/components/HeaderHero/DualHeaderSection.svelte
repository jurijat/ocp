<script lang="ts">
  type IconType = "arrow-down" | "plus";
  type BackgroundColor = "white" | "black";

  const {
    title,
    subtitle,
    backgroundColor = "white",
    imageUrl,
    iconType,
    imageAlt = "",
  } = $props<{
    title: string;
    subtitle?: string;
    backgroundColor?: BackgroundColor;
    imageUrl?: string;
    iconType?: IconType;
    imageAlt?: string;
  }>();

  // Determine text colors based on background
  const textColor =
    backgroundColor === "white" ? "text-text-on-green" : "text-text-primary";
  const subtitleColor =
    backgroundColor === "white" ? "text-text-muted" : "text-text-secondary";
  const bgClass = backgroundColor === "white" ? "bg-white" : "bg-black";
</script>

<!-- Outer container with mobile padding -->
<div class="px-4 tablet:px-0 mt-10 tablet:mt-0 mb-2">
  <section
    class="group p-4 tablet:p-16 flex flex-col tablet:flex-row h-[181px] tablet:h-[210px] items-center justify-center tablet:justify-between rounded-2xl tablet:rounded-none {bgClass} hover:bg-primary transition-colors duration-300 cursor-pointer"
  >
    <!-- Title and Subtitle -->
    <div
      class="flex flex-col gap-y-1 tablet:gap-y-4 text-center tablet:text-left"
    >
      <div
        class="text-2xl tablet:text-4xl uppercase font-bold {textColor} tracking-wide transition-colors duration-300 group-hover:text-text-on-green"
      >
        {title}
      </div>
      {#if subtitle}
        <span
          class="text-sm tablet:text-lg tracking-widest {subtitleColor} uppercase font-bold transition-colors duration-300 group-hover:text-text-on-green"
        >
          {subtitle}
        </span>
      {/if}
    </div>

    <!-- Logo/Icon -->
    <div class="flex items-center justify-center mt-3 tablet:mt-0">
      {#if imageUrl}
        <!-- Image Display -->
        <img
          src={imageUrl}
          alt={imageAlt}
          class="h-8 w-24 tablet:h-20 tablet:w-40"
        />
      {:else if iconType}
        <!-- Icon Display -->
        <div
          class="w-16 h-16 tablet:w-24 tablet:h-24 bg-black rounded-full flex items-center justify-center border cursor-pointer hover:border-primary-dark transition-colors duration-200"
        >
          {#if iconType === "arrow-down"}
            <!-- Arrow Down Icon -->
            <svg
              class="w-5 h-5 tablet:w-7 tablet:h-7 text-primary-green-muted"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M5 8h14l-7 11z" />
            </svg>
          {:else if iconType === "plus"}
            <!-- Plus Icon -->
            <svg
              class="w-8 h-8 tablet:w-10 tablet:h-10 text-primary font-black"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          {/if}
        </div>
      {/if}
    </div>
  </section>
</div>
