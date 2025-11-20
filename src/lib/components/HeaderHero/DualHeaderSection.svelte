<script lang="ts">
  import { asset } from "$app/paths";

  type IconType = "arrow-down" | "plus";
  type BackgroundColor = "white" | "black";

  const {
    title,
    subtitle,
    backgroundColor = "white",
    imageUrl,
    iconType,
    imageAlt = "",
    href,
  } = $props<{
    title: string;
    subtitle?: string;
    backgroundColor?: BackgroundColor;
    imageUrl?: string;
    iconType?: IconType;
    imageAlt?: string;
    href?: string;
  }>();

  // Determine text colors based on background
  const textColor =
    backgroundColor === "white" ? "text-text-on-green" : "text-text-primary";
  const subtitleColor =
    backgroundColor === "white" ? "text-text-muted" : "text-text-secondary";
  const bgClass = backgroundColor === "white" ? "bg-white" : "bg-black";
</script>

<!-- Outer container with mobile padding -->
<div class="px-2 tablet:px-0 mt-10 tablet:mt-0 mb-2">
  <a
    {href}
    target="_blank"
    rel="noopener noreferrer"
    class="group {bgClass} p-4 tablet:p-4 desktop:p-8 desktop:px-16 desktop-xxl:px-24 flex flex-col tablet:flex-row h-[181px] tablet:h-[104px] desktop:h-[210px] desktop-xxl:h-[280px] items-center justify-center tablet:justify-between rounded-4xl tablet:rounded-none cursor-pointer"
    style="transition: background-color 200ms ease-in-out;"
    onmouseenter={(e) =>
      (e.currentTarget.style.backgroundColor = "var(--color-primary)")}
    onmouseleave={(e) => (e.currentTarget.style.backgroundColor = "")}
    onmousedown={(e) =>
      (e.currentTarget.style.backgroundColor =
        "var(--color-primary-green-dark)")}
    onmouseup={(e) =>
      (e.currentTarget.style.backgroundColor = "var(--color-primary)")}
  >
    <!-- Title and Subtitle -->
    <div
      class="flex flex-col gap-y-1 tablet:gap-y-1 text-center tablet:text-left"
    >
      <div
        class="text-2xl desktop:text-[44px] desktop-xxl:text-7xl uppercase font-bold {textColor} tracking-wide transition-colors duration-200 ease-in-out group-hover:text-text-on-green"
      >
        {title}
      </div>
      {#if subtitle}
        <span
          class="text-sm tablet:text-md desktop:text-xl desktop-xxl:text-2xl tracking-widest {subtitleColor} uppercase font-bold transition-colors duration-200 ease-in-out group-hover:text-text-on-green"
        >
          {subtitle}
        </span>
      {/if}
    </div>

    <!-- Logo/Icon -->
    <div
      class="flex items-center justify-center mt-3 tablet:mt-0 pt-4 tablet:pt-0"
    >
      {#if imageUrl}
        <!-- Image Display -->
        <img
          src={imageUrl}
          alt={imageAlt}
          class="h-[33px] w-[100px] tablet:h-14 tablet:w-30 desktop:h-24 desktop:w-50 desktop-xxl:w-70"
        />
      {:else if iconType}
        <!-- Icon Display -->
        <div
          class="w-12 h-12 tablet:w-12 tablet:h-12 desktop:w-24 desktop:h-24 bg-black rounded-full flex items-center justify-center border cursor-pointer hover:border-primary-dark transition-colors duration-300"
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
            <img
              class="w-4 h-4 tablet:w-5 tablet:h-5 text-primary font-black"
              src={asset("/images/plus.svg")}
              alt="Plus icon"
            />
          {/if}
        </div>
      {/if}
    </div>
  </a>
</div>
