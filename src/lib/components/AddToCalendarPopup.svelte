<script lang="ts">
  const { isOpen = false, onClose } = $props<{
    isOpen: boolean;
    onClose: () => void;
  }>();

  // Event details
  const eventTitle = "OpenAPI Conference Paris 2025";
  const eventDescription = "Join us at the OpenAPI Conference in Paris";
  const eventLocation =
    "CNIT Forest, 2 Pl. de la Defense, 92092 Puteaux, France";
  const startDate = "2025-12-11T09:00:00";
  const endDate = "2025-12-11T18:00:00";

  // Format dates for different calendars
  const googleStart = "20251211T090000";
  const googleEnd = "20251211T180000";

  // Google Calendar URL
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${googleStart}/${googleEnd}&details=${encodeURIComponent(eventDescription)}&location=${encodeURIComponent(eventLocation)}`;

  // Outlook URL
  const outlookUrl = `https://outlook.office.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(eventTitle)}&body=${encodeURIComponent(eventDescription)}&startdt=${startDate}&enddt=${endDate}&location=${encodeURIComponent(eventLocation)}`;

  // Generate ICS content
  function generateICS(): string {
    const uid = `openapi-conference-2025@openapis.org`;
    const dtstamp =
      new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

    const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//OpenAPI Conference//EN
BEGIN:VEVENT
UID:${uid}
DTSTAMP:${dtstamp}
DTSTART:20251211T090000
DTEND:20251211T180000
SUMMARY:${eventTitle}
DESCRIPTION:${eventDescription}
LOCATION:${eventLocation}
END:VEVENT
END:VCALENDAR`;

    return ics;
  }

  function downloadICS() {
    const ics = generateICS();
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "openapi-conference.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    onClose();
  }

  function handleBackdropClick(e: MouseEvent) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  // Calendar options
  type CalendarOption = {
    name: string;
    icon: string;
    type: "link" | "button";
    href?: string;
    onclick?: () => void;
  };

  const calendarOptions: CalendarOption[] = [
    {
      name: "Google Calendar",
      icon: "M19.5 3h-3V1.5h-1.5V3h-6V1.5H7.5V3h-3C3.675 3 3 3.675 3 4.5v15c0 .825.675 1.5 1.5 1.5h15c.825 0 1.5-.675 1.5-1.5v-15c0-.825-.675-1.5-1.5-1.5zm0 16.5h-15V9h15v10.5zM6 10.5h3v3H6v-3zm4.5 0h3v3h-3v-3zm4.5 0h3v3h-3v-3z",
      type: "link",
      href: googleCalendarUrl,
    },
    {
      name: "Apple Calendar",
      icon: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z",
      type: "link",
      onclick: downloadICS,
    },
    {
      name: "Outlook",
      icon: "M21.5 3h-9.13c-.41 0-.8.17-1.08.46L7.2 7.54c-.28.28-.45.67-.45 1.08v9.13c0 .83.67 1.5 1.5 1.5h13.25c.83 0 1.5-.67 1.5-1.5V4.5c0-.83-.67-1.5-1.5-1.5zm0 14.25H8.25V8.62l4.08-4.12h9.17v12.75z",
      type: "link",
      href: outlookUrl,
    },
    {
      name: "Download .ics",
      icon: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z",
      type: "link",
      onclick: downloadICS,
    },
  ];
</script>

{#if isOpen}
  <!-- Backdrop -->
  <div
    class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
    onclick={handleBackdropClick}
    onkeydown={(e) => e.key === "Escape" && onClose()}
    role="dialog"
    aria-modal="true"
    tabindex="-1"
  >
    <!-- Popup -->
    <div
      class="bg-black border border-primary-green-muted rounded-xl p-6 w-full"
      style="max-width: 384px"
    >
      <!-- Header -->
      <div class="flex items-center justify-between mb-6">
        <div
          class="text-lg font-bold text-text-primary uppercase tracking-widest"
        >
          Add to Calendar
        </div>
        <button
          onclick={onClose}
          class="text-text-muted hover:text-text-primary transition-colors"
          aria-label="Close"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            />
          </svg>
        </button>
      </div>

      <!-- Calendar Options -->
      <div class="flex flex-col gap-3">
        {#each calendarOptions as option}
          <a
            href={option.href ?? "#"}
            target={option.href ? "_blank" : undefined}
            rel={option.href ? "noopener noreferrer" : undefined}
            onclick={option.onclick ? (e) => { e.preventDefault(); option.onclick?.(); } : undefined}
            class="flex items-center gap-3 p-4 rounded-lg hover:border-primary hover:bg-primary/10 transition-colors cursor-pointer"
            style="border: 1px solid #4d7051"
          >
            <svg
              class="w-5 h-5 text-primary shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d={option.icon} />
            </svg>
            <span class="text-sm font-medium text-text-primary"
              >{option.name}</span
            >
          </a>
        {/each}
      </div>
    </div>
  </div>
{/if}
