<script lang="ts">
</script>

<header
  class="flex flex-row flex-nowrap gap-spacing-lg gap-y-14 h-[1117px] bg-bg-dark text-text-primary"
>
  <!-- Left Content Container (2/3) -->
  <div
    class="flex w-2/3 flex-col gap-y-10 gap-x-10 p-10 px-14 border-r-border-primary"
  >
    <!-- Logos Section -->
    <div
      class="flex flex-row w-full items-center h-[64px] justify-between px-2"
    >
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
        class="w-24 h-[64px] flex items-center justify-center text-text-muted text-sm"
      >
        <img
          src="/images/img_hosted_by_fost.png"
          alt="Hosted by Fost Logo"
          class="w-24 h-[16px]"
        />
      </div>
    </div>

    <!-- Title Section -->
    <div class="flex flex-col pt-12">
      <h1
        class="text-9xl leading-[114px] font-bold tracking-tighter wrap-break-word"
      >
        <span class="text-primary block">OPENAPI</span>
        <span class="text-text-primary block">CONFERENCE</span>
        <span class="text-text-primary block">IN PARIS</span>
      </h1>
    </div>

    <!-- Decorative Line -->
    <div class="w-full h-px bg-primary-green-muted my-spacing-md"></div>

    <!-- Subtitle with Date and Calendar -->
    <div class="flex items-center justify-between gap-spacing-lg">
      <div
        class="text-lg tracking-widest font-bold text-text-primary uppercase"
      >
        11 December, 2025
      </div>
      <div
        class="text-sm transition-colors duration-transition-fast uppercase text-text-muted px-4 py-2 rounded-md hover:cursor-pointer tracking-widest leading-tightest"
      >
        + Add to calendar
      </div>
    </div>

    <!-- Register Button -->
    <div
      class="bg-primary mt-10 rounded-[56px] flex font-bold tracking-wide px-spacing-2xl items-center justify-between h-30 w-full hover:bg-primary-dark text-text-on-green text-[42px] uppercase py-spacing-md transition-colors duration-transition-base mt-spacing-xl pl-10 shadow-md hover:shadow-lg cursor-pointer"
    >
      <span>Register Now</span>
      <div
        class="w-24 h-24 mr-3 bg-black rounded-full flex items-center justify-center shrink-0 ml-4"
      >
        <svg
          class="w-7 h-7 text-primary ml-0.5"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>

    <!-- Countdown Timer -->
    <div class="text-sm text-text-muted font-medium tracking-widest">
      23 Days ~ 02:45:09
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
          class="text-text-secondary hover:text-primary text-sm font-medium transition-colors duration-transition-fast tracking-widest"
        >
          OPENAPIS.ORG
        </a>
      </div>
    </div>
  </div>

  <!-- Right Content Container (1/3) -->
  <div
    class="flex flex-col w-1/3 border-0 border-l border-l-border-primary bg-bg-dark-elevated overflow-hidden relative"
  >
    <!-- Background Image -->
    <div
      class="w-full h-full relative bg-[url(/images/background/background_top_right.jpg)] bg-cover bg-center"
    >
      <!-- Dark Overlay -->
      <div class="absolute inset-0 bg-[#00000052]"></div>

      <!-- Location Content Overlay -->
      <div
        class="absolute px-[64px] py-[72px] inset-0 p-spacing-xl flex flex-col justify-between"
      >
        <!-- Location Pin Icon -->
        <div
          class="shrink-0 bg-black rounded-[100px] flex items-center w-24 h-24 justify-center"
        >
          <svg
            class="w-14 h-14 text-primary"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
            />
          </svg>
        </div>

        <!-- Location Details at Bottom -->
        <div class="flex flex-col gap-6 shrink-0">
          <h2
            class="text-3xl font-bold text-text-primary leading-tight tracking-widest"
          >
            CNIT FOREST, <br />PARIS
          </h2>
          <p class="text-sm text-text-muted leading-tight tracking-widest">
            2 PL. DE LA DEFENSE,<br />92092 PUTEAUX,<br />FRANCE
          </p>
        </div>
      </div>
    </div>
  </div>
</header>
