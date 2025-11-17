<script lang="ts">
</script>

<header
  class="p-spacing-xl flex flex-row flex-nowrap gap-spacing-lg gap-y-10 h-[1117px] bg-bg-dark text-text-primary"
>
  <!-- Left Content Container (2/3) -->
  <div
    class="flex w-2/3 flex-col gap-y-11 gap-x-10 p-10 border-amber-200 border"
  >
    <!-- Logos Section -->
    <div class="h-16 flex flex-row w-full justify-between">
      <div
        class="w-[243px] h-[64px] flex items-center justify-center text-text-muted text-sm"
      >
        <img
          src="/images/openapi_con_logo.svg"
          alt="OpenAPI Conference Logo"
          class="w-[243px] h-[64px]"
        />
      </div>
      <div
        class="w-20 h-[64px] flex items-center justify-center text-text-muted text-sm"
      >
        <img
          src="/images/img_hosted_by_fost.png"
          alt="Hosted by Fost Logo"
          class="w-20 h-[16px]"
        />
      </div>
    </div>

    <!-- Title Section -->
    <div class="flex flex-col">
      <h1 class="text-5xl font-bold">
        <span class="text-primary">OPENAPI</span>
        <span class="text-text-primary">CONFERENCE IN</span>
        <span class="text-text-primary">PARIS</span>
      </h1>
    </div>

    <!-- Decorative Line -->
    <div class="w-full h-px bg-primary-green-dark my-spacing-md"></div>

    <!-- Subtitle with Date and Calendar -->
    <div class="flex items-center justify-between gap-spacing-lg">
      <div
        class="text-sm tracking-widest font-bold text-text-primary uppercase"
      >
        11 December, 2025
      </div>
      <button
        class="text-sm transition-colors duration-transition-fast uppercase text-primary-green-muted px-4 py-2 rounded-md hover:bg-primary hover:text-text-on-green"
      >
        + Add to calendar
      </button>
    </div>

    <!-- Register Button -->
    <div
      class="bg-primary rounded-[56px] flex px-9 items-center h-24 w-full hover:bg-primary-dark text-text-on-green font-semibold text-4xl uppercase px-spacing-2xl py-spacing-md transition-colors duration-transition-base mt-spacing-xl shadow-md hover:shadow-lg"
    >
      <span>Register Now</span>
      <div>Play icon with round background</div>
    </div>

    <!-- Countdown Timer -->
    <div class="text-sm text-text-muted font-medium mt-spacing-md">
      23 Days 02:45:09
    </div>

    <!-- Bottom Content with Social Links -->
    <div class="flex items-center justify-between mt-auto pt-spacing-xl">
      <div class="flex items-center gap-4">
        <!-- LinkedIn Icon Placeholder -->
        <div
          class="w-10 h-10 bg-bg-card rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"
        >
          <span class="text-text-secondary hover:text-text-on-green text-xs"
            >LI</span
          >
        </div>
        <!-- YouTube Icon Placeholder -->
        <div
          class="w-10 h-10 bg-bg-card rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"
        >
          <span class="text-text-secondary hover:text-text-on-green text-xs"
            >YT</span
          >
        </div>
      </div>
      <div>
        <a
          href="https://openapis.org"
          class="text-text-secondary hover:text-primary text-sm font-medium transition-colors duration-transition-fast"
        >
          OPENAPIS.ORG
        </a>
      </div>
    </div>
  </div>

  <!-- Right Content Container (1/3) -->
  <div class="flex flex-col w-1/3 bg-bg-dark-elevated overflow-hidden">
    <!-- Background Image Placeholder -->
    <div class="w-full h-full relative bg-bg-card text-text-muted text-sm">
      <img
        src="/images/background/background_top_right.jpg"
        alt="Paris Landmark"
        class="absolute w-full h-full object-none"
      />
    </div>

    <!-- Location Content -->
    <div class="absolute p-20 flex flex-col gap-spacing-lg p-spacing-xl">
      <!-- Icon Placeholder -->
      <div class="w-8 h-8 bg-primary rounded-full"></div>

      <!-- Location Details -->
      <div class="flex flex-col gap-spacing-sm mt-auto">
        <h3 class="text-lg font-bold text-text-primary leading-tight">
          CNIT FOREST, <br />PARIS
        </h3>
        <p class="text-xs text-text-muted leading-relaxed">
          2 PL. DE LA DEFENSE,<br />92092 PUTEAUX,<br />FRANCE
        </p>
      </div>
    </div>
  </div>
</header>
